"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["LayoutFormFacturar"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ContentBody',
  props: ['dataContent']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WareHouse',
  props: ['warehouses'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_facturas_WareHouse_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/facturas/WareHouse.vue */ "./resources/js/components/facturas/WareHouse.vue");
/* harmony import */ var _components_facturas_ContentBody_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/facturas/ContentBody.vue */ "./resources/js/components/facturas/ContentBody.vue");
/* harmony import */ var _helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/calcInvoice */ "./resources/js/helpers/calcInvoice.js");
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../formatPrice */ "./resources/js/formatPrice.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//componentes de primer plano, para factura

 //componentes de segundo plano

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
}; //helpers




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LayoutFormFacturar',
  data: function data() {
    return {
      envio: '',
      // factura con envios sin reempaques ( directos ) || o con envios con reempaque ( reempaque )
      type_form: 'new',
      //tipo de form, new es crear factura, edit es editar factura y  show es ver factura,
      componentRender: LoaderComponent,
      //detalles para la factura
      details: {
        tarifa: '0.00',
        fecha_factura: '',
        nro_factura: '',
        tipo_envio: '',
        monto_tc: '0,00'
      },
      //informacion del cliente
      client: {},
      //Datos de WareHouse
      warehouses: [],
      //data contents, de la factura
      dataContent: []
    };
  },
  components: {
    WareHouse: _components_facturas_WareHouse_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContentBody: _components_facturas_ContentBody_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var query, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = this.$route.query;

              if (!(Object.keys(query).length === 0 || Object.keys(query).length !== 0 && (!query.hasOwnProperty('id') || !query.hasOwnProperty('envio') || !query.hasOwnProperty('type')) || Object.keys(query).length !== 0 && query.hasOwnProperty('type') && query.type != 'new' && query.type != 'edit' && query.type != 'show' || Object.keys(query).length !== 0 && query.hasOwnProperty('envio') && query.envio != 'no' && query.envio != 'si' || Object.keys(query).length !== 0 && query.hasOwnProperty('id') && Array.isArray(query.id) && query.hasOwnProperty('type') && (query.type == 'edit' || query.type == 'show'))) {
                _context.next = 4;
                break;
              }

              this.componentRender = Error404;
              return _context.abrupt("return");

            case 4:
              this.envio = query.envio == 'no' ? 'directo' : 'reempaque';
              this.type_form = query.type;
              url = query.type == 'show' || query.type == 'edit' ? '' : 'almacen/paquetes/data';
              this.get_axios(query, url);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    //obtener data de wh a facturar o datos de la factura
    get_axios: function get_axios(dataReq, url) {
      var _this = this;

      this.axios.get(url, {
        params: dataReq
      }).then(function (response) {
        console.log('response.data.result', response.data.result);

        if (response.data.result == null) {
          _this.componentRender = Error404;
          return;
        }

        if (_this.type_form == 'new') {
          var tarifa_aereo = '0.00';
          var tarifa_maritimo = '0.00';
          var _response$data$result = response.data.result,
              almacen = _response$data$result.almacen,
              cliente = _response$data$result.cliente,
              extras = _response$data$result.extras,
              tasaDolar = _response$data$result.tasaDolar;

          var _create_factura = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.create_factura)(almacen, extras, tasaDolar),
              wh = _create_factura.wh,
              details = _create_factura.details; //tarifas de envios


          tarifa_aereo = _formatPrice__WEBPACK_IMPORTED_MODULE_4__.formatPrice.constPrice(cliente.tarifa_aereo, ',', '.');
          tarifa_maritimo = _formatPrice__WEBPACK_IMPORTED_MODULE_4__.formatPrice.constPrice(cliente.tarifa_maritimo, ',', '.'); //agregamos esta informacion en la cabecera.

          _this.details = details;
          _this.details.tarifa = details.tipo_envio == 'aereo' ? tarifa_aereo : tarifa_maritimo;
          _this.client = cliente; //agregar warehouses

          _this.warehouses = wh; //agregar data content de la factura

          _this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.data_contents)(wh, details.tipo_envio, _this.details.tarifa, _this.envio);
        }

        setTimeout(function () {
          _this.componentRender = '';
        }, 1000);
      })["catch"](function (error) {
        console.log(error.response.data);
        _this.componentRender = Error404;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/formatPrice.js":
/*!*************************************!*\
  !*** ./resources/js/formatPrice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPrice": () => (/* binding */ formatPrice)
/* harmony export */ });
var fields = [{
  field: 'tarifa_maritimo',
  money: 'usd'
}, {
  field: 'tarifa_aereo',
  money: 'usd'
}, {
  field: 'monto_tc',
  money: 'ves'
}, {
  field: 'monto_gasto_extra',
  money: 'usd'
}, {
  field: 'monto_cond',
  money: 'usd'
}, {
  field: 'seguro',
  money: 'usd'
}];
var formatPrice = {
  init: function init() {
    console.log('as');

    for (var i = 0; i < fields.length; i++) {
      if (document.getElementById(fields[i].field)) {
        (function () {
          console.log('ass');
          var spdor_decimal = fields[i].money == 'usd' ? '.' : fields[i].money == 'ves' ? ',' : null;
          var spdor_unid = fields[i].money == 'usd' ? ',' : fields[i].money == 'ves' ? '.' : null;
          document.getElementById(fields[i].field).addEventListener('keypress', function (e) {
            var key = window.Event ? e.which : e.keyCod;

            if (key < 48 || key > 57) {
              e.preventDefault();
            }
          });
          document.getElementById(fields[i].field).addEventListener('keyup', function (e) {
            var key = window.Event ? e.which : e.keyCod;

            if (key == 8 || key >= 96 && key <= 105) {
              e.target.value = constructPrice(e.target.value, spdor_unid, spdor_decimal);
            }
          });
          document.getElementById(fields[i].field).addEventListener('click', function (e) {
            if (e.target.value == '') e.target.value = '0' + spdor_decimal + '00';
          });
        })();
      }
    }
  },
  destructPrecio: function destructPrecio(precio, fieldName) {
    var field = function field(val) {
      return fields.filter(function (item) {
        return item.field === val;
      });
    };

    var rePrecio = precio;
    console.log(field(fieldName));

    if (field(fieldName).length != 0) {
      var spdor_unid = field(fieldName)[0].money == 'usd' ? ',' : field(fieldName)[0].money == 'ves' ? '.' : null;

      if (precio.includes(spdor_unid)) {
        var arrPrecio = precio.split(spdor_unid);
        var aux = '';

        for (var i = 0; i < arrPrecio.length; i++) {
          aux = aux + '' + arrPrecio[i];
        }

        rePrecio = aux;
      }
    }

    return rePrecio;
  },
  constPrice: function constPrice(value, spdor_unid, spdor_decimal) {
    return constructPrice(value, spdor_unid, spdor_decimal);
  },
  desctPrice: function desctPrice(precio, spdor_unid) {
    var rePrecio = precio;
    console.log('precio', precio);

    if (precio.includes(spdor_unid)) {
      var arrPrecio = precio.split(spdor_unid);
      var aux = '';

      for (var i = 0; i < arrPrecio.length; i++) {
        aux = aux + '' + arrPrecio[i];
      }

      rePrecio = aux;
    }

    return rePrecio;
  },
  checkField: function checkField(field) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].field == field) {
        return true;
      }
    }

    return false;
  }
};

