"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6965],{705:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}const i={name:"Almacen",data:function(){return{data:{th:[{name:"Cliente"},{name:"Warehouse"},{name:"Nro. Tracking"},{name:"Peso LB"},{name:"Vol"},{name:"FT³"},{name:"tipo de Envio"},{name:"Envio"},{name:"Estado"},{name:""}],columns:[{name:"Warehouse",value:"almacenes.warehouse"},{name:"Fecha",value:"almacenes.fecha_editado"}]},view:"AlmacenesDataTable",accion:{create:"CreateAlmacen",edit:"",delete:""},request:{url:"almacenes",name:"IndexAlmacen",params:{limit:8,page:1,orderBy:"almacenes.warehouse",ascending:1,query:{search:"",estado:"all",instrucciones:"all",fecha_inicio:"",fecha_final:""}}},filters:{name:"IndexAlmacen",first:{placeholder:"Buscar por cliente, número de tracking ó warehose"},second:[{name:"instrucciones",type:"select",title:"Filtra por instrucciones",option:{name:"title",value:"valor"},data:[{title:"Con Instruccion",valor:"si"},{title:"Sin Instruccion",valor:"no"},{title:"Instrucciones",valor:"all"}]},{name:"fecha_inicio",type:"date",title:"Desde"},{name:"fecha_final",type:"date",title:"Hasta"}]}}},components:{tables:function(){return n.e(1331).then(n.bind(n,4728))},filters:function(){return n.e(1521).then(n.bind(n,1466))}},methods:{handleRequest:function(){this.$refs.filters.changeRequestPadre(r({},{url:"almacenes",name:"IndexAlmacen",params:{limit:8,page:1,orderBy:"almacenes.warehouse",ascending:1,query:{search:"",estado:"all",instrucciones:"all",fecha_inicio:"",fecha_final:""}}}))},handleRequestQuery:function(){this.$refs.filters.changeQueryPadre(r({},{search:"",estado:"all",instrucciones:"all",fecha_inicio:"",fecha_final:""}))}}};const s=(0,n(1900).Z)(i,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"container-xl"},[n("div",{staticClass:"row row-cards"},[n("div",{staticClass:"col-12"},[n("filters",{ref:"filters",attrs:{filters:e.filters,request:e.request},on:{consulReq:e.handleRequest,consulReqQury:e.handleRequestQuery}}),e._v(" "),n("tables",{attrs:{columns:e.data,viewData:e.view,accion:e.accion}})],1)])])}),[],!1,null,null,null).exports}}]);