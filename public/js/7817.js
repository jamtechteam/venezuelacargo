"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7817],{7817:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(7757),i=a.n(s);function r(e,t,a,s,i,r,n){try{var o=e[r](n),d=o.value}catch(e){return void a(e)}o.done?t(d):Promise.resolve(d).then(s,i)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(s,i){var n=e.apply(t,a);function o(e){r(n,s,i,o,d,"next",e)}function d(e){r(n,s,i,o,d,"throw",e)}o(void 0)}))}}const o={name:"AlmacenesDataTable",props:["data"],data:function(){return{getId:[]}},computed:{type:function(){return 0!==Object.keys(this.$store.getters["tableadmin/getRequest"].params).length&&this.$store.getters["tableadmin/getRequest"].params.query.hasOwnProperty("instrucciones")&&"si"==this.$store.getters["tableadmin/getRequest"].params.query.instrucciones&&"IndexAlmacen"==this.$route.name?"checkbox":"radio"}},beforeCreate:function(){this.$nextTick(n(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"si"==this.$store.getters["tableadmin/getRequest"].params.query.instrucciones?(this.getId=this.getStorage(),this.$emit("getId",this.getId)):window.sessionStorage.removeItem("idLocalStorage");case 1:case"end":return e.stop()}}),e,this)}))))},methods:{getStorage:function(){return void 0!==window.sessionStorage.getItem("idLocalStorage")&&window.sessionStorage.getItem("idLocalStorage")?JSON.parse(sessionStorage.getItem("idLocalStorage")).data:[]},changeId:function(e){var t=e.target.value,a={};void 0!==window.sessionStorage.getItem("idLocalStorage")&&window.sessionStorage.getItem("idLocalStorage")&&(a=JSON.parse(sessionStorage.getItem("idLocalStorage")));var s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=0;a<e.length;a++)if(e[a].id_almacen===t)return e[a]}(this.data,t),i=s.usuario_id,r=s.tipo_envio,n=s.reempaque;if(this.getId.includes(t)){for(var o=[],d=0;d<this.getId.length;d++)this.getId[d]!=t&&o.push(this.getId[d]);this.getId=o}else{if(0!==Object.keys(a).length){if(a.usuario_id!==i)return alert("Por favor, debe agregar los WareHouse que pertenezca a un solo cliente"),void e.preventDefault();if(a.tipo_envio!=r)return alert("Por favor, debe agregar los WareHouse que pertenezca a un solo tipo de envio"),void e.preventDefault();if(a.reempaque!=n)return alert("Por favor, los envios con reempaque se factura por separdo y los directos igual"),void e.preventDefault()}this.getId.push(t)}window.sessionStorage.removeItem("idLocalStorage"),a.usuario_id=i,a.tipo_envio=r,a.reempaque=n,a.data=this.getId,this.getId.length>0&&window.sessionStorage.setItem("idLocalStorage",JSON.stringify(a)),this.$emit("getId",this.getId)}}};const d=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tbody",e._l(e.data,(function(t,s){return a("tr",{key:s},[a("td",["checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.getId,expression:"getId"},{name:"show",rawName:"v-show",value:1==t.status,expression:"item.status == 1"}],staticClass:"form-check-input m-0 align-middle",staticStyle:{border:"1px solid #b9b9b9",cursor:"pointer"},attrs:{name:"id","aria-label":"Select invoice",type:"checkbox"},domProps:{value:t.id_almacen,checked:Array.isArray(e.getId)?e._i(e.getId,t.id_almacen)>-1:e.getId},on:{click:function(t){return e.changeId(t)},change:function(a){var s=e.getId,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=t.id_almacen,o=e._i(s,n);i.checked?o<0&&(e.getId=s.concat([n])):o>-1&&(e.getId=s.slice(0,o).concat(s.slice(o+1)))}else e.getId=r}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.getId,expression:"getId"},{name:"show",rawName:"v-show",value:1==t.status,expression:"item.status == 1"}],staticClass:"form-check-input m-0 align-middle",staticStyle:{border:"1px solid #b9b9b9",cursor:"pointer"},attrs:{name:"id","aria-label":"Select invoice",type:"radio"},domProps:{value:t.id_almacen,checked:e._q(e.getId,t.id_almacen)},on:{click:function(t){return e.changeId(t)},change:function(a){e.getId=t.id_almacen}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.getId,expression:"getId"},{name:"show",rawName:"v-show",value:1==t.status,expression:"item.status == 1"}],staticClass:"form-check-input m-0 align-middle",staticStyle:{border:"1px solid #b9b9b9",cursor:"pointer"},attrs:{name:"id","aria-label":"Select invoice",type:e.type},domProps:{value:t.id_almacen,value:e.getId},on:{click:function(t){return e.changeId(t)},input:function(t){t.target.composing||(e.getId=t.target.value)}}})]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.nombres)+" "+e._s(t.apellidos))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.warehouse))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.tracking))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.peso))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.volumen))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.pie_cubico))])]),e._v(" "),a("td",[a("span",{},[e._v(" "+e._s(t.tipo_envio))])]),e._v(" "),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.status,expression:"item.status == 1"}]},[e._v(" "+e._s("no"==t.reempaque?"Directo":"Reempaque"))])]),e._v(" "),a("td",[a("span",{staticClass:"avatar bg-green-lt status-vzla"},[e._v(" "+e._s(t.estado))])]),e._v(" "),a("td",[a("div",{staticClass:"btn-list flex-nowrap m-0-all",staticStyle:{"align-items":"center"}},[a("router-link",{directives:[{name:"title",rawName:"v-title"}],staticClass:"btn semaforo-btn align-text-top me-2",class:{"btn-danger":0==t.status,"btn-success":1==t.status},staticStyle:{"margin-bottom":"0 !important"},attrs:{to:{name:"InstructAlmacen",params:{id:t.id_solicitud},query:{estado:t.estado_prealerta}},title:0==t.status?"Por Asignar":"Asigando"}}),e._v(" "),a("router-link",{directives:[{name:"title",rawName:"v-title"}],staticClass:"align-text-top nav-link m-0",staticStyle:{padding:"0","margin-bottom":"0 !important"},attrs:{to:{name:"EditarWarehose",params:{id:t.id_almacen}},title:"Editar WareHouse"}},[a("i",{staticClass:"ti ti-edit",staticStyle:{"font-size":"21px"}})])],1)])])})),0)}),[],!1,null,null,null).exports}}]);