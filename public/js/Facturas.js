"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Facturas"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BtnVolver',
  props: ['classe'],
  methods: {
    volver: function volver() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var request = function request() {
  return {
    name: 'IndexFacturas',
    url: 'facturas',
    params: {
      limit: 8,
      page: 1,
      orderBy: 'facturas.fecha_creado',
      ascending: 0,
      query: {
        search: '',
        estado: 'pendiente',
        fecha_inicio: '',
        fecha_final: ''
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Facturas',
  data: function data() {
    return {
      data: {
        th: [{
          name: 'Nro Factura'
        }, {
          name: 'Nro Container'
        }, {
          name: 'Cliente'
        }, {
          name: 'Estado'
        }, {
          name: 'Tipo de Envio'
        }, {
          name: 'Total USD'
        }, {
          name: 'Moneda de Pago'
        }, {
          name: 'Fecha Factura'
        }, {
          name: ''
        }],
        columns: [{
          name: 'Nro Factura',
          value: 'facturas.nro_factura'
        }, {
          name: 'Nro Container',
          value: 'facturas.nro_container'
        }, {
          name: 'Fecha Creado',
          value: 'facturas.fecha_creado'
        }]
      },
      view: 'FacturasDataTable',
      accion: {
        create: '',
        edit: '',
        "delete": 'facturas'
      },
      request: request(),
      filters: {
        name: 'IndexFacturas',
        first: {
          placeholder: 'Busca por numero de factura o por nombre, apellido y codigo de cliente'
        },
        second: [{
          name: 'estado',
          type: 'select',
          title: 'Filtra por estado de facturas',
          option: {
            name: 'title',
            value: 'valor'
          },
          data: [{
            title: 'Pendiente',
            valor: 'pendiente'
          }, {
            title: 'Verificando Pago',
            valor: 'Verificacion-Pago'
          }, {
            title: 'Pago Verificado',
            valor: 'Pago-Verificado'
          }]
        }, {
          name: 'fecha_inicio',
          type: 'date',
          title: 'Desde'
        }, {
          name: 'fecha_final',
          type: 'date',
          title: 'Hasta'
        }]
      }
    };
  },
  components: {
    tables: function tables() {
      return __webpack_require__.e(/*! import() | TableAdminComponent */ "TableAdminComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/tables/TableAdminComponent.vue */ "./resources/js/components/tables/TableAdminComponent.vue"));
    },
    filters: function filters() {
      return __webpack_require__.e(/*! import() | FilterComponent */ "FilterComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/FilterComponent.vue */ "./resources/js/components/FilterComponent.vue"));
    }
  },
  methods: {
    handleRequest: function handleRequest() {
      //console.log('handleRequest', request())
      this.$refs.filters.changeRequestPadre(_objectSpread({}, request()));
    },
    handleRequestQuery: function handleRequestQuery() {
      // console.log('handleRequestQuery', request().params.query)
      this.$refs.filters.changeQueryPadre(_objectSpread({}, request().params.query));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
/* harmony import */ var _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../formatPrice.js */ "./resources/js/formatPrice.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
//
//
//
//
//
var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};




var check = function check() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key == prop && data[i][key] == value) {
        return data[i];
      }
    }
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormFacturas',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      activeComponent: '',
      user: {},
      details: {},
      trackings: [],
      almacen: [],
      dato: {},
      show: false,
      showConfirmeFactura: false,
      title: '',
      total_usd: '0.00',
      total_ves: '0,00',
      gastos_extra: [],
      cajas: [],
      caja: '',
      extras_cajas: [],
      cant_caja: 1,
      cost_reemp_track: '',
      cost_x_track: '',
      nro_factura: '',
      nro_container: '',
      total_gastos_extras: '0.00',
      alert: {}
    };
  },
  components: {
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    trackings: function trackings() {
      this.calcSubTotal();
    }
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      var request;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Object.keys(this.$route.query).length !== 0 && this.$route.query.hasOwnProperty('id')) {
                request = this.$route.query;
                console.log(this.$route.query);
                if (!Array.isArray(request.id)) request.id = [request.id];
                this.axios.get('almacen/paquetes/data', {
                  params: this.$route.query
                }).then(function (response) {
                  console.log(response.data);
                  var cliente = response.data.result.cliente;
                  var almacen = response.data.result.almacen;

                  if (cliente.tarifa_maritimo != null && cliente.tarifa_aereo != null) {
                    _this.user = {
                      usuario_id: cliente.usuario_id,
                      cod_usuario: cliente.cod_usuario,
                      nombres: cliente.nombres,
                      apellidos: cliente.apellidos,
                      cedula: cliente.cedula,
                      telefono: cliente.telefono,
                      estado: cliente.estado_ve,
                      zona: cliente.zona,
                      ref_direccion: cliente.ref_direccion,
                      codigo_postal: cliente.codigo_postal
                    };
                    _this.details = {
                      tipo_envio: almacen[0].tipo_envio,
                      tarifa: almacen[0].tipo_envio == 'aereo' ? cliente.tarifa_aereo : cliente.tarifa_maritimo,
                      tasa: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(response.data.result.tasaDolar.monto_tc, '.', ','),
                      fecha_tasa: response.data.result.tasaDolar.fecha_tc
                    };
                    _this.details.tarifa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(_this.details.tarifa, ',', '.');
                    var extras = response.data.result.extras;

                    for (var i = 0; i < extras.length; i++) {
                      if (extras[i].tipo == 'CAJA') {
                        var _extras$i = extras[i],
                            id_gasto_extra = _extras$i.id_gasto_extra,
                            nombre = _extras$i.nombre,
                            monto_gasto_extra = _extras$i.monto_gasto_extra;

                        _this.cajas.push({
                          id_gasto_extra: id_gasto_extra,
                          nombre: nombre,
                          monto_gasto_extra: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(monto_gasto_extra, ',', '.')
                        });
                      }
                    }

                    var newTrancking = [];

                    for (var _i = 0; _i < almacen.length; _i++) {
                      var item = {
                        id_almacen: almacen[_i].id_almacen,
                        id_solicitud: almacen[_i].id_solicitud,
                        warehouse: almacen[_i].warehouse
                      };
                      var trackings = almacen[_i].trackings;

                      for (var j = 0; j < trackings.length; j++) {
                        trackings[j].warehouse = almacen[_i].warehouse;
                        trackings[j].total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(trackings[j].total_seguro, ',', '.');

                        if (!trackings[j].seguro.includes(',') && !trackings[j].seguro.includes('.')) {
                          trackings[j].seguro = trackings[j].seguro + '.00';
                        } else {
                          trackings[j].seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(trackings[j].seguro, ',', '.');
                        }

                        newTrancking.push(trackings[j]);
                      }

                      _this.almacen.push(item);
                    } //cALCULO para determinar que tracking y cuantos son para reempaque


                    var cant_trancking_reempaque = 0;
                    var post_extras = 0;
                    var post_array_trackings_reempaque = [];
                    var cant_tracking = 0;
                    var post_extra_tracking = 0;
                    console.log(newTrancking, 'sdjsdo');

                    for (var _i2 = 0; _i2 < newTrancking.length; _i2++) {
                      for (var _j = 0; _j < extras.length; _j++) {
                        if (extras[_j].accion == 'POR-DEFECTO' && newTrancking[_i2].reempaque == 'si' && extras[_j].tipo == 'REEMPAQUE' && extras[_j].activo == 1) {
                          if (extras[_j].variable_cond == 'TRACKING') {
                            cant_trancking_reempaque++;
                            post_extras = _j;
                            post_array_trackings_reempaque.push(_i2);
                          }
                        }

                        if (newTrancking[_i2].reempaque == 'si' && extras[_j].accion == 'MANUAL' && extras[_j].tipo == 'REEMPAQUE' && extras[_j].activo == 1) {
                          newTrancking[_i2].cost_reempaque = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice('0.00', ',', '.');
                          ;
                          _this.cost_reemp_track = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(extras[_j].monto_gasto_extra, ',', '.');
                        }

                        if (extras[_j].accion == 'POR-DEFECTO' && extras[_j].tipo == 'TRACKING' && extras[_j].activo == 1) {
                          cant_tracking++;
                          post_extra_tracking = _j;
                        }
                      }
                    } //Agregar const reempaque segun condicion en tracking


                    for (var _i3 = 0; _i3 < post_array_trackings_reempaque.length; _i3++) {
                      var _extras$post_extras = extras[post_extras],
                          condicion = _extras$post_extras.condicion,
                          cant_cond = _extras$post_extras.cant_cond,
                          monto_cond = _extras$post_extras.monto_cond,
                          _monto_gasto_extra = _extras$post_extras.monto_gasto_extra,
                          tipo_cond = _extras$post_extras.tipo_cond;
                      var cost_reempaque = _monto_gasto_extra;

                      if (condicion == 1 && tipo_cond == 'MAYOR' && post_array_trackings_reempaque.length > cant_cond || tipo_cond == 'MENOR' && post_array_trackings_reempaque.length < cant_cond) {
                        cost_reempaque = monto_cond;
                      }

                      newTrancking[post_array_trackings_reempaque[_i3]].cost_reempaque = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(cost_reempaque, ',', '.');
                      _this.cost_reemp_track = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(cost_reempaque, ',', '.');
                    }

                    var tarifa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(_this.details.tarifa, ','); //Calcular SubTotal

                    for (var _i4 = 0; _i4 < newTrancking.length; _i4++) {
                      var cost_x_tracking = 0;
                      var volumen = newTrancking[_i4].volumen;
                      var pie_cubico = newTrancking[_i4].pie_cubico;
                      var vol = 3.33;
                      var pie = 1;
                      var peso = newTrancking[_i4].peso;
                      var reempaque = 0;
                      var seguro = 0;
                      var xTarifa = 0;

                      if (cant_tracking > 0) {
                        var _extras$post_extra_tr = extras[post_extra_tracking],
                            _condicion = _extras$post_extra_tr.condicion,
                            _cant_cond = _extras$post_extra_tr.cant_cond,
                            _monto_cond = _extras$post_extra_tr.monto_cond,
                            _monto_gasto_extra2 = _extras$post_extra_tr.monto_gasto_extra,
                            _tipo_cond = _extras$post_extra_tr.tipo_cond;
                        cost_x_tracking = _monto_gasto_extra2;

                        if (_condicion == 1 && _tipo_cond == 'MAYOR' && cant_tracking > _cant_cond || _tipo_cond == 'MENOR' && cant_tracking < _cant_cond) {
                          cost_x_tracking = _monto_cond;
                        }
                      }

                      if (cost_x_tracking % 1 == 0) {
                        cost_x_tracking = parseInt(cost_x_tracking);
                      } else {
                        cost_x_tracking = parseFloat(cost_x_tracking);
                      } //cost_x_tracking = cost_x_tracking.toFixed(2);


                      if (tarifa % 1 == 0) {
                        tarifa = parseInt(tarifa);
                      } else {
                        tarifa = parseFloat(tarifa);
                      }

                      if (newTrancking[_i4].seguro % 1 == 0) {
                        seguro = parseInt(newTrancking[_i4].seguro);
                      } else {
                        seguro = parseFloat(newTrancking[_i4].seguro);
                      }

                      if (volumen % 1 == 0) {
                        volumen = parseInt(volumen);
                      } else {
                        volumen = parseFloat(volumen);
                      }

                      if (peso % 1 == 0) {
                        peso = parseInt(peso);
                      } else {
                        peso = parseFloat(peso);
                      }

                      if (pie_cubico % 1 == 0) {
                        pie_cubico = parseInt(pie_cubico);
                      } else {
                        pie_cubico = parseFloat(pie_cubico);
                      }

                      if (pie_cubico < pie) {
                        pie_cubico = pie;
                        newTrancking[_i4].pie_cubico = pie.toFixed(2);
                      }

                      if (vol > volumen) {
                        volumen = vol;
                        newTrancking[_i4].volumen = vol;
                      }

                      if (volumen > peso) {
                        volumen = volumen;
                      }

                      if (peso > vol && peso > volumen) {
                        volumen = peso;
                      }

                      console.log('volumen', volumen);

                      if (_this.details.tipo_envio == 'maritimo') {
                        xTarifa = pie_cubico;
                      } else {
                        xTarifa = volumen;
                        console.log('volumen', volumen);
                      }

                      if (newTrancking[_i4].reempaque == 'si') {
                        reempaque = newTrancking[_i4].cost_reempaque;
                      }

                      if (reempaque % 1 == 0) {
                        reempaque = parseInt(reempaque);
                      } else {
                        reempaque = parseFloat(reempaque);
                      }

                      console.log(xTarifa);
                      var cost = xTarifa * tarifa; //cost_aereo  = cost_aereo.toFixed(2);
                      //console.log(cost_aereo)

                      var subTotal = cost + seguro + (reempaque + cost_x_tracking);
                      subTotal = subTotal.toFixed(2);
                      newTrancking[_i4].subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(subTotal), ',', '.');
                      cost_x_tracking = cost_x_tracking.toFixed(2);
                      newTrancking[_i4].cost_x_tracking = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(cost_x_tracking), ',', '.');
                      _this.cost_x_track = newTrancking[_i4].cost_x_tracking; //console.log(subTotal)
                      //console.log(formatPrice.constPrice(''+subTotal, ',', '.'))
                      //console.log('ahh', formatPrice.constPrice(subTotal, ',', '.'));
                    }

                    console.log(newTrancking);
                    _this.trackings = newTrancking;
                    console.log(_this.almacen);
                    _this.componentRender = '';
                  }
                })["catch"](function (error) {
                  console.log(error.response.data);
                  _this.componentRender = Error404;
                });
              } else {
                this.componentRender = Error404;
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    showModal: function showModal(e) {
      var value = e.target.parentNode.value;

      var _check = check(this.trackings, value, 'id_tracking'),
          tracking = _check.tracking,
          id_tracking = _check.id_tracking,
          alto = _check.alto,
          ancho = _check.ancho,
          largo = _check.largo,
          peso = _check.peso,
          num_piezas = _check.num_piezas,
          volumen = _check.volumen,
          pie_cubico = _check.pie_cubico,
          total_seguro = _check.total_seguro,
          seguro = _check.seguro;

      this.title = tracking;
      this.dato = {
        id_tracking: id_tracking,
        alto: alto,
        ancho: ancho,
        largo: largo,
        peso: peso,
        num_piezas: num_piezas,
        volumen: volumen,
        pie_cubico: pie_cubico,
        seguro: seguro,
        total_seguro: total_seguro
      };
      console.log(tracking, id_tracking);
      this.show = true;
    },
    hiddenModal: function hiddenModal() {
      this.show = false;
    },
    hiddenConfirmeFactura: function hiddenConfirmeFactura() {
      this.showConfirmeFactura = false;
    },
    saveDataPaquete: function saveDataPaquete() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var tracking = _objectSpread({}, _this2.dato);

          var tarifa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(_this2.details.tarifa, ',');
          tracking.total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(tracking.total_seguro, ',');
          tracking.pie_cubico = tracking.ancho * tracking.alto * tracking.largo / 1728;
          tracking.pie_cubico = tracking.pie_cubico.toFixed(2);
          tracking.volumen = tracking.ancho * tracking.alto * tracking.largo / 166;
          tracking.volumen = tracking.volumen.toFixed(2);
          tracking.seguro = tracking.total_seguro * 10 / 100; //tracking.seguro = tracking.seguro.toFixed(2);

          var volumen = tracking.volumen;
          var pie_cubico = tracking.pie_cubico;
          var vol = 3.33;
          var pie = 1;
          var peso = tracking.peso;
          var reempaque = 0;
          var seguro = tracking.seguro;
          var xTarifa = 0;

          if (tarifa % 1 == 0) {
            tarifa = parseInt(tarifa);
          } else {
            tarifa = parseFloat(tarifa);
          }

          if (seguro % 1 == 0) {
            seguro = parseInt(seguro);
          } else {
            seguro = parseFloat(seguro);
          }

          if (volumen % 1 == 0) {
            volumen = parseInt(volumen);
          } else {
            volumen = parseFloat(volumen);
          }

          if (peso % 1 == 0) {
            peso = parseInt(peso);
          } else {
            peso = parseFloat(peso);
          }

          if (pie_cubico % 1 == 0) {
            pie_cubico = parseInt(pie_cubico);
          } else {
            pie_cubico = parseFloat(pie_cubico);
          }

          if (pie_cubico < pie) {
            pie_cubico = pie;
            tracking.pie_cubico = pie.toFixed(2);
          }

          if (vol > volumen) {
            volumen = vol;
            tracking.volumen = vol;
          }

          if (volumen > peso) {
            volumen = volumen;
          }

          if (peso > vol && peso > volumen) {
            volumen = peso;
          }

          if (_this2.details.tipo_envio == 'maritimo') {
            xTarifa = pie_cubico;
          } else {
            xTarifa = volumen;
          }

          for (var i = 0; i < _this2.trackings.length; i++) {
            if (_this2.trackings[i].id_tracking === tracking.id_tracking) {
              var cost_x_tracking = 0;

              if (_this2.trackings[i].cost_reempaque % 1 == 0) {
                reempaque = parseInt(_this2.trackings[i].cost_reempaque);
              } else {
                reempaque = parseFloat(_this2.trackings[i].cost_reempaque);
              }

              if (_this2.trackings[i].cost_x_tracking % 1 == 0) {
                cost_x_tracking = parseInt(_this2.trackings[i].cost_x_tracking);
              } else {
                cost_x_tracking = parseFloat(_this2.trackings[i].cost_x_tracking);
              }

              var cost = xTarifa * tarifa;
              console.log('cost', cost);
              var subTotal = cost + seguro + (reempaque + cost_x_tracking);
              subTotal = subTotal.toFixed(2);
              console.log('cost', cost);
              _this2.trackings[i].alto = tracking.alto;
              _this2.trackings[i].ancho = tracking.ancho;
              _this2.trackings[i].largo = tracking.largo;
              _this2.trackings[i].peso = tracking.peso;
              _this2.trackings[i].num_piezas = tracking.num_piezas;
              _this2.trackings[i].pie_cubico = tracking.pie_cubico;
              _this2.trackings[i].volumen = tracking.volumen;
              _this2.trackings[i].total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(tracking.total_seguro), ',', '.');
              _this2.trackings[i].seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(tracking.seguro.toFixed(2)), ',', '.');
              _this2.trackings[i].subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(subTotal), ',', '.');
              break;
            }
          }

          _this2.show = false;
          _this2.dato = {};

          _this2.calcSubTotal();
        }
      });
    },
    changeTotalSeguro: function changeTotalSeguro(e) {
      var re = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
      this.dato.total_seguro = re; //if( e.target.id == 'total_seguro')  this.dato.total_seguro = re;
      //else this.trackings[e.target.id].total_seguro = re;
    },
    changeCosto_RT: function changeCosto_RT(e) {
      this.cost_reemp_track = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
    },
    addCosto_RT: function addCosto_RT() {
      if (this.cost_reemp_track != '') {
        this.addCostoXtCostoRT(_formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.cost_reemp_track, ','), 'cost_reempaque');
      } else {
        alert('debe agregar un precio, no debe ir vacio');
      }
    },
    changeCosto_XT: function changeCosto_XT(e) {
      this.cost_x_track = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
    },
    addCosto_XT: function addCosto_XT() {
      if (this.cost_x_track != '') {
        this.addCostoXtCostoRT(_formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.cost_x_track, ','), 'cost_x_tracking');
      } else {
        alert('debe agregar un precio, no debe ir vacio');
      }
    },
    changeTotalGastosExtras: function changeTotalGastosExtras(e) {
      this.total_gastos_extras = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
    },
    keyUpTarifa: function keyUpTarifa(e) {
      this.details.tarifa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
    },
    changeTarifa: function changeTarifa() {
      console.log('this.details.tarifa', this.details.tarifa);
      var tarifa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.details.tarifa, ',');

      if (tarifa % 1 == 0) {
        tarifa = parseInt(tarifa);
      } else {
        tarifa = parseFloat(tarifa);
      }

      for (var i = 0; i < this.trackings.length; i++) {
        var _this$trackings$i = _objectSpread({}, this.trackings[i]),
            pie_cubico = _this$trackings$i.pie_cubico,
            volumen = _this$trackings$i.volumen,
            reempaque = _this$trackings$i.reempaque,
            cost_x_tracking = _this$trackings$i.cost_x_tracking,
            seguro = _this$trackings$i.seguro,
            peso = _this$trackings$i.peso;

        cost_x_tracking = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(cost_x_tracking, ',');
        seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(seguro, ',');
        var xTarifa = 0;
        var cost_reempaque = 0; //console.log(pie_cubico, volumen, reempaque, cost_x_tracking, seguro, tarifa)

        if (peso % 1 == 0) {
          peso = parseInt(peso);
        } else {
          peso = parseFloat(peso);
        }

        if (seguro % 1 == 0) {
          seguro = parseInt(seguro);
        } else {
          seguro = parseFloat(seguro);
        }

        if (volumen % 1 == 0) {
          volumen = parseInt(volumen);
        } else {
          volumen = parseFloat(volumen);
        }

        if (pie_cubico % 1 == 0) {
          pie_cubico = parseInt(pie_cubico);
        } else {
          pie_cubico = parseFloat(pie_cubico);
        }

        if (peso > volumen) {
          volumen = peso;
        }

        if (reempaque == 'si') {
          cost_reempaque = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.trackings[i].cost_reempaque, ',');
        }

        if (cost_reempaque % 1 == 0) {
          cost_reempaque = parseInt(cost_reempaque);
        } else {
          cost_reempaque = parseFloat(cost_reempaque);
        }

        if (cost_x_tracking % 1 == 0) {
          cost_x_tracking = parseInt(cost_x_tracking);
        } else {
          cost_x_tracking = parseFloat(cost_x_tracking);
        }

        if (this.details.tipo_envio == 'maritimo') {
          xTarifa = pie_cubico;
        } else {
          xTarifa = volumen;
        }

        var cost = xTarifa * tarifa;
        var subTotal = cost + seguro + (cost_reempaque + cost_x_tracking);
        subTotal = subTotal.toFixed(2);
        this.trackings[i].subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(subTotal), ',', '.');
      }

      this.calcSubTotal();
    },
    addTotalGastosExtras: function addTotalGastosExtras() {
      this.calcSubTotal();
    },
    addCaja: function addCaja() {
      var _this3 = this;

      if (!isNaN(this.cant_caja) && this.cant_caja % 1 == 0 && this.cant_caja > 0) {
        if (this.caja != '') {
          var _this$cajas$filter$ = this.cajas.filter(function (caja) {
            return caja.id_gasto_extra == _this3.caja;
          })[0],
              id_gasto_extra = _this$cajas$filter$.id_gasto_extra,
              nombre = _this$cajas$filter$.nombre,
              monto_gasto_extra = _this$cajas$filter$.monto_gasto_extra;
          var monto = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(monto_gasto_extra, ',');
          var cant = parseInt(this.cant_caja);
          var total_caja = 0;

          if (monto % 1 == 0) {
            monto = parseInt(monto);
          } else {
            monto = parseFloat(monto);
          }

          var _check2 = this.extras_cajas.filter(function (caja) {
            return caja.id_gasto_extra == _this3.caja;
          });

          if (_check2.length == 0) {
            total_caja = cant * monto;
            total_caja = total_caja.toFixed(2);
            this.extras_cajas.push({
              id_gasto_extra: id_gasto_extra,
              nombre: nombre,
              monto_gasto_extra: monto_gasto_extra,
              cant: cant,
              total_caja: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(total_caja, ',', '.')
            });
          } else {
            for (var i = 0; i < this.extras_cajas.length; i++) {
              if (this.extras_cajas[i].id_gasto_extra == this.caja) {
                cant = cant + this.extras_cajas[i].cant;
                total_caja = cant * monto;
                total_caja = total_caja.toFixed(2);
                this.extras_cajas[i].cant = cant;
                this.extras_cajas[i].total_caja = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(total_caja, ',', '.');
                break;
              }
            }
          }

          this.calcSubTotal();
        } else {
          alert('Debe Seleccionar un tipo de caja');
        }
      } else {
        alert('Por favor debe agregar una cantidad, solo numeros enteros y mayor a cero');
      }
    },
    deleteCajaExtra: function deleteCajaExtra(e) {
      var value = e.target.parentNode.value;
      var newExtrasCajas = [];

      for (var i = 0; i < this.extras_cajas.length; i++) {
        if (this.extras_cajas[i].id_gasto_extra != value) {
          newExtrasCajas.push(this.extras_cajas[i]);
        }
      }

      this.extras_cajas = newExtrasCajas;
      this.calcSubTotal();
    },
    addCostoXtCostoRT: function addCostoXtCostoRT(precio, field) {
      for (var i = 0; i < this.trackings.length; i++) {
        var newSubTotal = 0;
        var subTotal = 0;

        for (var key in this.trackings[i]) {
          if (key == field) {
            var valorOld = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.trackings[i][key], ',');
            var newPrecio = precio;

            if (key == 'cost_reempaque' && this.trackings[i].reempaque == 'no') {
              newPrecio = 0;
              valorOld = 0;
            }

            if (valorOld % 1 == 0) {
              valorOld = parseInt(valorOld);
            } else {
              valorOld = parseFloat(valorOld);
            }

            subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.trackings[i].subTotal, ',');

            if (subTotal % 1 == 0) {
              subTotal = parseInt(subTotal);
            } else {
              subTotal = parseFloat(subTotal);
            }

            if (newPrecio % 1 == 0) {
              newPrecio = parseInt(newPrecio);
            } else {
              newPrecio = parseFloat(newPrecio);
            }

            subTotal = subTotal - valorOld;
            newSubTotal = subTotal + newPrecio;
            newSubTotal = newSubTotal.toFixed(2);
            this.trackings[i].subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(newSubTotal), ',', '.');
            newPrecio = newPrecio.toFixed(2);
            this.trackings[i][key] = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(newPrecio), ',', '.');
          }
        }
      }

      this.calcSubTotal();
    },
    calcSubTotal: function calcSubTotal() {
      var tranckins = _toConsumableArray(this.trackings);

      var acum_subtotal = 0;
      var acum_extras_cajas = 0;
      var total_gastos_extras = this.total_gastos_extras;
      total_gastos_extras = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(total_gastos_extras, ',');

      if (total_gastos_extras % 1 == 0) {
        total_gastos_extras = parseInt(total_gastos_extras);
      } else {
        total_gastos_extras = parseFloat(total_gastos_extras);
      }

      for (var i = 0; i < tranckins.length; i++) {
        var subTotal = tranckins[i].subTotal;
        subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(subTotal, ',');

        if (subTotal % 1 == 0) {
          subTotal = parseInt(subTotal);
        } else {
          subTotal = parseFloat(subTotal);
        }

        acum_subtotal = acum_subtotal + subTotal;
      }

      if (this.extras_cajas.length > 0) {
        for (var _i5 = 0; _i5 < this.extras_cajas.length; _i5++) {
          var total_caja = this.extras_cajas[_i5].total_caja;
          total_caja = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(total_caja, ',');

          if (total_caja % 1 == 0) {
            total_caja = parseInt(total_caja);
          } else {
            total_caja = parseFloat(total_caja);
          }

          acum_extras_cajas = acum_extras_cajas + total_caja;
        }
      }

      acum_subtotal = acum_subtotal + acum_extras_cajas + total_gastos_extras;
      acum_subtotal = acum_subtotal.toFixed(2);
      this.total_usd = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(acum_subtotal), ',', '.');
      var tasa = this.details.tasa;
      tasa = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(tasa, '.');
      tasa = tasa.replace(',', '.');

      if (tasa % 1 == 0) {
        tasa = parseInt(tasa);
      } else {
        tasa = parseFloat(tasa);
      }

      tasa = tasa.toFixed(2);
      var tota_ves = tasa * acum_subtotal;
      tota_ves = tota_ves.toFixed(2);
      tota_ves = tota_ves.replace('.', ',');
      this.total_ves = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat(tota_ves), '.', ','); //console.log('sub Total general', acum_subtotal)
    },
    guardarFactura: function guardarFactura() {
      if (this.nro_factura != '' && this.nro_container != '' && (this.details.tarifa != '0' || this.details.tarifa != '0.00')) {
        this.showConfirmeFactura = true;
      } else {
        alert('Error, el numero factura, numero de container y el costo de tarifa, no puede ir vacio');
      }
    },
    sendFactura: function sendFactura() {
      var _this4 = this;

      this.componentRender = LoaderComponent;
      this.showConfirmeFactura = false;
      var trackings = [];
      var extras_cajas = [];
      var total_usd = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.total_usd, ',');
      var total_ves = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.total_ves, '.');
      var total_gastos_extras = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.total_gastos_extras, ',');

      for (var i = 0; i < this.trackings.length; i++) {
        var track = _objectSpread({}, this.trackings[i]);

        for (var key in track) {
          if (key === 'cost_x_tracking') {
            track.cost_x_tracking = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(track.cost_x_tracking, ',');
          } else if (key === 'cost_reempaque,') {
            track.cost_reempaque = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(track.cost_reempaque, ',');
          }
        }

        track.total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(track.total_seguro, ',');
        track.seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(track.seguro, ',');
        track.subTotal = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(track.subTotal, ',');
        trackings.push(track);
      }

      for (var _i6 = 0; _i6 < this.extras_cajas.length; _i6++) {
        var caja = _objectSpread({}, this.extras_cajas[_i6]);

        caja.total_caja = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(caja.total_caja, ',');
        caja.monto_gasto_extra = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(caja.monto_gasto_extra, ',');
        extras_cajas.push(caja);
      }

      console.log('enviar trackings ', trackings);
      console.log('enviar extras_cajas ', extras_cajas);
      console.log('enviar total_usd', total_usd);
      console.log('enviar total_ves', total_ves);
      console.log('enviar total_gastos_extras', total_gastos_extras);
      var formData = {
        nro_factura: this.nro_factura,
        nro_container: this.nro_container,
        tipo_envio: this.details.tipo_envio,
        tarifa_envio: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.details.tarifa, ','),
        usuario_id: this.user.usuario_id,
        cliente: this.user,
        trackings: trackings,
        extras_cajas: extras_cajas,
        total_usd: total_usd,
        total_ves: total_ves,
        monto_tc: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice(this.details.tasa, '.'),
        fecha_tc: this.details.fecha_tasa,
        total_gastos_extras: total_gastos_extras
      };
      console.log(formData);
      this.alert = {};
      this.activeComponent = '';
      this.axios.post('facturas', formData).then(function (response) {
        _this4.alert = {
          msg: response.data.message,
          clss: 'updated'
        };
        _this4.activeComponent = AlertMessageComponent;
        setTimeout(function () {
          _this4.$router.go(-1);
        }, 4000);
        console.log(response.data);
        setTimeout(function () {
          _this4.componentRender = '';
        }, 2000);
      })["catch"](function (error) {
        _this4.loader = false;
        _this4.alert = {
          msg: error.response.data.message,
          clss: 'error'
        };
        console.log(error.response.data);
        _this4.activeComponent = AlertMessageComponent;
        setTimeout(function () {
          _this4.componentRender = '';
        }, 2000);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal.show{\n    display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFacturas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/BtnVolver.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnVolver.vue?vue&type=template&id=34e53391& */ "./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&");
/* harmony import */ var _BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnVolver.vue?vue&type=script&lang=js& */ "./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.render,
  _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BtnVolver.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/facturas/Facturas.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facturas.vue?vue&type=template&id=a1506880& */ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&");
/* harmony import */ var _Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facturas.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.render,
  _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/facturas/Facturas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/facturas/FormFacturas.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admin/facturas/FormFacturas.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFacturas.vue?vue&type=template&id=0e150824& */ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824&");
/* harmony import */ var _FormFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFacturas.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js&");
/* harmony import */ var _FormFacturas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFacturas.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/facturas/FormFacturas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFacturas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFacturas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=template&id=34e53391& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&");


/***/ }),

