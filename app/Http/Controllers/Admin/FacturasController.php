<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Almacenes;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class FacturasController extends Controller
{

    public function index()
    {
        $select = [
            'facturas.id_factura',
            'facturas.nro_factura',
            'facturas.nro_container',
            'facturas.cliente',
            'facturas.pago',
            'facturas.gastos_extras',
            'facturas.total_usd',
            'facturas.total_ves',
            'facturas.estado',
            'facturas.tipo_envio',
            'facturas.fecha_creado',
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->fecha_inicio = ( $query != null && isset($query->fecha_inicio) && $query->fecha_inicio != '' ) ? $query->fecha_inicio : "";
        $this->fecha_final = ( $query != null && isset($query->fecha_final) && $query->fecha_final != '' ) ? $query->fecha_final : "";
       
        $records = Facturas::select($select)
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'facturas.usuario_id')
        ->where('facturas.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('facturas.nro_factura',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas.nro_container',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%');
        });

        if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('facturas.estado', '=', $this->estado);
        }

        if( $this->fecha_inicio != '' || $this->fecha_final != ''){
            $this->fecha_inicio = ( $this->fecha_inicio == '' ) ? Carbon::now()->format('Y-m-d') : $this->fecha_inicio;
            $this->fecha_final = (  $this->fecha_final == '' ) ? Carbon::now()->format('Y-m-d') :  $this->fecha_final;
           
            $records = $records->whereBetween('facturas.fecha_creado', [$this->fecha_inicio, $this->fecha_final]);
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
            $results[$i]['cliente'] = json_decode($results[$i]['cliente']);
            $results[$i]['pago'] = json_decode($results[$i]['pago']);
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

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
            'nro_container' => ['required','regex:/^[0-9]+$/'],
            'tipo_envio' => ['required'],
            'cliente' => ['required'],
            'trackings' => ['required'],
            'total_gastos_extras' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_usd' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
            'usuario_id' => ['required'],
            'monto_tc' => ['required'],
            'fecha_tc' => ['required'],
            'tarifa_envio' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $trackings = $request->trackings;
        if( count($trackings) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, Debe de agregar almenos un tracking con su warehouse',
            ], 403);
        }
        for ($i=0; $i < count($trackings); $i++) { 
            $validar = Validator::make($trackings[$i], [
                'seguro' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                'total_seguro' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                'subTotal' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                'tracking' => ['required'],
                'warehouse' => ['required'],
                'tracking' => ['required'],
                'descripcion' => ['required'],
                'ancho' => ['required'],
                'alto' => ['required'],
                'largo' => ['required'],
                'peso' => ['required'],
                'num_piezas' => ['required'],
                'volumen' => ['required'],
                'pie_cubico' => ['required'],
                'reempaque' => ['required'],
            ]);

            if (array_key_exists('cost_reempaque', $trackings[$i]) && !$validar->fails()) {
                $validar = Validator::make($trackings[$i], [
                    'cost_reempaque' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                ]);
            }
            if (array_key_exists('cost_x_tracking', $trackings[$i]) && !$validar->fails()) {
                $validar = Validator::make($trackings[$i], [
                    'cost_x_tracking' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                ]);
            }

            if ( isset($validar) && $validar->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Error, en el tracking '.$trackings[$i]['tracking'].' '.$validar->errors()->first(),
                ], 403);
            }
        }

        $extras_cajas= $request->extras_cajas;
        for ($i=0; $i < count($extras_cajas); $i++) { 
            $validar = Validator::make($extras_cajas[$i], [
                'monto_gasto_extra' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                'total_caja' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                'cant' => ['required', 'regex:/^[0-9]+$/'],
            ]);

            if ( isset($validar) && $validar->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Error, la caja '.$extras_cajas[$i]['nombre'].' '.$validar->errors()->first(),
                ], 403);
            }
        }

        $factura = new Facturas;
        $factura->usuario_id = $request->usuario_id;
        $factura->nro_factura = $request->nro_factura;
        $factura->nro_container = $request->nro_container;
        $factura->cliente = json_encode($request->cliente);
        $factura->pago = json_encode([]);
        $factura->gastos_extras = $request->total_gastos_extras;
        $factura->total_usd = $request->total_usd;
        $factura->total_ves = $request->total_ves;
        $factura->tipo_envio = $request->tipo_envio;

        $factura->monto_tc = $request->monto_tc;
        $factura->fecha_tc = $request->fecha_tc;
        $factura->tarifa_envio = $request->tarifa_envio;
        $factura->save();

   
        for ($i=0; $i < count($trackings) ; $i++) { 
            $factura_tracking = new FacturasInfoTrackings;

            $factura_tracking->id_factura = $factura->id_factura;
            $factura_tracking->warehouse = $trackings[$i]['warehouse'];
            $factura_tracking->tracking = $trackings[$i]['tracking'];
            $factura_tracking->descripcion = $trackings[$i]['descripcion'];
            $factura_tracking->ancho = $trackings[$i]['ancho'];
            $factura_tracking->alto = $trackings[$i]['alto'];
            $factura_tracking->largo = $trackings[$i]['largo'];
            $factura_tracking->peso = $trackings[$i]['peso'];
            $factura_tracking->num_piezas = $trackings[$i]['num_piezas'];
            $factura_tracking->volumen = $trackings[$i]['volumen'];
            $factura_tracking->pie_cubico = $trackings[$i]['pie_cubico'];
            $factura_tracking->ruta_image = $trackings[$i]['ruta_image'];
            $factura_tracking->reempaque = $trackings[$i]['reempaque'];
            $factura_tracking->seguro = $trackings[$i]['seguro']; 
            $factura_tracking->total_seguro = $trackings[$i]['total_seguro'];
            $factura_tracking->sub_total = $trackings[$i]['subTotal'];

            if (array_key_exists('cost_reempaque', $trackings[$i])){
                $factura_tracking->cost_reempaque = $trackings[$i]['cost_reempaque'];
            }

            if (array_key_exists('cost_x_tracking', $trackings[$i])){
                $factura_tracking->cost_x_tracking = $trackings[$i]['cost_x_tracking'];
            }

            $factura_tracking->save();
        }

        for ($i=0; $i < count($extras_cajas) ; $i++) { 
            $factura_extra = new FacturasInfoExtras;
            $factura_extra->id_factura = $factura->id_factura; 
            $factura_extra->detalles = json_encode($extras_cajas[$i]); 
            $factura_extra->precio_unitario = $extras_cajas[$i]['monto_gasto_extra']; 
            $factura_extra->sub_total = $extras_cajas[$i]['total_caja']; 
            
            $factura_extra->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'La factura fue creada con exito. numero de factura '.$factura->nro_factura,
        ], 200);
    }

    public function edit($id, Request $request)
    {

        if( isset($request->estado) && $request->estado == 'Pendiente'){
            $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

            if($factura != null){
                $factura->trackings = FacturasInfoTrackings::where([['id_factura', $id]])->get()->toArray();
                $factura->extras = FacturasInfoExtras::where([['id_factura', $id]])->get()->toArray();

                $tasa = null;
                $records = MonedasCambios::select(['id_moneda_cambio', 'abreviatura_moneda_nc'])
                ->where('monedas_cambios.activo', '=', true)
                ->first();

                if( $records != null ){
                    $tasa = MonedasCambiosTasas::select(['monto_tc', 'fecha_tc'])
                    ->where('id_moneda_cambio', '=', $records->id_moneda_cambio)
                    ->where('activo', '=', true)
                    ->orderBy('fecha_tc', 'DESC')
                    ->first();
                }

                return response()->json([
                    'status' => 200,
                    'result' => $factura,
                    'tasa' => $tasa,
                    'extras' => GastosExtras::select('*')->where([['activo', true], ['tipo', 'CAJA']])->get()->toArray()
                ], 200);
            }
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, ya esta factura no se puede editar',
            ], 403);
        }
    }

    public function show($id)
    {

        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura != null){
            $factura->trackings = FacturasInfoTrackings::where([['id_factura', $id]])->get()->toArray();
            $factura->extras = FacturasInfoExtras::where([['id_factura', $id]])->get()->toArray();
            $factura->pago = json_decode($factura->pago);

            $tasa = null;
            $records = MonedasCambios::select(['id_moneda_cambio', 'abreviatura_moneda_nc'])
            ->where('monedas_cambios.activo', '=', true)
            ->first();

            if( $records != null ){
                $tasa = MonedasCambiosTasas::select(['monto_tc', 'fecha_tc'])
                ->where('id_moneda_cambio', '=', $records->id_moneda_cambio)
                ->where('activo', '=', true)
                ->orderBy('fecha_tc', 'DESC')
                ->first();
            }

            return response()->json([
                'status' => 200,
                'result' => $factura,
                'tasa' => $tasa,
                'extras' => GastosExtras::select('*')->where([['activo', true], ['tipo', 'CAJA']])->get()->toArray()
            ], 200);
        }
        
    }

    public function update($id, Request $request)
    {

        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura != null){
            if( isset($request->estado) && $request->estado == 'Pendiente'){
                $validator = Validator::make($request->all(), [
                    'nro_factura' => ['required','regex:/^[0-9]+$/'],
                    'nro_container' => ['required','regex:/^[0-9]+$/'],
                    'tipo_envio' => ['required'],
                    'cliente' => ['required'],
                    'trackings' => ['required'],
                    'total_gastos_extras' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                    'total_usd' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                    'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
                    'usuario_id' => ['required'],
                    'monto_tc' => ['required'],
                    'fecha_tc' => ['required'],
                    'tarifa_envio' => ['required'],
                ]);

                if ( isset($validator) && $validator->fails() ) {
                    return response()->json([
                        'status' => 403,
                        'message' => $validator->errors()->first(),
                    ], 403);
                }

                $trackings = $request->trackings;
                if( count($trackings) == 0 ){
                    return response()->json([
                        'status' => 403,
                        'message' => 'Error, Debe de agregar almenos un tracking con su warehouse',
                    ], 403);
                }
                
                for ($i=0; $i < count($trackings); $i++) { 
                    $validar = Validator::make($trackings[$i], [
                        'seguro' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        'total_seguro' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        'subTotal' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        'tracking' => ['required'],
                        'warehouse' => ['required'],
                        'tracking' => ['required'],
                        'descripcion' => ['required'],
                        'ancho' => ['required'],
                        'alto' => ['required'],
                        'largo' => ['required'],
                        'peso' => ['required'],
                        'num_piezas' => ['required'],
                        'volumen' => ['required'],
                        'pie_cubico' => ['required'],
                        'reempaque' => ['required'],
                    ]);

                    if (array_key_exists('cost_reempaque', $trackings[$i]) && !$validar->fails()) {
                        $validar = Validator::make($trackings[$i], [
                            'cost_reempaque' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        ]);
                    }
                    if (array_key_exists('cost_x_tracking', $trackings[$i]) && !$validar->fails()) {
                        $validar = Validator::make($trackings[$i], [
                            'cost_x_tracking' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        ]);
                    }

                    if ( isset($validar) && $validar->fails() ) {
                        return response()->json([
                            'status' => 403,
                            'message' => 'Error, en el tracking '.$trackings[$i]['tracking'].' '.$validar->errors()->first(),
                        ], 403);
                    }
                }

                $extras_cajas= $request->extras_cajas;
                for ($i=0; $i < count($extras_cajas); $i++) { 
                    $validar = Validator::make($extras_cajas[$i], [
                        'monto_gasto_extra' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        'total_caja' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
                        'cant' => ['required', 'regex:/^[0-9]+$/'],
                    ]);

                    if ( isset($validar) && $validar->fails() ) {
                        return response()->json([
                            'status' => 403,
                            'message' => 'Error, la caja '.$extras_cajas[$i]['nombre'].' '.$validar->errors()->first(),
                        ], 403);
                    }
                }

                for ($i=0; $i < count($trackings) ; $i++) { 
                    $factura_tracking = FacturasInfoTrackings::find($trackings[$i]['id_factura_tracking']);
        
                    $factura_tracking->warehouse = $trackings[$i]['warehouse'];
                    $factura_tracking->tracking = $trackings[$i]['tracking'];
                    $factura_tracking->descripcion = $trackings[$i]['descripcion'];
                    $factura_tracking->ancho = $trackings[$i]['ancho'];
                    $factura_tracking->alto = $trackings[$i]['alto'];
                    $factura_tracking->largo = $trackings[$i]['largo'];
                    $factura_tracking->peso = $trackings[$i]['peso'];
                    $factura_tracking->num_piezas = $trackings[$i]['num_piezas'];
                    $factura_tracking->volumen = $trackings[$i]['volumen'];
                    $factura_tracking->pie_cubico = $trackings[$i]['pie_cubico'];
                    $factura_tracking->ruta_image = $trackings[$i]['ruta_image'];
                    $factura_tracking->reempaque = $trackings[$i]['reempaque'];
                    $factura_tracking->seguro = $trackings[$i]['seguro']; 
                    $factura_tracking->total_seguro = $trackings[$i]['total_seguro'];
                    $factura_tracking->sub_total = $trackings[$i]['subTotal'];
        
                    if (array_key_exists('cost_reempaque', $trackings[$i])){
                        $factura_tracking->cost_reempaque = $trackings[$i]['cost_reempaque'];
                    }
        
                    if (array_key_exists('cost_x_tracking', $trackings[$i])){
                        $factura_tracking->cost_x_tracking = $trackings[$i]['cost_x_tracking'];
                    }
        
                    $factura_tracking->update();
                }

                $extras_old = FacturasInfoExtras::where('id_factura', '=', $id)->get()->toArray();

                if( count($extras_old) > 0 ){
                    for ($i=0; $i < count($extras_old) ; $i++) { 
                        $detalles = json_decode($extras_old[$i]['detalles']);
                        $check = array_search($detalles->id_gasto_extra, array_column($extras_cajas, 'id_gasto_extra'));
                        $extra = FacturasInfoExtras::find($extras_old[$i]['id_factura_extra']);

                        if(!$check){
                           $extra->delete();
                        }else{
                            $indice = $check;
                            $extra->detalles = json_encode($extras_cajas[$indice]);
                            $extra->precio_unitario = $extras_cajas[$indice]['monto_gasto_extra']; 
                            $extra->sub_total = $extras_cajas[$indice]['total_caja'];

                            $extra->update();
                            unset($extras_cajas[$indice]);
                        }
                    }
                    
                }

                for ($i=0; $i < count($extras_cajas) ; $i++) { 
                    $factura_extra = new FacturasInfoExtras;
                    $factura_extra->id_factura = $factura->id_factura; 
                    $factura_extra->detalles = json_encode($extras_cajas[$i]); 
                    $factura_extra->precio_unitario = $extras_cajas[$i]['monto_gasto_extra']; 
                    $factura_extra->sub_total = $extras_cajas[$i]['total_caja']; 
                    
                    $factura_extra->save();
                }

                
                $factura->usuario_id = $request->usuario_id;
                $factura->nro_factura = $request->nro_factura;
                $factura->nro_container = $request->nro_container;
                $factura->cliente = json_encode($request->cliente);
                $factura->pago = json_encode([]);
                $factura->gastos_extras = $request->total_gastos_extras;
                $factura->total_usd = $request->total_usd;
                $factura->total_ves = $request->total_ves;
                $factura->tipo_envio = $request->tipo_envio;

                $factura->monto_tc = $request->monto_tc;
                $factura->fecha_tc = $request->fecha_tc;
                $factura->tarifa_envio = $request->tarifa_envio;
                $factura->update();
                
        
                return response()->json([
                    'status' => 200,
                    'message' => 'La factura fue actualizada con exito. numero de factura '.$factura->nro_factura,
                ], 200);
        


            }else{
                return response()->json([
                    'status' => 403,
                    'message' => 'Error, No se puede actualizar',
                ], 403);
            }

        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, Esta factura no se encuentra disponible',
            ], 403);
        }
    }

    public function pagoVerificado($id)
    {
        $factura = Facturas::find($id);

        $factura->estado = 'Pago-Verificado';

        $factura->update();

        return response()->json([
            'status' => 200,
            'message' => 'El pago de la factura '.$factura->nro_factura. ' fue verficado con exito',
        ], 200);

    }

    public function print_invoice($id)
    {
        
        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura != null){
            $invoice = [
                'nro_factura' => $factura->nro_factura,
                'fecha_estimada' => '',
                'tipo_envio' => $factura->tipo_envio,
                'nro_container' => $factura->nro_container,
                'gastos_extras' => $factura->gastos_extras,
                'total_usd' => $factura->total_usd,
                'total_ves' => $factura->total_ves,
                'fecha_creado' => $factura->fecha_creado,
                'monto_tc' => ''
            ];

            $envio = Envios::where('id_factura', '=', $factura->id_factura)->first();

            if( $envio->estado != 'FACTURADO' ){
                $invoice['fecha_estimada'] = Carbon::parse($envio->fecha_estimada)->format('d-m-Y');
            }

            $invoice_info_trackings = FacturasInfoTrackings::where([['id_factura', $factura->id_factura]])->get()->toArray();
            $invoice_info_extras = FacturasInfoExtras::where([['id_factura', $factura->id_factura]])->get()->toArray();

            for ($i=0; $i < count($invoice_info_trackings); $i++) { 
                $invoice_info_trackings[$i] = json_encode($invoice_info_trackings[$i]);
                $invoice_info_trackings[$i] = json_decode($invoice_info_trackings[$i]);
            }

            for ($i=0; $i < count($invoice_info_extras) ; $i++) { 
                $invoice_info_extras[$i] = json_decode($invoice_info_extras[$i]['detalles']);
            }
            
            $client = json_decode($factura->cliente);
            $data = [
                "invoice" => $invoice,
                "user" => $client,
                "invoice_info_trackings" => $invoice_info_trackings,
                "invoice_info_extras" => $invoice_info_extras
            ];

            $pdf = PDF::loadView('reports.invoice', $data);
            $nameInvoice = $factura->nro_factura.'-'.$client->cod_usuario.'';
            $path = public_path('pdf');
            $fileName =  time().'-'.''.$nameInvoice. '.pdf' ;
            $pdf->save($path . '/' . $fileName);

            $pdf = public_path('pdf/'.$fileName);
            return response()->download($pdf);
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, No encuentra esta factura',
            ], 403);
        }
    }

    public function destroy($id)
    {
        $factura = Facturas::find($id);

        if( $factura->estado != 'Pendiente' ){
            return response()->json([
                'status' => 422,
                'message' => 'No se puede eliminar',
            ], 422);
        }

        $envio = Envios::where('id_factura', '=', $factura->id_factura)->first();

        if( $envio->estado != 'FACTURADO' ){
            return response()->json([
                'status' => 422,
                'message' => 'No se puede eliminar, porque hay un envio en camino a Venezuela',
            ], 422);
        }

        $facturasInfoTrackings= FacturasInfoTrackings::where('id_factura', '=', $factura->id_factura)->first();

        if( $facturasInfoTrackings->warehouse ){
            $almacen = Almacenes::where('warehouse', '=', $facturasInfoTrackings->warehouse)
            ->where('activo', '=', true)
            ->first();

            if( $almacen != null ){
                $almacen->estado = 'recibido';
                $almacen->update();
            }
        }

        $factura->delete();

        return response()->json([
            'status' => 200,
            'message' => 'La Factura: '. $factura->nro_factura.' fue eliminado con exito con éxito',
        ], 200);
    }

    public function analyze(Request $request)
    {
        $from = null;
        $to = new Carbon('tomorrow');
        $cantidad = 0;

        if( $request->valor == '7' ){
            $from = Carbon::now()->subDays(7)->format('Y-m-d');
        }else if ( $request->valor == '30'  ){
            $from = Carbon::now()->subDays(30)->format('Y-m-d');
        }else if( $request->valor == '90' ){
            $from = Carbon::now()->subDays(90)->format('Y-m-d');
        }

        if( $from != null ){
            $results = Facturas::select(['total_usd'])
            ->whereBetween('fecha_creado', [$from, $to])->get()->toArray();
            for ($i=0; $i < count($results) ; $i++) { 
                $cantidad = $cantidad + $results[$i]['total_usd'];
            }
        }
        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function state()
    {
        $cantidad = Facturas::where([['activo', true], ['estado', 'Pendiente']])->count();


        return response()->json([
            'status' => 200,
            'result' => $cantidad,
        ], 200);
    }
}
