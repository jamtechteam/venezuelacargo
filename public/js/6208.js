"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6208,6956,4932],{7132:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(3645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".show{display:block;transition:opacity .3s ease}.div-loader_white{margin:0}",""]);const s=i},8459:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(3645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".container-preloader{align-items:center;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:flex;height:100%;justify-content:center;position:relative;transition:all .4s;visibility:visible;width:100%}.container-preloader.hidden{-webkit-animation-duration:1.5s;animation-duration:1.5s;opacity:0;visibility:hidden}.animsition-loading-1{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.preloader{-webkit-animation:loader-scale 1s ease-out infinite;animation:loader-scale 1s ease-out infinite;border:4px solid #24298d;border-radius:50%;height:56px;margin:-28px auto 0;position:relative;top:50%;width:56px}@-webkit-keyframes loader-scale{0%{opacity:0;transform:scale(0)}50%{opacity:1}to{opacity:0;transform:scale(1)}}@keyframes loader-scale{0%{opacity:0;transform:scale(0)}50%{opacity:1}to{opacity:0;transform:scale(1)}}",""]);const s=i},3645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t=e(a);return a[2]?"@media ".concat(a[2]," {").concat(t,"}"):t})).join("")},a.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var n=0;n<e.length;n++){var l=[].concat(e[n]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),a.push(l))}},a}},3379:(e,a,t)=>{var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(a){if(void 0===e[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[a]=t}return e[a]}}(),r=[];function n(e){for(var a=-1,t=0;t<r.length;t++)if(r[t].identifier===e){a=t;break}return a}function l(e,a){for(var t={},o=[],i=0;i<e.length;i++){var s=e[i],l=a.base?s[0]+a.base:s[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var v=n(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==v?(r[v].references++,r[v].updater(u)):r.push({identifier:d,updater:h(u,a),references:1}),o.push(d)}return o}function c(e){var a=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){a.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(a);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}return a}var d,v=(d=[],function(e,a){return d[e]=a,d.filter(Boolean).join("\n")});function u(e,a,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=v(a,i);else{var s=document.createTextNode(i),r=e.childNodes;r[a]&&e.removeChild(r[a]),r.length?e.insertBefore(s,r[a]):e.appendChild(s)}}function m(e,a,t){var o=t.css,i=t.media,s=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function h(e,a){var t,o,i;if(a.singleton){var s=p++;t=f||(f=c(a)),o=u.bind(null,t,s,!1),i=u.bind(null,t,s,!0)}else t=c(a),o=m.bind(null,t,a),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;o(e=a)}else i()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=i());var t=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=n(t[o]);r[i].references--}for(var s=l(e,a),c=0;c<t.length;c++){var d=n(t[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=s}}}},8758:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var o=t(7757),i=t.n(o),s=t(4932);t(7675);function r(e,a,t,o,i,s,r){try{var n=e[s](r),l=n.value}catch(e){return void t(e)}n.done?a(l):Promise.resolve(l).then(o,i)}function n(e){return function(){var a=this,t=arguments;return new Promise((function(o,i){var s=e.apply(a,t);function n(e){r(s,o,i,n,l,"next",e)}function l(e){r(s,o,i,n,l,"throw",e)}n(void 0)}))}}const l={name:"CalculadoraEnvio",props:["show"],data:function(){return{loader:!1,estados:[],result:"",estado_id:"",tipo_envio:"",reempaque:"",alto:"",largo:"",ancho:"",peso:""}},components:{loader:s.default},beforeCreate:function(){this.$nextTick(n(i().mark((function e(){var a=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("estados").then((function(e){a.estados=e.data.results.all,console.log(a.estados)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)}))))},methods:{closeModal:function(){this.$emit("closeModalCalcularEnvio")},calcular:function(){var e=this;this.$validator.validate().then((function(a){if(a){e.loader=!0;var t={estado_id:e.estado_id,tipo_envio:e.tipo_envio,reempaque:e.reempaque,alto:e.alto,largo:e.largo,ancho:e.ancho,peso:e.peso};setTimeout(n(i().mark((function a(){return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.axios.get("calculadora",{params:t}).then((function(a){e.loader=!1,e.result=a.data.message,console.log("response",a.data)})).catch((function(a){console.log(a.response.data),e.loader=!1}));case 2:case"end":return a.stop()}}),a)}))),1e3)}}))}}};var c=t(3379),d=t.n(c),v=t(7132),u={insert:"head",singleton:!1};d()(v.Z,u);v.Z.locals;const m=(0,t(1900).Z)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("transition",{attrs:{name:"component-fade",mode:"out-in"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal modal-blur fade",class:{show:1==e.show},attrs:{id:"modal-danger",tabindex:"-1","aria-modal":"true",role:"dialog"}},[t("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"div-loader_white"},[t("loader")],1),e._v(" "),t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[e._v("Calculadora de Envío")]),e._v(" "),t("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:e.closeModal}})]),e._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"mb-3"},[t("div",{staticClass:"form-floating",class:{"is-invalid":e.errors.first("estado")}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.estado_id,expression:"estado_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-select",attrs:{id:"selectEstados",name:"estado","data-vv-validate-on":"change"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.estado_id=a.target.multiple?t:t[0]}}},e._l(e.estados,(function(a,o){return t("option",{key:o,domProps:{value:a.id_estado}},[e._v(e._s(a.estado))])})),0),e._v(" "),t("label",{attrs:{for:"floatingSelect"}},[e._v("Selecciona el Destino")]),e._v(" "),e.errors.has("estado")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("estado")))]):e._e()])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[t("div",{staticClass:"mb-3"},[t("div",{staticClass:"form-floating",class:{"is-invalid":e.errors.first("tipo_envio")}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.tipo_envio,expression:"tipo_envio"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-select",attrs:{id:"selectEstados",name:"tipo_envio","data-vv-validate-on":"change"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.tipo_envio=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"aereo"}},[e._v("Aéreo")]),e._v(" "),t("option",{attrs:{value:"maritimo"}},[e._v("Maritimo")])]),e._v(" "),t("label",{attrs:{for:"floatingSelect"}},[e._v("Selección de tipo de envío")]),e._v(" "),e.errors.has("tipo_envio")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("tipo_envio")))]):e._e()])])]),e._v(" "),t("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[t("div",{staticClass:"mb-3"},[t("div",{staticClass:"form-floating",class:{"is-invalid":e.errors.first("reempaque")}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reempaque,expression:"reempaque"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-select",attrs:{id:"reempaque",name:"reempaque","data-vv-validate-on":"change"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.reempaque=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"no"}},[e._v("No")]),e._v(" "),t("option",{attrs:{value:"si"}},[e._v("Si")])]),e._v(" "),t("label",{attrs:{for:"reempaque"}},[e._v("Con Reempaque")]),e._v(" "),e.errors.has("reempaque")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("reempaque")))]):e._e()])])])]),e._v(" "),t("div",{staticClass:"row mb-4"},[t("div",{staticClass:"col-lg-3 col-md-3 col-sm-12"},[t("div",{staticClass:"form-floating mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.alto,expression:"alto"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",class:{"is-invalid":e.errors.first("alto")},attrs:{type:"text",id:"alto",name:"alto","data-vv-validate-on":"change"},domProps:{value:e.alto},on:{input:function(a){a.target.composing||(e.alto=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"alto"}},[e._v("Alto")]),e._v(" "),e.errors.has("alto")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("alto")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-3 col-md-3 col-sm-12"},[t("div",{staticClass:"form-floating mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.largo,expression:"largo"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",class:{"is-invalid":e.errors.first("largo")},attrs:{type:"text",id:"largo",name:"largo","data-vv-validate-on":"change"},domProps:{value:e.largo},on:{input:function(a){a.target.composing||(e.largo=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"largo"}},[e._v("Largo")]),e._v(" "),e.errors.has("largo")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("largo")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-3 col-md-3 col-sm-12"},[t("div",{staticClass:"form-floating mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.ancho,expression:"ancho"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",class:{"is-invalid":e.errors.first("ancho")},attrs:{type:"text",id:"ancho",name:"ancho","data-vv-validate-on":"change"},domProps:{value:e.ancho},on:{input:function(a){a.target.composing||(e.ancho=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"ancho"}},[e._v("Ancho")]),e._v(" "),e.errors.has("ancho")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("ancho")))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-3 col-md-3 col-sm-12"},[t("div",{staticClass:"form-floating mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.peso,expression:"peso"},{name:"validate",rawName:"v-validate",value:"required|regex:^[0-9]+([.][0-9]{2})?$",expression:"'required|regex:^[0-9]+([.][0-9]{2})?$'"}],staticClass:"form-control",class:{"is-invalid":e.errors.first("peso")},attrs:{type:"text",id:"peso",name:"peso","data-vv-validate-on":"change"},domProps:{value:e.peso},on:{input:function(a){a.target.composing||(e.peso=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"peso"}},[e._v("Peso")]),e._v(" "),e.errors.has("peso")?t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("peso")))]):e._e()])])]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-status-bottom bg-success"}),e._v(" "),t("div",{staticClass:"card-body"},[t("h3",{staticClass:"card-title"},[e._v("Resultado")]),e._v(" "),t("p",[e._v(e._s(e.result))])])])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:e.closeModal}},[e._v("\r\n                        Cancelar\r\n                    ")]),e._v(" "),t("button",{staticClass:"btn btn-primary ms-auto",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:e.calcular}},[e._v("\r\n                        Calcular\r\n                    ")])])])])])])}),[],!1,null,null,null).exports},4932:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});const o={name:"VzlacargoLoaderComponent"};var i=t(3379),s=t.n(i),r=t(8459),n={insert:"head",singleton:!1};s()(r.Z,n);r.Z.locals;const l=(0,t(1900).Z)(o,(function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"container-preloader"},[a("div",{staticClass:"animsition-loading-1"},[a("div",{staticClass:"preloader"})])])}],!1,null,null,null).exports}}]);