/***/ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturas.vue?vue&type=template&id=a1506880& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&");


/***/ }),

/***/ "./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFacturas_vue_vue_type_template_id_0e150824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFacturas.vue?vue&type=template&id=0e150824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass: "btn",
      class: _vm.classe,
      attrs: { type: "button" },
      on: { click: _vm.volver },
    },
    [
      _c("i", { staticClass: "ti ti-arrow-back-up me-1" }),
      _vm._v("\n    Volver\n"),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880& ***!
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
  return _c("div", { staticClass: "container-xl" }, [
    _c("div", { staticClass: "row row-cards" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c("filters", {
            ref: "filters",
            attrs: { filters: _vm.filters, request: _vm.request },
            on: {
              consulReq: _vm.handleRequest,
              consulReqQury: _vm.handleRequestQuery,
            },
          }),
          _vm._v(" "),
          _c("tables", {
            attrs: {
              columns: _vm.data,
              viewData: _vm.view,
              accion: _vm.accion,
            },
          }),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/FormFacturas.vue?vue&type=template&id=0e150824& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            ? _c(
                "form",
                {
                  staticClass: "card card-lg",
                  attrs: {
                    name: "createFactura",
                    enctype: "multipart/form-data",
                  },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.guardarFactura()
                    },
                  },
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _vm.activeComponent != ""
                      ? _c(
                          "div",
                          { staticClass: "w-100 mb-3" },
                          [
                            _c(_vm.activeComponent, {
                              tag: "component",
                              attrs: { alert: _vm.alert },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-4" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("Detalles")]),
                        _vm._v(" "),
                        _c("address", [
                          _c("p", [
                            _vm._v("Tipo de Envio: "),
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
                              "Tarifa de Envio: " +
                                _vm._s(_vm.details.tarifa) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Tasa del Dolar: " +
                                _vm._s(_vm.details.tasa) +
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
                                _vm._s(_vm.user.nombres) +
                                " " +
                                _vm._s(_vm.user.apellidos)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.user.cod_usuario != 1
                            ? _c("p", [
                                _vm._v(
                                  "Código Usuario: " +
                                    _vm._s(_vm.user.cod_usuario)
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Teléfono: " + _vm._s(_vm.user.telefono)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Cédula: " + _vm._s(_vm.user.cedula)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Dirección: " +
                                _vm._s(_vm.user.estado) +
                                ". " +
                                _vm._s(_vm.user.zona) +
                                ", " +
                                _vm._s(_vm.user.codigo_postal) +
                                " "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.user.ref_direccion != null
                            ? _c("p", [
                                _vm._v(
                                  "Ref. Dirección: " +
                                    _vm._s(_vm.user.ref_direccion)
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100 mb-4" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-6" }, [
                              _c("div", { staticClass: "form-group mb-3 " }, [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("Cajas"),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.caja,
                                          expression: "caja",
                                        },
                                      ],
                                      staticClass: "form-select",
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.caja = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    _vm._l(_vm.cajas, function (item, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: {
                                            value: item.id_gasto_extra,
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(item.nombre) +
                                              " - $" +
                                              _vm._s(item.monto_gasto_extra)
                                          ),
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "row col-6",
                                staticStyle: { "padding-left": "0" },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "form-group mb-3 col-6" },
                                  [
                                    _c("label", { staticClass: "form-label" }, [
                                      _vm._v("Cant."),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.cant_caja,
                                          expression: "cant_caja",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        name: "example-password-input",
                                        placeholder: "Cantidad Caja",
                                      },
                                      domProps: { value: _vm.cant_caja },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.cant_caja = $event.target.value
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "form-group mb-3 col-6",
                                    staticStyle: { "padding-left": "0" },
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "form-label",
                                        staticStyle: { opacity: "0" },
                                      },
                                      [_vm._v("agegar")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-light",
                                          attrs: { type: "button" },
                                          on: { click: _vm.addCaja },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    Agregar\n                                                "
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-6" }, [
                              _c("div", { staticClass: "form-group mb-3 " }, [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("Cost Reemp. Tracking"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.cost_reemp_track,
                                      expression: "cost_reemp_track",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "example-password-input",
                                    placeholder: "Costo Reempaque de tracking",
                                  },
                                  domProps: { value: _vm.cost_reemp_track },
                                  on: {
                                    keyup: function ($event) {
                                      return _vm.changeCosto_RT($event)
                                    },
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.cost_reemp_track = $event.target.value
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c("div", { staticClass: "form-group mb-3 " }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    staticStyle: { opacity: "0" },
                                  },
                                  [_vm._v("----")]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-light",
                                      attrs: { type: "button" },
                                      on: { click: _vm.addCosto_RT },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    Agregar\n                                                "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-6" }, [
                              _c("div", { staticClass: "form-group mb-3 " }, [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("Costo x Tracking"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.cost_x_track,
                                      expression: "cost_x_track",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "example-password-input",
                                    placeholder: "Costo por tracking",
                                  },
                                  domProps: { value: _vm.cost_x_track },
                                  on: {
                                    keyup: function ($event) {
                                      return _vm.changeCosto_XT($event)
                                    },
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.cost_x_track = $event.target.value
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c("div", { staticClass: "form-group mb-3 " }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    staticStyle: { opacity: "0" },
                                  },
                                  [_vm._v("----")]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-light",
                                      attrs: { type: "button" },
                                      on: { click: _vm.addCosto_XT },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    Agregar\n                                                "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-transparent table-responsive mb-3",
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.trackings, function (item, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [
                                  _c("span", {}, [
                                    _vm._v(" " + _vm._s(item.warehouse)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", {}, [
                                    _vm._v(" " + _vm._s(item.tracking)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _c("p", [
                                      _c("small", [_vm._v("Nro. Piezas:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.num_piezas)),
                                      ]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Ancho:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.ancho)),
                                      ]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Largo:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.largo)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _c("small", [_vm._v("Alto:")]),
                                      _vm._v(" "),
                                      _c("strong", [_vm._v(_vm._s(item.alto))]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Peso (LB):")]),
                                      _vm._v(" "),
                                      _c("strong", [_vm._v(_vm._s(item.peso))]),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _c("small", [_vm._v("Pie Cúbico:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.pie_cubico)),
                                      ]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Volumen (LB):")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.volumen)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _c("small", [_vm._v("Total Seguro:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.total_seguro)),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "text-transform": "uppercase",
                                      },
                                    },
                                    [_vm._v(_vm._s(item.reempaque))]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  item.reempaque == "no"
                                    ? _c("span", {}, [_vm._v("0.00")])
                                    : _c("span", [
                                        _vm._v(_vm._s(item.cost_reempaque)),
                                      ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", {}, [
                                    _vm._v(_vm._s(item.cost_x_tracking)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  item.seguro == "0"
                                    ? _c("span", {}, [_vm._v("0.00")])
                                    : _c("span", {}, [
                                        _vm._v(_vm._s(item.seguro)),
                                      ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", [_vm._v(_vm._s(item.subTotal))]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-list flex-nowrap" },
                                    [
                                      item.reempaque == "si"
                                        ? _c(
                                            "button",
                                            {
                                              directives: [
                                                {
                                                  name: "title",
                                                  rawName: "v-title",
                                                },
                                              ],
                                              staticClass:
                                                "btn-acticon_spalert",
                                              attrs: {
                                                type: "button",
                                                id: "paquete",
                                                value: item.id_tracking,
                                                title: "Reempacar",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.showModal($event)
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "ti ti-package",
                                                staticStyle: {
                                                  "font-size": "21px",
                                                },
                                              }),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.extras_cajas, function (item) {
                              return _c("tr", { key: item.id_gasto_extra }, [
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _c("p", [
                                      _c("small", [_vm._v("Tipo de caja:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.nombre)),
                                      ]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Costo:")]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(_vm._s(item.monto_gasto_extra)),
                                      ]),
                                      _vm._v(". "),
                                      _c("small", [_vm._v("Cantidad:")]),
                                      _vm._v(" "),
                                      _c("strong", [_vm._v(_vm._s(item.cant))]),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", [
                                    _vm._v(_vm._s(item.monto_gasto_extra)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.total_caja))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        { name: "title", rawName: "v-title" },
                                      ],
                                      staticClass: "btn-acticon_spalert",
                                      attrs: {
                                        type: "button",
                                        value: item.id_gasto_extra,
                                        title: "Elimnar Caja",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.deleteCajaExtra($event)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "ti ti-trash",
                                        staticStyle: { "font-size": "21px" },
                                      }),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.total_gastos_extras,
                                      expression: "total_gastos_extras",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  staticStyle: { padding: "0.4375rem 5px" },
                                  attrs: {
                                    type: "text",
                                    name: "gastos_extras",
                                  },
                                  domProps: { value: _vm.total_gastos_extras },
                                  on: {
                                    keyup: function ($event) {
                                      return _vm.changeTotalGastosExtras($event)
                                    },
                                    change: _vm.addTotalGastosExtras,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.total_gastos_extras =
                                        $event.target.value
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("td"),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.total_usd))]),
                              _vm._v(" "),
                              _c("td"),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _c("td"),
                              _vm._v(" "),
                              _vm._m(4),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.total_ves))]),
                              _vm._v(" "),
                              _c("td"),
                            ]),
                          ],
                          2
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mt-5" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: " m-0 ms-auto",
                            staticStyle: { width: "330px" },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.nro_factura,
                                      expression: "nro_factura",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "nro_factura",
                                    id: "nro_factura",
                                  },
                                  domProps: { value: _vm.nro_factura },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.nro_factura = $event.target.value
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "nro_factura" } }, [
                                  _vm._v("Nro. Factura"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.nro_container,
                                      expression: "nro_container",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "nro_container",
                                    id: "nro_container",
                                  },
                                  domProps: { value: _vm.nro_container },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.nro_container = $event.target.value
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "nro_container" } },
                                  [_vm._v("Nro. Container")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.details.tarifa,
                                      expression: "details.tarifa",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "tarifa",
                                    id: "tarifa",
                                  },
                                  domProps: { value: _vm.details.tarifa },
                                  on: {
                                    keyup: function ($event) {
                                      return _vm.keyUpTarifa($event)
                                    },
                                    change: _vm.changeTarifa,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.details,
                                        "tarifa",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "tarifa" } }, [
                                  _vm._v(
                                    "Tarifa de Envio ( " +
                                      _vm._s(_vm.details.tipo_envio) +
                                      " )"
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mt-3" },
                      [
                        _c("btn-volver", { attrs: { classe: "btn-light" } }),
                        _vm._v(" "),
                        _vm._m(5),
                      ],
                      1
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal modal-blur fade",
              class: { show: _vm.showConfirmeFactura == true },
              attrs: {
                id: "modal-success",
                tabindex: "-1",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog modal-sm modal-dialog-centered",
                  attrs: { role: "document" },
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.hiddenConfirmeFactura()
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-status bg-success" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body text-center py-4" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "icon mb-2 text-green icon-lg",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              stroke: "none",
                              d: "M0 0h24v24H0z",
                              fill: "none",
                            },
                          }),
                          _c("circle", {
                            attrs: { cx: "12", cy: "12", r: "9" },
                          }),
                          _c("path", { attrs: { d: "M9 12l2 2l4 -4" } }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h3", [_vm._v("¿Estás seguro de crear la factura?")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v(
                          "\n                            Para crear la factura, asegurate que los datos esten correctos...\n                        "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c("div", { staticClass: "w-100" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn w-100",
                                attrs: {
                                  type: "button",
                                  "data-bs-dismiss": "modal",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.hiddenConfirmeFactura()
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                    Cancelar\n                                "
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success w-100",
                                attrs: {
                                  type: "button",
                                  "data-bs-dismiss": "modal",
                                },
                                on: { click: _vm.sendFactura },
                              },
                              [
                                _vm._v(
                                  "\n                                    Crear Factura\n                                "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "modal modal-blur fade",
              class: { show: _vm.show == true },
              attrs: {
                id: "paquete",
                tabindex: "-1",
                "aria-modal": "true",
                role: "dialog",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog modal-lg modal-dialog-centered",
                  attrs: { name: "paquete", role: "document" },
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v("Reempacar tracking: " + _vm._s(_vm.title)),
                      ]),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "btn-close",
                        attrs: {
                          type: "button",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.hiddenModal()
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.ancho,
                              expression: "dato.ancho",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("ancho") },
                          attrs: {
                            type: "text",
                            name: "ancho",
                            id: "ancho",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.dato.ancho },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.dato, "ancho", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "ancho" } }, [
                          _vm._v("Ancho"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("ancho")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("ancho"))),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.alto,
                              expression: "dato.alto",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("alto") },
                          attrs: {
                            type: "text",
                            name: "alto",
                            id: "alto",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.dato.alto },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.dato, "alto", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "alto" } }, [
                          _vm._v("Alto"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("alto")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("alto"))),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.largo,
                              expression: "dato.largo",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("largo") },
                          attrs: {
                            type: "text",
                            name: "largo",
                            id: "largo",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.dato.largo },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.dato, "largo", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "largo" } }, [
                          _vm._v("Largo"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("largo")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("largo"))),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.peso,
                              expression: "dato.peso",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("peso") },
                          attrs: {
                            type: "text",
                            name: "peso",
                            id: "largo",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.dato.peso },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.dato, "peso", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "peso" } }, [
                          _vm._v("Peso"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("peso")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("peso"))),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.num_piezas,
                              expression: "dato.num_piezas",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.errors.first("num_piezas"),
                          },
                          attrs: {
                            type: "text",
                            name: "num_piezas",
                            id: "largo",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.dato.num_piezas },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.dato,
                                "num_piezas",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "num_piezas" } }, [
                          _vm._v("Numero de Piezas"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("num_piezas")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("num_piezas"))),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.dato.total_seguro,
                              expression: "dato.total_seguro",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "total_seguro",
                            id: "total_seguro",
                          },
                          domProps: { value: _vm.dato.total_seguro },
                          on: {
                            keyup: function ($event) {
                              return _vm.changeTotalSeguro($event)
                            },
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.dato,
                                "total_seguro",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "total_seguro" } }, [
                          _vm._v("Total Seguro"),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn me-auto",
                          attrs: { type: "button", "data-bs-dismiss": "modal" },
                          on: {
                            click: function ($event) {
                              return _vm.hiddenModal()
                            },
                          },
                        },
                        [_vm._v("Cerrar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            type: "button",
                            id: "paquete",
                            "data-bs-dismiss": "modal",
                          },
                          on: { click: _vm.saveDataPaquete },
                        },
                        [_vm._v("Guardar")]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
        ],
        1
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
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("Nro. Tracking")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Detalles")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Cost. Caja")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Reemp.")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Cost. Reemp.")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [
          _vm._v("Cost. x Tracking."),
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Cost. Seguro")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("SubTotal")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("p", [_vm._v("Gastos Extras")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("p", [_vm._v("Total USD")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("p", [_vm._v("Total VES")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-info ms-auto", attrs: { type: "submit" } },
      [_c("span", [_vm._v("Guardar")])]
    )
  },
]
render._withStripped = true



/***/ })

}]);