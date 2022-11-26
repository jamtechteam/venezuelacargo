<template>
<div class="mb-4">
    <div class="d-flex align-items-center mb-3" v-if="envio === 'reempaque'">
        <button @click="reempaque" type="button" class="btn btn-info ms-auto">
            <span>Reempacar</span>
        </button>
    </div>
    <table class="table table-transparent table-responsive mb-3">
        <thead>
            <tr>
                <th style="width: 10%;"></th>
                <th style="width: 20%;">Nro. WareHouse</th>
                <th style="width: 10%;">Alto</th>
                <th style="width: 10%;">Ancho</th>
                <th style="width: 10%;">Largo</th>
                <th style="width: 10%;">Peso</th>
                <th style="width: 10%;">Nro Piezas</th>
                <th style="width: 20%;">Total Seguro</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in warehouses" :key="index">
                <td>
                    <span class="" v-if="envio === 'reempaque'"><input class="form-check-input m-0 align-middle" v-model="getId" type="checkbox"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_almacen"></span>
                </td>
                <td>
                    <span class="">{{ item.warehouse }}</span>
                </td>
                <td>
                    <span class="">{{ item.alto }}</span>
                </td>
                <td>
                    <span class="">{{ item.ancho }}</span>
                </td>
                <td>
                    <span class="">{{ item.largo }}</span>
                </td>
                <td>
                    <span class="">{{ item.peso }}</span>
                </td>
                <td>
                    <span class="">{{ item.num_piezas }}</span>
                </td>
                <td>
                    <span class="">{{ item.total_seguro }}</span>
                </td>
            </tr>
        </tbody>
    </table> 
    <form class="modal modal-blur fade" :class="{'show': show == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
        <div name="paquete"  class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reempacar tracking: {{title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3 w-100">
                        <input type="text" class="form-control" name="warehouse" v-model="dato.warehouse" id="warehouse" >
                        <label for="warehouse">Warehouse</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="ancho" class="form-control" :class="{'is-invalid': errors.first('ancho')}" id="ancho" v-model="dato.ancho" 
                        :data-vv-validate-on="'change'">
                        <label for="ancho">Ancho</label>
                        <div v-if="errors.has('ancho')" class="invalid-feedback">{{errors.first('ancho')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="alto" class="form-control" :class="{'is-invalid': errors.first('alto')}" id="alto" v-model="dato.alto" 
                        :data-vv-validate-on="'change'">
                        <label for="alto">Alto</label>
                        <div v-if="errors.has('alto')" class="invalid-feedback">{{errors.first('alto')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="largo" class="form-control" :class="{'is-invalid': errors.first('largo')}" id="largo" v-model="dato.largo" 
                        :data-vv-validate-on="'change'">
                        <label for="largo">Largo</label>
                        <div v-if="errors.has('largo')" class="invalid-feedback">{{errors.first('largo')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required'" name="peso" class="form-control" :class="{'is-invalid': errors.first('peso')}" id="largo" v-model="dato.peso" 
                        :data-vv-validate-on="'change'">
                        <label for="peso">Peso</label>
                        <div v-if="errors.has('peso')" class="invalid-feedback">{{errors.first('peso')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="num_piezas" class="form-control" :class="{'is-invalid': errors.first('num_piezas')}" id="largo" v-model="dato.num_piezas" 
                        :data-vv-validate-on="'change'">
                        <label for="num_piezas">Numero de Piezas</label>
                        <div v-if="errors.has('num_piezas')" class="invalid-feedback">{{errors.first('num_piezas')}}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                    <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="saveData">Guardar</button>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1='';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
export default {
    name: 'WareHouse',
    props: ['warehouses', 'envio'],
    data() {
        return {
            warehousesNew: [],
            getId: [],
            dato: {
                id_almacen: '',
                almacen_ids: [],
                warehouse: '',
                ancho: '',
                alto: '',
                largo: '',
                peso: '',
                total_seguro: '',
                seguro: '',
            },
            show: false,
        };
    },

    methods: {
        hiddenModal(){
            this.show = false;
            this.dato = {};
        },
        reempaque(){
            if( this.getId.length === 0 ){
                alert('Error, debe seleccionar el o los WareHouse a reempacar');
                return;
            } 
            
            
            this.show = true;
        },
        saveData(){

        }
    },
};
</script>
<style>
    .modal.show{
        display: block;
    }
</style>