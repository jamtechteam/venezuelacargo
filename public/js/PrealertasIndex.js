"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5030],{9763:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const s={name:"PrealertasIndex",data:function(){return{data:{th:[{name:"Usuario"},{name:"Nro. Tracking"},{name:"Registro de PreAlertas"},{name:"Nom. Empresa Transporte"},{name:"Fecha Llegada de Tracking"},{name:""}],columns:[{name:"Fecha Llegada",value:"solicitudes_envios.fecha_llegada"},{name:"Fecha Registro",value:"solicitudes_envios.fecha_creado"},{name:"Usuarios",value:"usuarios_info.nombres"}]},view:"PreAlertasDataTable",accion:{create:"",edit:"",delete:"prealertas"},request:{name:"IndexPrealertas",url:"prealertas",params:{limit:8,page:1,orderBy:"solicitudes_envios.fecha_llegada",ascending:0,query:{search:"",estado:"pendiente",fecha_inicio:"",fecha_final:""}}},filters:{name:"IndexPrealertas",first:{placeholder:"Escribe el nro. Tracking, nombre, apellido, C.I, código del usuario ó nombre de empresa"},second:[{name:"estado",type:"select",title:"Filtra por estado de prelaertas",option:{name:"title",value:"valor"},data:[{title:"Pendiente",valor:"pendiente"},{title:"Recibido",valor:"recibido"},{title:"Ver Todos",valor:"all"}]},{name:"fecha_inicio",type:"date",title:"Desde"},{name:"fecha_final",type:"date",title:"Hasta"}]}}},components:{tables:function(){return t.e(1331).then(t.bind(t,4728))},filters:function(){return t.e(1521).then(t.bind(t,1466))}},methods:{handleRequest:function(){this.$refs.filters.changeRequestPadre(n({},{name:"IndexPrealertas",url:"prealertas",params:{limit:8,page:1,orderBy:"solicitudes_envios.fecha_llegada",ascending:0,query:{search:"",estado:"pendiente",fecha_inicio:"",fecha_final:""}}}))},handleRequestQuery:function(){this.$refs.filters.changeQueryPadre(n({},{search:"",estado:"pendiente",fecha_inicio:"",fecha_final:""}))}}};const l=(0,t(1900).Z)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-xl"},[t("div",{staticClass:"row row-cards"},[t("div",{staticClass:"col-12"},[t("filters",{ref:"filters",attrs:{filters:e.filters,request:e.request},on:{consulReq:e.handleRequest,consulReqQury:e.handleRequestQuery}}),e._v(" "),t("tables",{attrs:{columns:e.data,viewData:e.view,accion:e.accion}})],1)])])}),[],!1,null,null,null).exports}}]);