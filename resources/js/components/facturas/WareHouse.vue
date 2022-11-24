<template>
<div class="mb-4">
    <table class="table table-transparent table-responsive">
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
                    <span class=""></span>
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
</div>
</template>

<script>
export default {
    name: 'WareHouse',
    props: ['warehouses'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>