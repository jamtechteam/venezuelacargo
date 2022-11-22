<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ShipmentsController extends Controller
{
    public function index()
    {
        $select = [
            'facturas.id_factura',
            'facturas.nro_factura',
            'facturas.nro_container',
            'facturas.tipo_envio',
            'facturas.total_usd',
            'facturas.estado AS estado_pago',
            'envios.id_envio',
            'envios.historial_estado',
            'envios.estado AS estado_envio', //FACTURADO - ENVIADO-VENEZUELA - EN-TRANSITO-VENEZUELA - ADUENA-VENEZUELA - ALMACEN-VENEZUELA - ENVIADO-CLINTE - ENTREGADO
            'envios.fecha_estimada',
            'envios.fecha_creado',
            'envios.fecha_editado',
        ];

        //warehouse
        // 

        extract(request()->only(['usuario_id','query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
       // $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->fecha_estimada = ( $query != null && isset($query->fecha_estimada) && $query->fecha_estimada != '' ) ? $query->fecha_estimada : "";

        $records = Envios::select($select)
        ->leftJoin('facturas', 'facturas.id_factura', '=', 'envios.id_factura')
        ->where('facturas.activo', '=', true)
        ->where('facturas.usuario_id', '=', $usuario_id)
        ->where('envios.estado', '<>', 'FACTURADO')
        ->Where(function($query) {
            $query->orWhere('facturas.nro_factura',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas.nro_container',  'LIKE', '%'.$this->search.'%');
        });

        /* if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('envios.estado', '=', $this->estado);
        }*/

        if( $this->fecha_estimada != ''){
           
            $records = $records->where('envios.fecha_estimada', '=', $this->fecha_estimada);
        }

        

        $count = $records->count();
        $records->limit($limit)
            ->skip($limit * ($page - 1));

        if (isset($orderBy)) {
            $direction = $ascending == 1 ? 'ASC' : 'DESC';
            $records->orderBy($orderBy, $direction);
        }

        $results = $records->get()->toArray();

        for ($i=0; $i < count($results) ; $i++) { 

            if( $results[$i]['historial_estado'] != null )
            $results[$i]['historial_estado'] = json_decode($results[$i]['historial_estado']);
        }

        return response()->json([
            'status' => 200,
            'results' => $results,
            'pagination' => [
                'numPage' => intval($page),
                'resultPage' => count($results),
                'totalResult' => $count
            ]
        ], 200);
    }

    public function savePago(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_factura' => ['required'],
            'tipo_moneda' => ['required'],
            'usuario_id' => ['required'],
            'comprobante' => ['required'],
            'tasa' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
            'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/']
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        if( Facturas::where([['id_factura', $request->id_factura], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe factura',
            ], 422);
        }

        $factura = Facturas::find($request->id_factura);
        if( $factura->estado == 'Pago-Verificado' ){
            return response()->json([
                'status' => 422,
                'message' => 'Esta factura ya tiene el pago verificado',
            ], 422);
        }

        if( $factura->estado == 'Verificacion-Pago' ){
            return response()->json([
                'status' => 422,
                'message' => 'Esta factura tiene un pago que esta en verificacion',
            ], 422);
        }

        $pago = [
            'tasa' => $request->tasa,
            'tipo_moneda' => $request->tipo_moneda,
            'comprobante' => Storage::url($request->comprobante->store('public/images'))
        ];

        $factura->total_ves = $request->total_ves;
        $factura->pago = json_encode($pago);
        $factura->monto_tc = $request->tasa;
        $factura->estado = 'Verificacion-Pago';
        $factura->fecha_pago =  Carbon::now()->format('Y-m-d');
        $factura->update();

        return response()->json([
            'status' => 200,
            'message' => 'Fue agregado el comprobante de pago de la factura: '.$factura->nro_factura
        ], 200);
    }
}