var constructPrice = function constructPrice(value, spdor_unid, spdor_decimal) {
  var arrayAux = [];
  var salida = [];
  var arregloValue = value.split('');

  for (var i = 0; i < arregloValue.length; i++) {
    if (!isNaN(parseInt(arregloValue[i]))) {
      arrayAux.push(arregloValue[i]);
    }
  }

  if (arrayAux.length == 1 || arrayAux.length == 2) {
    var arr = arrayAux.length == 2 ? 1 : 2;

    for (var _i = 0; _i < arr; _i++) {
      arrayAux.unshift(0);
    }
  }

  arrayAux = arrayAux.reverse();
  var j = 4;
  /* Recorremosy aguardamos em arreglo de salida  */

  for (var _i2 = 0; _i2 < arrayAux.length; _i2++) {
    var boleano = true;
    var aux = '';

    if (_i2 == 1) {
      aux = spdor_decimal;
      salida.push(arrayAux[_i2]);
    } else if (j == _i2 && _i2 != arrayAux.length - 1 && arrayAux.length > 5) {
      aux = spdor_unid;
      j = j + 3;
      salida.push(arrayAux[_i2]);
    } else if (arrayAux.length == 4 && arrayAux.length - 1 == _i2 && arrayAux[_i2] == 0 && arrayAux[arrayAux.length - 2] == 0 || arrayAux.length == 4 && arrayAux.length - 1 == _i2 && arrayAux[_i2] == 0 && arrayAux[arrayAux.length - 2] != 0) {
      boleano = false;
      console.log('*');
    } else {
      aux = arrayAux[_i2];
    }

    if (boleano) salida.push(aux);
  }
  /*Retornarmos el arreglo salido de forma inversa*/


  return salida.reverse().join('');
};

