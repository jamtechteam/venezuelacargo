"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2158],{8798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o={name:"IndexEnvios",data:function(){return{data:{th:[{name:"Nro Factura"},{name:"Nro Container"},{name:"Tipo de Envio"},{name:"Monto de Factura"},{name:"Estado de Pago"},{name:"Estado de Envio"},{name:""}],columns:[{name:"Nro Factura",value:"facturas.nro_factura"},{name:"Nro Container",value:"facturas.nro_container"}]},view:"EnviosClientDataTable",accion:{create:"",edit:"",delete:""},request:{name:"IndexEnvios",url:"shipments",params:{limit:8,page:1,orderBy:"facturas.nro_container",ascending:0,query:{search:""}}},filters:{name:"IndexEnvios",first:{placeholder:"Busca por numero de warehouse, tracking, factura o container"},second:[]}}},components:{tables:function(){return n.e(1331).then(n.bind(n,7349))},filters:function(){return n.e(1521).then(n.bind(n,1466))}},methods:{handleRequest:function(){this.$refs.filters.changeRequestPadre(a({},{name:"IndexEnvios",url:"shipments",params:{limit:8,page:1,orderBy:"facturas.nro_container",ascending:0,query:{search:""}}}))},handleRequestQuery:function(){this.$refs.filters.changeQueryPadre(a({},{search:""}))}}};const c=(0,n(1900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-xl"},[n("div",{staticClass:"row row-cards"},[n("div",{staticClass:"col-12"},[n("filters",{ref:"filters",attrs:{filters:e.filters,request:e.request},on:{consulReq:e.handleRequest,consulReqQury:e.handleRequestQuery}}),e._v(" "),n("tables",{attrs:{columns:e.data,viewData:e.view,accion:e.accion}})],1)])])}),[],!1,null,null,null).exports}}]);