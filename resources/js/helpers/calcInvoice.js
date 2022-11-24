import { formatPrice } from '../formatPrice';

//detalles
let details = {
    tarifa: '0.00',
    fecha_factura: '',
    nro_factura: '',
    tipo_envio: '',
    monto_tc: '0,00',
}

// dato de content Aereo
const dataContentAereo = {
    warehouse: '',
    pie_cubico: '',
    volumen: '',
    peso: '',
    total_lb: '',
    cost_env: '0.00',
    seguro: '',
    sub_total: '0.00'
};

//funcion de construccion de data para facturar
const create_factura = (almacen = [], extras = [], tasaDolar = {}) => {
    let wh = []; //arreglo para determinar los wh
    let cajas = [];

    almacen.forEach(element => {
        const { tipo_envio, id_almacen, warehouse, trackings } = element;
        details.tipo_envio = tipo_envio;

        trackings.map((item) => wh.push({...item, id_almacen, warehouse, total_seguro: formatPrice.constPrice(item.total_seguro, ',', '.')}));
    });

    extras.forEach((element) => {
        const { id_gasto_extra, nombre, monto_gasto_extra, tipo } = element;

        if( tipo === 'CAJA' ){
            cajas.push({
                id_gasto_extra,
                nombre,
                monto_gasto_extra: formatPrice.constPrice(monto_gasto_extra, ',', '.')
            });
        }
    });

    return { wh, details, cajas };
}

//funcion dataContents
const data_contents = (wh = [], type_envio = 'aereo', tarifa = '0.00', envio = 'directo') => {
    let data = [];
    let costo_envio = formatPrice.desctPrice(tarifa, ',');
        costo_envio = parseNum(costo_envio);

    wh.forEach((element) => {
        let ft = 0, vol = 0, secure = 0, sub_total = 0, cost_env = 0;
        const { pie_cubico, volumen, seguro, warehouse, peso } = element;

        ft = parseNum(pie_cubico);
        vol = parseNum(volumen);
        secure = formatPrice.desctPrice(seguro, ',');
        secure = parseNum(secure);

        if( type_envio === 'maritimo' ){
            cost_env = costo_envio * ft;
        }

        sub_total = cost_env + secure;
        cost_env = formatPrice.constPrice(`${cost_env.toFixed(2)}`, ',', '.');
        secure = formatPrice.constPrice(`${secure.toFixed(2)}`, ',', '.');
        sub_total = formatPrice.constPrice(`${sub_total.toFixed(2)}`, ',', '.');

        data.push({
            warehouse,
            pie_cubico,
            volumen,
            peso,
            total_lb: '',
            cost_env,
            seguro: secure,
            sub_total
        });
    });

    return type_envio == 'aereo' ? calc_cost_env_aereo(data, envio, costo_envio) : data;
}

const calc_cost_env_aereo = (data = [], envio = 'directo', costo_envio = 0) => {
    let vol = 0, peso = 0, total_lb = 0, cost_env = 0, sub_total = 0;

    data.forEach((element) => {
        let volumen = parseNum(element.volumen);
        let weight = parseNum(element.peso);

        if( envio === 'directo' ){
            if( volumen >= weight ){
                total_lb = total_lb + volumen;
            }else{
                total_lb = total_lb + weight;
            }
        }else{
            vol = vol + volumen;
            peso = peso + weight;
        }
    });

    if( envio === 'directo' ){
        total_lb = ( total_lb <= 3.33 ) ? 3.33 : total_lb;
    }else{
        if( vol > peso && vol > 3.33 ){
            total_lb = vol;
        }else if( peso > vol && peso > 3.33 ){
            total_lb = peso;
        }else{
            total_lb = 3.33;
        }
    }

    cost_env = total_lb * costo_envio;
    sub_total = cost_env;
    cost_env = formatPrice.constPrice(`${cost_env.toFixed(2)}`, ',', '.');
    sub_total = formatPrice.constPrice(`${sub_total.toFixed(2)}`, ',', '.');

    data.push({
        ...dataContentAereo,
        total_lb,
        cost_env,
        sub_total
    })

    return data;
}

//agregar caja a listCajas
const add_box = (listCajas = [], id_gasto_extra = '', nombre = '', monto_gasto_extra = '0.00', cant_caja = 0)  => {
    let monto = 0, cant = 0, sub_total = 0;

    monto = parseNum(formatPrice.desctPrice(monto_gasto_extra, ','));
    cant = parseNum(cant_caja);

    const check = listCajas.filter( caja => caja.id_gasto_extra == id_gasto_extra );

    if( check.length == 0 ){
        sub_total = cant * monto;
        sub_total = sub_total.toFixed(2);

        listCajas.push({
            id_gasto_extra, 
            nombre, 
            monto_gasto_extra,
            cant: cant,
            sub_total: formatPrice.constPrice(`${sub_total}`, ',', '.')
        });
    }else{
        for (let i = 0; i < listCajas.length; i++) {
           if( listCajas[i].id_gasto_extra == id_gasto_extra ){
                cant = cant + parseNum(listCajas[i].cant);
                sub_total = cant * monto;
                sub_total = sub_total.toFixed(2);
                listCajas[i].cant = cant;
                listCajas[i].sub_total = formatPrice.constPrice(`${sub_total}`, ',', '.');
                break;
           }
        }
    }

    return listCajas;
}

//parseNum, es un numero entero o flotante
const parseNum = (val) => val % 1 == 0 ? parseInt(val) : parseFloat(val);

export { create_factura, data_contents, add_box }