/***/ }),

/***/ "./resources/js/helpers/calcInvoice.js":
/*!*********************************************!*\
  !*** ./resources/js/helpers/calcInvoice.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_factura": () => (/* binding */ create_factura),
/* harmony export */   "data_contents": () => (/* binding */ data_contents)
/* harmony export */ });
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatPrice */ "./resources/js/formatPrice.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //detalles

var details = {
  tarifa: '0.00',
  fecha_factura: '',
  nro_factura: '',
  tipo_envio: '',
  monto_tc: '0,00'
}; // dato de content Aereo

var dataContentAereo = {
  warehouse: '',
  pie_cubico: '',
  volumen: '',
  peso: '',
  total_lb: '',
  cost_env: '0.00',
  seguro: '',
  sub_total: '0.00'
}; //funcion de construccion de data para facturar

var create_factura = function create_factura() {
  var almacen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var tasaDolar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var wh = []; //arreglo para determinar los wh

  almacen.forEach(function (element) {
    var tipo_envio = element.tipo_envio,
        id_almacen = element.id_almacen,
        warehouse = element.warehouse,
        trackings = element.trackings;
    details.tipo_envio = tipo_envio;
    trackings.map(function (item) {
      return wh.push(_objectSpread(_objectSpread({}, item), {}, {
        id_almacen: id_almacen,
        warehouse: warehouse,
        total_seguro: _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice(item.total_seguro, ',', '.')
      }));
    });
  });
  return {
    wh: wh,
    details: details
  };
}; //funcion dataContents


var data_contents = function data_contents() {
  var wh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type_envio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'aereo';
  var tarifa = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0.00';
  var envio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'directo';
  var data = [];
  var costo_envio = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(tarifa, ',');
  costo_envio = parseNum(costo_envio);
  wh.forEach(function (element) {
    var ft = 0,
        vol = 0,
        secure = 0,
        sub_total = 0,
        cost_env = 0;
    var pie_cubico = element.pie_cubico,
        volumen = element.volumen,
        seguro = element.seguro,
        warehouse = element.warehouse,
        peso = element.peso;
    ft = parseNum(pie_cubico);
    vol = parseNum(volumen);
    secure = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(seguro, ',');
    secure = parseNum(secure);

    if (type_envio === 'maritimo') {
      cost_env = costo_envio * ft;
    }

    sub_total = cost_env + secure;
    cost_env = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(cost_env.toFixed(2)), ',', '.');
    secure = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(secure.toFixed(2)), ',', '.');
    sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total.toFixed(2)), ',', '.');
    data.push({
      warehouse: warehouse,
      pie_cubico: pie_cubico,
      volumen: volumen,
      peso: peso,
      total_lb: '',
      cost_env: cost_env,
      seguro: secure,
      sub_total: sub_total
    });
  });
  return type_envio == 'aereo' ? calc_cost_env_aereo(data, envio, costo_envio) : data;
};

var calc_cost_env_aereo = function calc_cost_env_aereo() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var envio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'directo';
  var costo_envio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var vol = 0,
      peso = 0,
      total_lb = 0,
      cost_env = 0,
      sub_total = 0;
  data.forEach(function (element) {
    var volumen = parseNum(element.volumen);
    var weight = parseNum(element.peso);

    if (envio === 'directo') {
      if (volumen >= weight) {
        total_lb = total_lb + volumen;
      } else {
        total_lb = total_lb + weight;
      }
    } else {
      vol = vol + volumen;
      peso = peso + weight;
    }
  });

  if (envio === 'directo') {
    total_lb = total_lb <= 3.33 ? 3.33 : total_lb;
  } else {
    if (vol > peso && vol > 3.33) {
      total_lb = vol;
    } else if (peso > vol && peso > 3.33) {
      total_lb = peso;
    } else {
      total_lb = 3.33;
    }
  }

  cost_env = total_lb * costo_envio;
  sub_total = cost_env;
  cost_env = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(cost_env.toFixed(2)), ',', '.');
  sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total.toFixed(2)), ',', '.');
  data.push(_objectSpread(_objectSpread({}, dataContentAereo), {}, {
    total_lb: total_lb,
    cost_env: cost_env,
    sub_total: sub_total
  }));
  return data;
}; //parseNum, es un numero entero o flotante


var parseNum = function parseNum(val) {
  return val % 1 == 0 ? parseInt(val) : parseFloat(val);
};



/***/ }),

