"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_CardRowFormComponent_vue-_14930"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formatPrice */ "./resources/js/formatPrice.js");
/* harmony import */ var _BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
}; //const init = formatPrice.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['card'],
  name: 'CardRowFormComponent',
  data: function data() {
    return {
      loader: false,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      },
      selectMulti: []
    };
  },
  computed: {
    nodoForms: function nodoForms() {
      var formulario = this.card.row;
      var arreglo = [];

      for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].form.length != 0) {
          var cardForm = formulario[i].form;

          for (var j = 0; j < cardForm.length; j++) {
            if (cardForm[j].nodo == 'select-multi') {
              arreglo[cardForm[j].name] = cardForm[j].value.length == 0 ? [] : cardForm[j].value;
            } else {
              arreglo[cardForm[j].name] = cardForm[j].value;
            }
          }
        }
      }

      return Object.assign({}, arreglo);
    }
  },
  watch: {
    nodoForms: function nodoForms() {
      console.log('cambio cambio');
    }
  },
  mounted: function mounted() {
    _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.init();
  },
  components: {
    loader: LoaderComponent,
    BtnVolver: _BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    formModel: function formModel() {
      var formulario = this.card.row;
      var arreglo = [];

      for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].form.length != 0) {
          var cardForm = formulario[i].form;

          for (var j = 0; j < cardForm.length; j++) {
            if (cardForm[j].nodo == 'select-multi') {
              arreglo[cardForm[j].name] = [];
            } else {
              arreglo[cardForm[j].name] = cardForm[j].value;
            }
          }
        }
      }

      return Object.assign({}, arreglo);
    },
    submit: function submit(e) {
      var _this = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.loader = true;
          console.log(_this.nodoForms);

          var formData = _objectSpread({}, _this.nodoForms);

          for (var field in formData) {
            console.log(field);

            if (_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.checkField(field) && formData[field] != '' && formData[field] != null) {
              formData[field] = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.destructPrecio(formData[field], field);
            }
          }

          var request = _this.card.action == 'save' ? _this.axios.post(_this.getUrl(_this.card.action), formData) : _this.axios.put(_this.getUrl(_this.card.action), formData);
          request.then(function (response) {
            console.log(response.data);
            resp(response.data);
          })["catch"](function (error) {
            console.log(error.response);
            console.log(error.response.data);
            var status = error.response.status;
            var message = error.response.data.message;

            if (status == 500) {
              message = 'Error inesperado. por favor intentar más tarde.';
            }

            resp({
              status: status,
              message: message
            });
          });

          var resp = function resp(_resp) {
            setTimeout(function () {
              _this.loader = false;

              _this.respAlert(_resp.status, _resp.message);
            }, 2000);

            if (_resp.status == 200) {
              setTimeout(function () {
                _this.$router.go(-1);
              }, 4000);
            }
          };
        }
      });
    },
    getUrl: function getUrl(typeRequest) {
      return typeRequest == 'save' ? "".concat(this.card.url) : "".concat(this.card.url, "/").concat(this.card.id);
    },
    respAlert: function respAlert(status) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.alert = {
        msg: msg,
        clss: status == 200 ? 'updated' : 'error'
      };
      this.activeComponent = AlertMessageComponent;
    },
    changeFormInput: function changeFormInput(e) {
      console.log(e.target.value);
      this.nodoForms[e.target.name] = e.target.value;
    },
    onKeyUpIsPrice: function onKeyUpIsPrice(e) {
      if (_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.checkField(e.target.name)) {
        var moneda = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.moneda(e.target.name);

        if (moneda == 'ves') {
          e.target.value = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice(e.target.value, '.', ',');
          this.nodoForms[e.target.name] = e.target.value;
        } else {
          e.target.value = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice(e.target.value, ',', '.');
          this.nodoForms[e.target.name] = e.target.value;
        }
      } //formatPrice

    },
    clickSelectMulti: function clickSelectMulti(e) {
      var check = e.target.checked;
      var parent = e.target.parentElement.parentElement.parentElement;
      var btn = parent.parentElement.previousSibling.previousSibling;
      var name = e.target.name;
      var value = e.target.value;
      var arreglo = this.nodoForms[name];

      if (check) {
        parent.classList.add("active");
        e.target.setAttribute('checked', 'true');

        if (!arreglo.includes(value)) {
          arreglo.push(value);
        }
      } else {
        parent.classList.remove("active");
        e.target.removeAttribute('checked');

        if (arreglo.includes(value)) {
          var aux = [];

          for (var i = 0; i < arreglo.length; i++) {
            if (value != arreglo[i]) aux.push(arreglo[i]);
          }

          arreglo = aux;
        }
      }

      this.nodoForms[name] = arreglo;
      btn.querySelector('.multiselect-selected-text strong').innerText = arreglo.length;
    },
    eventSelect: function eventSelect() {
      if (this.card.evento != '') {
        this.$emit(this.card.evento, this.nodoForms);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.height-220px{\n    height: 220px;\n}\n.max_width480{\n    max-width: 480px;\n}\n.margin_auto_all{\n    margin: auto;\n}\n.div-loader_white{\n    margin: 0;\n}\n.invalid-feedback{\n    display: block;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardRowFormComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/forms/CardRowFormComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/forms/CardRowFormComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a& */ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a&");
/* harmony import */ var _CardRowFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardRowFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CardRowFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardRowFormComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardRowFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CardRowFormComponent.vue"
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

/***/ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardRowFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardRowFormComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardRowFormComponent_vue_vue_type_template_id_0d5a2d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/CardRowFormComponent.vue?vue&type=template&id=0d5a2d1a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "card",
      class: _vm.card.class,
      attrs: { name: _vm.card.name },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit($event)
        },
      },
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loader,
              expression: "loader",
            },
          ],
          staticClass: "div-loader_white",
        },
        [_c("loader")],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-header" }, [
        _c("h4", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.card.title)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm.activeComponent
              ? _c(
                  "div",
                  { staticClass: "col-xl-12 col-md-12" },
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
            _vm._l(_vm.card.row, function (card, index) {
              return _c(
                "div",
                { key: index, class: card.class },
                _vm._l(card.form, function (form, index) {
                  return _c("div", { key: index, staticClass: "mb-3" }, [
                    form.nodo == "select"
                      ? _c(
                          "div",
                          {
                            staticClass: "form-floating mb-3",
                            class: {
                              "is-invalid": _vm.errors.first(form.name),
                            },
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: form.validate,
                                    expression: "form.validate",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nodoForms[form.name],
                                    expression: "nodoForms[form.name]",
                                  },
                                ],
                                staticClass: "form-select",
                                attrs: {
                                  disabled: form.disable,
                                  name: form.name,
                                  id: form.id,
                                  "data-vv-validate-on": form.event,
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.nodoForms,
                                        form.name,
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function ($event) {
                                      return _vm.eventSelect($event)
                                    },
                                  ],
                                },
                              },
                              _vm._l(form.options, function (data, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: data[form.opt.id] },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(data[form.opt.name]) +
                                        "\n                            "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("label", { attrs: { for: form.label.for } }, [
                              _vm._v(_vm._s(form.label.title)),
                            ]),
                            _vm._v(" "),
                            _vm.errors.has(form.name)
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.first(form.name))),
                                ])
                              : _vm._e(),
                          ]
                        )
                      : form.nodo == "select-multi"
                      ? _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("strong", [_vm._v(_vm._s(form.label.title))]),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown mt-2" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "multiselect dropdown-toggle btn btn-default",
                                attrs: {
                                  type: "button",
                                  "data-bs-toggle": "dropdown",
                                  "data-bs-auto-close": "outside",
                                  role: "button",
                                  "aria-expanded": "false",
                                  id: "estado",
                                },
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "multiselect-selected-text" },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.nodoForms[form.name].length)
                                      ),
                                    ]),
                                    _vm._v(" Seleccionados"),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b", { staticClass: "caret" }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "multiselect-container dropdown-menu",
                                class: {
                                  "height-220px": form.options.length > 6,
                                },
                              },
                              _vm._l(form.options, function (data, index) {
                                return _c(
                                  "li",
                                  {
                                    key: index,
                                    class: {
                                      active: _vm.nodoForms[form.name].includes(
                                        data[form.opt.id]
                                      ),
                                    },
                                  },
                                  [
                                    _c("a", [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "checkbox",
                                          attrs: { for: index },
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: form.validate,
                                                expression: "form.validate",
                                              },
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.nodoForms[form.name],
                                                expression:
                                                  "nodoForms[form.name]",
                                              },
                                            ],
                                            attrs: {
                                              type: "checkbox",
                                              "data-vv-validate-on": form.event,
                                              name: form.name,
                                              id: index,
                                            },
                                            domProps: {
                                              value: data[form.opt.id],
                                              checked: Array.isArray(
                                                _vm.nodoForms[form.name]
                                              )
                                                ? _vm._i(
                                                    _vm.nodoForms[form.name],
                                                    data[form.opt.id]
                                                  ) > -1
                                                : _vm.nodoForms[form.name],
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.clickSelectMulti(
                                                  $event
                                                )
                                              },
                                              change: function ($event) {
                                                var $$a =
                                                    _vm.nodoForms[form.name],
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = data[form.opt.id],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.nodoForms,
                                                        form.name,
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.nodoForms,
                                                        form.name,
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.nodoForms,
                                                    form.name,
                                                    $$c
                                                  )
                                                }
                                              },
                                            },
                                          }),
                                          _vm._v(
                                            "  \n                                            " +
                                              _vm._s(data[form.opt.name]) +
                                              "\n                                        "
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                )
                              }),
                              0
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has(form.name)
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first(form.name))),
                              ])
                            : _vm._e(),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    form.nodo == "input"
                      ? _c("div", { staticClass: "form-floating mb-3" }, [
                          form.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: form.validate,
                                    expression: "form.validate",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nodoForms[form.name],
                                    expression: "nodoForms[form.name]",
                                  },
                                ],
                                key: index,
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first(form.name),
                                },
                                attrs: {
                                  name: form.name,
                                  id: form.id,
                                  "data-vv-validate-on": form.event,
                                  type: "checkbox",
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.nodoForms[form.name]
                                  )
                                    ? _vm._i(_vm.nodoForms[form.name], null) >
                                      -1
                                    : _vm.nodoForms[form.name],
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      var $$a = _vm.nodoForms[form.name],
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.nodoForms,
                                              form.name,
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.nodoForms,
                                              form.name,
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.nodoForms, form.name, $$c)
                                      }
                                    },
                                    function ($event) {
                                      return _vm.changeFormInput($event)
                                    },
                                  ],
                                  keyup: function ($event) {
                                    return _vm.onKeyUpIsPrice($event)
                                  },
                                },
                              })
                            : form.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: form.validate,
                                    expression: "form.validate",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nodoForms[form.name],
                                    expression: "nodoForms[form.name]",
                                  },
                                ],
                                key: index,
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first(form.name),
                                },
                                attrs: {
                                  name: form.name,
                                  id: form.id,
                                  "data-vv-validate-on": form.event,
                                  type: "radio",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.nodoForms[form.name],
                                    null
                                  ),
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      return _vm.$set(
                                        _vm.nodoForms,
                                        form.name,
                                        null
                                      )
                                    },
                                    function ($event) {
                                      return _vm.changeFormInput($event)
                                    },
                                  ],
                                  keyup: function ($event) {
                                    return _vm.onKeyUpIsPrice($event)
                                  },
                                },
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: form.validate,
                                    expression: "form.validate",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nodoForms[form.name],
                                    expression: "nodoForms[form.name]",
                                  },
                                ],
                                key: index,
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first(form.name),
                                },
                                attrs: {
                                  name: form.name,
                                  id: form.id,
                                  "data-vv-validate-on": form.event,
                                  type: form.type,
                                },
                                domProps: { value: _vm.nodoForms[form.name] },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeFormInput($event)
                                  },
                                  keyup: function ($event) {
                                    return _vm.onKeyUpIsPrice($event)
                                  },
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.nodoForms,
                                      form.name,
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: form.label.for } }, [
                            _vm._v(_vm._s(form.label.title)),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has(form.name)
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first(form.name))),
                              ])
                            : _vm._e(),
                        ])
                      : _vm._e(),
                  ])
                }),
                0
              )
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer text-end" }, [
        _c(
          "div",
          { staticClass: "d-flex" },
          [
            _c("btn-volver", { attrs: { classe: "btn-light" } }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary ms-auto",
                attrs: { type: "submit" },
              },
              [
                _c("i", { staticClass: "ti ti-plus me-1" }),
                _vm._v(" "),
                _vm.card.action == "save"
                  ? _c("span", [_vm._v("Guardar")])
                  : _c("span", [_vm._v("Actualizar")]),
              ]
            ),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);