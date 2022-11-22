<?php

namespace App\Observers;

use App\Mail\NotificationEnvioStatus;
use App\Mail\NotificationInvoiceResend;
use App\Models\Almacenes;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;

class EnviosObserver
{
    /**
     * Handle the Envios "created" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public $status = [
        [
            'title' => 'ALMACÉN MIAMI',
            'valor' => 'FACTURADO',
        ],
        [
            'title' => 'ENVIADO HACIA VENEZUELA',
            'valor' => 'ENVIO-VENEZUELA',
        ],
        [
            'title' => 'EN TRÁNSITO HACIA VENEZUELA',
            'valor' => 'ENTRANSITO-VENEZUELA',
        ],
        [
            'title' => 'ADUANA DE VENEZUELA',
            'valor' => 'ADUANA-VENEZUELA',
        ],
        [
            'title' => 'ALMACÉN VENEZUELA',
            'valor' => 'ALMACEN-VENEZUELA',
        ],
        [
            'title' => 'ENTREGADO',
            'valor' => 'ENTREGADO'
        ]
    ];
    

    public function created(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "updated" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function updated(Envios $envios)
    {
        $estado = 'ENVIADO';
        $activo = true;
        $info = [];

        if( $envios->estado == 'ENVIO-VENEZUELA'  ){
            $factura = Facturas::find($envios->id_factura);

            $invoice = [
                'nro_factura' => $factura->nro_factura,
                'fecha_estimada' => $envios->fecha_estimada,
                'tipo_envio' => $factura->tipo_envio,
                'nro_container' => $factura->nro_container,
                'gastos_extras' => $factura->gastos_extras,
                'total_usd' => $factura->total_usd,
                'total_ves' => $factura->total_ves,
                'fecha_creado' => $factura->fecha_creado,
                'monto_tc' => ''
            ];

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
            $user = User::find($factura->usuario_id);
            

            if( $user != null ){
                $pdf = PDF::loadView('reports.invoice', $data);
                Mail::to($user->email)
                    ->send(new NotificationInvoiceResend($invoice, $pdf->output()));
            }
     
        }

        if( $envios->estado != 'ENVIO-VENEZUELA' && $envios->estado != 'FACTURADO' && $envios->estado != 'ENTREGADO' ){
            $factura = Facturas::find($envios->id_factura);
            $client = json_decode($factura->cliente);
            $user = User::find($factura->usuario_id);

            $arreglo = [
                'status' => $this->reStatus($envios->estado),
                'nro_factura' => $factura->nro_factura,
                'fecha_creado' => $factura->fecha_creado,
                'fecha_estimada' => $envios->fecha_estimada,
            ];

            Mail::to($user->email)->send(new NotificationEnvioStatus($arreglo));
        }

        if( $envios->estado == 'ENVIO-VENEZUELA' || $envios->estado == 'ENTREGADO'){
            $info = FacturasInfoTrackings::select(['warehouse'])->where('id_factura', '=', $envios->id_factura)->get()->toArray();

            /*if( $envios->estado == 'ENTREGADO' ){
                $activo = false;
            }*/
        }

        for ($i=0; $i < count($info) ; $i++) { 
            $almacen = Almacenes::where('warehouse', '=', $info[$i]['warehouse'])->first();
            $almacen->estado = $estado;
            $almacen->activo = $activo;

            $almacen->update();
        }
    }

    /**
     * Handle the Envios "deleted" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function deleted(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "restored" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function restored(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "force deleted" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function forceDeleted(Envios $envios)
    {
        //
    }

    public function reStatus($valor)
    {
        $status = $this->status;

        for ($i=0; $i < count($status) ; $i++) { 
            if( $status[$i]['valor'] == $valor ){
                return $status[$i]['title'];
            }
        }
    }
}