/***/ "./resources/js/components/facturas/ContentBody.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBody.vue?vue&type=template&id=eff48a5c& */ "./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&");
/* harmony import */ var _ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentBody.vue?vue&type=script&lang=js& */ "./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/facturas/ContentBody.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/facturas/WareHouse.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/facturas/WareHouse.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WareHouse.vue?vue&type=template&id=1f1d710c& */ "./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c&");
/* harmony import */ var _WareHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WareHouse.vue?vue&type=script&lang=js& */ "./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WareHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__.render,
  _WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/facturas/WareHouse.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutFormFacturar.vue?vue&type=template&id=68f1062d& */ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&");
/* harmony import */ var _LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutFormFacturar.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.render,
  _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/facturas/LayoutFormFacturar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentBody.vue?vue&type=template&id=eff48a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&");


/***/ }),

/***/ "./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouse_vue_vue_type_template_id_1f1d710c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouse.vue?vue&type=template&id=1f1d710c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c&");


/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=template&id=68f1062d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-3" }, [
    _c("table", { staticClass: "table table-transparent table-responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.dataContent, function (item, index) {
          return _c("tr", { key: index }, [
            _c("td", [_vm._v(_vm._s(item.warehouse))]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.volumen)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.pie_cubico)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.peso)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.total_lb)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.cost_env)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.seguro)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-end" }, [
              _vm._v(" " + _vm._s(item.sub_total) + " "),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Volumen")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Pie Cubico")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Peso")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("TOTAL LB/VOL")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Costo Env.")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Seguro")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "text-end", staticStyle: { width: "20%" } }, [
          _vm._v("Sub Total"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouse.vue?vue&type=template&id=1f1d710c& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-3" }, [
    _c("table", { staticClass: "table table-transparent table-responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.warehouses, function (item, index) {
          return _c("tr", { key: index }, [
            _vm._m(1, true),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.warehouse))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.alto))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.ancho))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.largo))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.peso))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.num_piezas))])]),
            _vm._v(" "),
            _c("td", [_c("span", {}, [_vm._v(_vm._s(item.total_seguro))])]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10%" } }),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Alto")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Ancho")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Largo")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Peso")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Nro Piezas")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Total Seguro")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", {})])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-xl" }, [
    _c("div", { staticClass: "row row-cards" }, [
      _c(
        "div",
        { staticClass: "col-12", staticStyle: { "min-height": "60vh" } },
        [
          _c(_vm.componentRender, { tag: "component" }),
          _vm._v(" "),
          _vm.componentRender == ""
            ? _c("div", { staticClass: "card card-lg" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("div", { staticClass: "row mb-4" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("Detalles")]),
                        _vm._v(" "),
                        _c("address", [
                          _c(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.details.fecha_factura != "",
                                  expression: "details.fecha_factura != ''",
                                },
                              ],
                            },
                            [
                              _vm._v("Fecha Factura: "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "text-transform": "uppercase",
                                  },
                                },
                                [_vm._v(_vm._s(_vm.details.fecha_factura))]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Numero Factura: " +
                                _vm._s(_vm.details.nro_factura)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Tarifa Envio: " +
                                _vm._s(_vm.details.tarifa) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Tipo Envio:  "),
                            _c(
                              "span",
                              {
                                staticStyle: { "text-transform": "uppercase" },
                              },
                              [_vm._v(_vm._s(_vm.details.tipo_envio))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Tasa Bs: " +
                                _vm._s(_vm.details.monto_tc) +
                                " VES"
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-end" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("Cliente")]),
                        _vm._v(" "),
                        _c("address", [
                          _c("p", [
                            _vm._v(
                              "Nombre Completo: " +
                                _vm._s(_vm.client.nombres) +
                                " " +
                                _vm._s(_vm.client.apellidos)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.client.cod_usuario != null
                            ? _c("p", [
                                _vm._v(
                                  "Código Usuario: " +
                                    _vm._s(_vm.client.cod_usuario)
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Teléfono: " + _vm._s(_vm.client.telefono)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Cédula: " + _vm._s(_vm.client.cedula)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Dirección: " +
                                _vm._s(_vm.client.estado_ve) +
                                ". " +
                                _vm._s(_vm.client.zona) +
                                ", " +
                                _vm._s(_vm.client.codigo_postal) +
                                " "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.client.ref_direccion != null
                            ? _c("p", [
                                _vm._v(
                                  "Ref. Dirección: " +
                                    _vm._s(_vm.client.ref_direccion)
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("ware-house", { attrs: { warehouses: _vm.warehouses } }),
                    _vm._v(" "),
                    _c("content-body", {
                      attrs: { dataContent: _vm.dataContent },
                    }),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);