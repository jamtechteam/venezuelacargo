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
                        :envio="envio"
                        @add_new_wh="add_new_wh"
                    />
                    <div class="w-100 mb-4">
                        <div class="row">
                            <div class="col-4">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group mb-3 ">
                                            <label class="form-label">Cajas</label>
                                            <div>
                                                <select class="form-select" v-model="caja">
                                                    <option v-for="(item, index) in cajas" :key="index" :value="item.id_gasto_extra">{{item.nombre}} - ${{item.monto_gasto_extra}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row col-6" style="padding-left: 0;">
                                        <div class="form-group mb-3 col-6">
                                            <label class="form-label">Cant.</label>
                                            <input type="number" class="form-control" min="1" pattern="^[0-9]+" name="example-password-input" placeholder="Cantidad Caja" v-model="cant_caja">
                                        </div>
                                        <div class="form-group mb-3 col-6" style="padding-left: 0;">
                                            <label class="form-label" style="opacity:0;">agegar</label>
                                            <div>
                                                <button type="button" class="btn btn-light" @click="addCaja">
                                                    Agregar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <content-body 
                        v-bind:dataContent="dataContent"
                    />
                    <list-cajas 
                        v-bind:listCajas="list_cajas"
                        @removeCaja="removeCaja"
                    />
                    <div class="d-flex align-items-center mt-4 mb-3">
                        <div class=" m-0 ms-auto">
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Total WH
                                </span>
                                <span style="max-width: 80px;">
                                    <input type="text" class="form-control" v-model="costo_trackings" name="costo_trackings" style="padding: 0.4375rem 5px;text-align: end;" @keyup="keyUpPrecio($event)" @change="changePrecio($event)">
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end" v-if="envio === 'reempaque'">
                                <span class="me-2">
                                    Total WH Reemp.
                                </span>
                                <span style="max-width: 80px;">
                                    <input type="text" class="form-control" v-model="costo_reempaque" name="costo_reempaque" style="padding: 0.4375rem 5px;text-align: end;" @keyup="keyUpPrecio($event)" @change="changePrecio($event)">
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Gastos Extras
                                </span>
                                <span style="max-width: 80px;">
                                    <input type="text" class="form-control" v-model="gastos_extras" name="gastos_extras" style="padding: 0.4375rem 5px;text-align: end;" @keyup="keyUpPrecio($event)" @change="changePrecio($event)">
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Total USD
                                </span>
                                <span style="width: 80px;" class="text-end">
                                    {{ total_usd }}
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Total VES
                                </span>
                                <span style="width: 80px;" class="text-end">
                                    {{ total_ves }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-5 mb-3">
                        <div class=" m-0 ms-auto" style="width: 330px;">
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" name="nro_factura" v-model="details.nro_factura" id="nro_factura"  >
                                <label for="nro_factura">Nro. Factura</label>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" name="nro_container" v-model="details.nro_container" id="nro_container"  >
                                <label for="nro_container">Nro. Container</label>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" name="tarifa" v-model="details.tarifa" id="tarifa" @keyup="keyUpPrecio($event)" @change="changePrecioTarifa" >
                                <label for="tarifa">Tarifa de Envio ( {{details.tipo_envio}} )</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-3">
                        <btn-volver :classe="'btn-light'"></btn-volver>
                        <button type="button" class="btn btn-info ms-auto">
                            <span>Guardar</span>
                        </button>
                    </div>
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
import ListCajas from '../../../components/facturas/ListCajas.vue';
import BtnVolver from '../../../components/BtnVolver.vue';

//componentes de segundo plano
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');

//helpers
import { create_factura, data_contents, add_box, calc_total_usd_data, suma_total_usd_var, calc_total_ves } from '../../../helpers/calcInvoice';
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
                nro_container: ''
            },
            //informacion del cliente
            client: {},
            //Datos de WareHouse
            warehouses: [],
            //data contents, de la factura
            dataContent: [],
            //cajas
            cajas: [],
            //propiedades para la seccion de imagenes
            caja: '',
            cant_caja: 1,
            //cajas utilizadas en la factura
            list_cajas: [],
            //footer content, total usd, total ves, total reempaque, total costo por tracking
            total_usd: '0.00',
            total_ves: '0,00',
            costo_trackings: '0.00',
            costo_reempaque: '0.00',
            gastos_extras: '0.00',
            //new wh para reempaque
            warehousesNew: [],
        }
    },
    components: {
        WareHouse,
        ContentBody,
        ListCajas,
        BtnVolver
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
                    const { wh, details, cajas, costo_trackings, costo_reempaque } = create_factura(almacen, extras, tasaDolar);

                    //tarifas de envios
                    tarifa_aereo = formatPrice.constPrice(cliente.tarifa_aereo, ',', '.');
                    tarifa_maritimo = formatPrice.constPrice(cliente.tarifa_maritimo, ',', '.');

                    //agregamos esta informacion en la cabecera.
                    this.details = details;
                    this.details.tarifa = details.tipo_envio == 'aereo' ? tarifa_aereo : tarifa_maritimo;
                    this.details.monto_tc = formatPrice.constPrice(tasaDolar.monto_tc, '.', ',');

                    this.client = cliente;
                    
                    //agregar warehouses
                    this.warehouses = wh;

                    //agregamos las cajas
                    this.cajas = cajas;
                    
                    //agregar data content de la factura
                    if( this.envio === 'directo' )
                    this.dataContent = data_contents(wh, details.tipo_envio, this.details.tarifa, this.envio);

                    //agregando costo por trackings
                    this.costo_trackings = costo_trackings;


                    //agregar total en USD
                    this.total_usd = calc_total_usd_data(this.dataContent, 'sub_total');
                    this.total_usd = suma_total_usd_var(this.total_usd, this.costo_trackings); //sumar costo trackings + total_usd;

                    if( this.envio === 'reempaque' ){
                        this.costo_reempaque = costo_reempaque;
                        //sumando costo reempaque + total_usd;
                        this.total_usd = suma_total_usd_var(this.total_usd, this.costo_reempaque);
                    }

                    //agregar total VES
                    this.total_ves = calc_total_ves(this.total_usd, this.details.monto_tc);
                }

                setTimeout(() => {
                    this.componentRender = '';
                }, 1000);
            }).catch(error => {
                console.log(error.response.data)
                this.componentRender = Error404;
            });
        },
        //agregar caja
        addCaja(){
            if( !isNaN(this.cant_caja) && this.cant_caja % 1 == 0 && this.cant_caja > 0){
                if( this.caja != '' ){
                    const { id_gasto_extra, nombre, monto_gasto_extra } = this.cajas.filter( caja => caja.id_gasto_extra  == this.caja)[0];
                    this.list_cajas = add_box(this.list_cajas, id_gasto_extra, nombre, monto_gasto_extra, this.cant_caja);
                    this.calculo_totales();
                }else{
                    alert('Debe Seleccionar un tipo de caja');
                }
            }else{
                alert('Por favor debe agregar una cantidad, solo numeros enteros y mayor a cero');
            }
        },
        //eliminar caja, de la lista cajas
        removeCaja(cajasNew = []){ this.list_cajas = cajasNew; this.calculo_totales(); },
        //funcion para construccion de precion USD
        keyUpPrecio(e){
            if( e.target.name !== 'tarifa'){
                this[e.target.name] = formatPrice.constPrice(e.target.value, ',', '.');
            }else{
                this.details[e.target.name] = formatPrice.constPrice(e.target.value, ',', '.');
            }
           
        },
        //ejecutar funcion de calcular todo
        changePrecio(e){ this.calculo_totales(); },
        //ejecutar cambio de tarifa en el dataContent
        changePrecioTarifa(){
            const wh = this.envio == 'directo' ? this.warehouses : this.warehousesNew;
            this.dataContent = data_contents(wh, this.details.tipo_envio, this.details.tarifa, this.envio);
            this.calculo_totales();
        },
        //calculo totales se refiere a la suma de todo los subtotal, costo tracking, reempaque y gastos extras.
        calculo_totales(){
            this.total_usd = calc_total_usd_data(this.dataContent, 'sub_total');
            this.total_usd = suma_total_usd_var(this.total_usd, this.costo_trackings); //sumar costo trackings + total_usd;

            if( this.envio === 'reempaque' ){
                this.total_usd = suma_total_usd_var(this.total_usd, this.costo_reempaque);
            }

            if( this.list_cajas.length > 0 ){
                let total = calc_total_usd_data(this.list_cajas, 'sub_total');
                this.total_usd = suma_total_usd_var(this.total_usd, total);
            }

            if( this.gastos_extras !== '0.00' ){
                this.total_usd = suma_total_usd_var(this.total_usd, this.gastos_extras);
            }

            this.total_ves = calc_total_ves(this.total_usd, this.details.monto_tc);
        },
        //agregar nuevos wh, esta funcion funciona para facturas con reempaque
        add_new_wh(dataNew = []){
            this.warehousesNew = dataNew;
            this.dataContent = data_contents(this.warehousesNew, this.details.tipo_envio, this.details.tarifa, this.envio);
            this.calculo_totales();
        }
    }
}
</script>

<style>

</style>