<template>
<div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <div class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-6">
                                <p class="h3">Detalles</p>
                                <address>
                                    <p v-show="details.fecha_factura != ''">Fecha Factura: <span style="text-transform: uppercase;">{{details.fecha_factura}}</span> </p>
                                    <p>Numero Factura: {{details.nro_factura}}</p>
                                    <p>Tarifa Envio: {{details.tarifa}} USD</p>
                                    <p>Tipo Envio:  <span style="text-transform: uppercase;">{{details.tipo_envio}}</span></p>
                                    <p>Tasa Bs: {{details.monto_tc}} VES</p>
                                </address>
                            </div>
                            <div class="col-6 text-end">
                                <p class="h3">Cliente</p>
                                <address>
                                    <p>Nombre Completo: {{client.nombres}} {{client.apellidos}}</p>
                                    <p v-if="client.cod_usuario != null">Código Usuario: {{client.cod_usuario}}</p>
                                    <p>Teléfono: {{client.telefono}}</p>
                                    <p>Cédula: {{client.cedula}}</p>
                                    <p>Dirección: {{client.estado_ve}}. {{client.zona}}, {{client.codigo_postal}} </p>
                                    <p v-if="client.ref_direccion != null">Ref. Dirección: {{client.ref_direccion}}</p>
                                </address>
                            </div>
                        </div>
                        <ware-house 
                            v-bind:warehouses="warehouses"
                        />
                        <content-body 
                            v-bind:dataContent="dataContent"
                        />
                    </div>
                </div>
            </div>
       </div>
</div>
</template>

<script>

//componentes de primer plano, para factura
import WareHouse from '../../../components/facturas/WareHouse.vue';
import ContentBody from '../../../components/facturas/ContentBody.vue';

//componentes de segundo plano
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');

//helpers
import { create_factura, data_contents } from '../../../helpers/calcInvoice';
import { formatPrice } from '../../../formatPrice';

export default {
    name: 'LayoutFormFacturar',
    data(){
        return{
            envio: '', // factura con envios sin reempaques ( directos ) || o con envios con reempaque ( reempaque )
            type_form: 'new', //tipo de form, new es crear factura, edit es editar factura y  show es ver factura,
            componentRender: LoaderComponent,
            //detalles para la factura
            details: {
                tarifa: '0.00',
                fecha_factura: '',
                nro_factura: '',
                tipo_envio: '',
                monto_tc: '0,00',
            },
            //informacion del cliente
            client: {},
            //Datos de WareHouse
            warehouses: [],
            //data contents, de la factura
            dataContent: []
        }
    },
    components: {
        WareHouse,
        ContentBody
    },
    beforeCreate(){
        this.$nextTick(async function () {
            const query = this.$route.query;
            if( 
                Object.keys(query).length === 0 || 
                ( Object.keys(query).length !== 0 && ( !query.hasOwnProperty('id') || !query.hasOwnProperty('envio' ) ||  !query.hasOwnProperty('type') ) ) ||
                ( Object.keys(query).length !== 0 && query.hasOwnProperty('type') && ( query.type != 'new' && query.type != 'edit' && query.type != 'show' ) ) ||
                ( Object.keys(query).length !== 0 && query.hasOwnProperty('envio' ) && ( query.envio != 'no' && query.envio != 'si' ) ) ||
                (  Object.keys(query).length !== 0 && query.hasOwnProperty('id') && Array.isArray(query.id) && query.hasOwnProperty('type') && ( query.type == 'edit' || query.type == 'show' ) )
            ){
                this.componentRender = Error404;
                return;
            }

            this.envio = query.envio == 'no' ? 'directo' : 'reempaque';
            this.type_form = query.type;

            const url = query.type == 'show' || query.type == 'edit' ? '' : 'almacen/paquetes/data'

            this.get_axios(query, url);
        });
    },
    methods: {
        //obtener data de wh a facturar o datos de la factura
        get_axios(dataReq, url){
            this.axios.get(url, {params : dataReq}).then(response => {
                console.log('response.data.result', response.data.result);
                if(response.data.result == null){
                    this.componentRender = Error404;
                    return;
                }

                if( this.type_form == 'new' ){
                    let tarifa_aereo = '0.00';
                    let tarifa_maritimo = '0.00';

                    const { almacen, cliente, extras, tasaDolar } = response.data.result;
                    const { wh, details } = create_factura(almacen, extras, tasaDolar);

                    //tarifas de envios
                    tarifa_aereo = formatPrice.constPrice(cliente.tarifa_aereo, ',', '.');
                    tarifa_maritimo = formatPrice.constPrice(cliente.tarifa_maritimo, ',', '.');

                    //agregamos esta informacion en la cabecera.
                    this.details = details;
                    this.details.tarifa = details.tipo_envio == 'aereo' ? tarifa_aereo : tarifa_maritimo;

                    this.client = cliente;
                    
                    //agregar warehouses
                    this.warehouses = wh;
                    
                    //agregar data content de la factura
                    this.dataContent = data_contents(wh, details.tipo_envio, this.details.tarifa, this.envio);

                }

                setTimeout(() => {
                    this.componentRender = '';
                }, 1000);
            }).catch(error => {
                console.log(error.response.data)
                this.componentRender = Error404;
            });
        }
    }
}
</script>

<style>

</style>