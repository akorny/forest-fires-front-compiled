(this["webpackJsonpforest-fires-front"]=this["webpackJsonpforest-fires-front"]||[]).push([[0],{28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),l=(a(28),a(15)),i=a(2),o=a(1),j=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Me\u017ea ugunsb\u012bstam\u012bbas karte"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/map/now",activeClassName:"active",className:"nav-link",children:"Ugunsb\u012bstam\u012bba \u0161obr\u012bd"})})})})]})})},d=function(){return Object(o.jsx)("p",{children:"Site description goes here!"})},b=function(){return Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("div",{className:"spinner-grow",style:{width:"3rem",height:"3rem"},role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},u=a(3),h=a(39),m=a(41),O=a(40),p=function(e){var t=e.method,a=e.url,s=e.urlParams,r=Object(n.useState)(!1),c=Object(u.a)(r,2),l=c[0],i=c[1],o=Object(n.useState)(void 0),j=Object(u.a)(o,2),d=j[0],b=j[1],h=Object(n.useState)(!1),m=Object(u.a)(h,2),O=m[0],p=m[1],x=Object(n.useMemo)((function(){return a?s?a+"?"+Object.keys(s).map((function(e){return e+"="+s[e]})).join("&"):a:null}),[s,a]);return Object(n.useEffect)((function(){if(x){var e=new XMLHttpRequest;e.onloadstart=function(){p(!0)},e.onloadend=function(){p(!1)},e.onerror=function(e){i(!0)},e.ontimeout=function(e){i(!0)},e.onload=function(t){try{b(JSON.parse(e.response))}catch(a){b(e.response)}},e.open(t,x,!0),e.send()}}),[t,x]),[d,O,l]},x=(a(35),function(e){var t=e.geojsonUrl,a=p({method:"GET",url:t}),n=Object(u.a)(a,3),s=n[0],r=n[1],c=n[2];return r?Object(o.jsx)(b,{}):c?Object(o.jsx)("div",{children:"Notikusi k\u013c\u016bda..."}):Object(o.jsxs)(h.a,{center:[56.946285,24.105078],zoom:3,style:{width:"100%",height:"500px"},children:[Object(o.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(o.jsx)(O.a,{data:s})]})}),v=function(e){var t=e.layer,a=e.setLayer,s=e.method,r=e.setMethod,c=e.selectedTime,l=e.indexFrom,i=e.indexTo,j=e.index,d=e.setIndex,b=e.setPeriodFrom,h=e.setPeriodTo,m=Object(n.useState)("1h"),O=Object(u.a)(m,2),p=O[0],x=O[1],v={"1h":3600,"4h":14400,"12h":43200,"24h":86400,"2d":172800,"7d":604800};return Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("label",{htmlFor:"layer",children:"Sl\u0101nis"}),Object(o.jsxs)("select",{id:"layer",className:"form-select",value:t,onChange:a,children:[Object(o.jsx)("option",{value:"total",children:"Kop\u0113ja b\u012bstam\u012bba"}),Object(o.jsx)("option",{value:"ignition",children:"Ugunsgr\u0113ka izc\u0113l\u0161an\u0101s b\u012bstam\u012bba"}),Object(o.jsx)("option",{value:"spread",children:"Ugunsgr\u0113ka izplat\u012bbas b\u012bstam\u012bba"})]})]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("label",{htmlFor:"method",children:"Metode"}),Object(o.jsxs)("select",{id:"method",className:"form-select",value:s,onChange:r,children:[Object(o.jsx)("option",{value:"jac",children:"JAC"}),Object(o.jsx)("option",{value:"ahp",children:"AHP"}),Object(o.jsx)("option",{value:"mlc",children:"MLC"})]})]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsxs)("label",{htmlFor:"index",className:"form-label",children:["Datums un laiks: ",c]}),Object(o.jsx)("input",{type:"range",className:"form-range",id:"index",min:l,max:i,step:1,value:j,onChange:d})]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("label",{htmlFor:"period",className:"form-label",children:"Periods"}),Object(o.jsxs)("select",{id:"period",className:"form-select",value:p,onChange:function(e){var t=e.target.value,a=Math.floor(Date.now()/1e3);b(a-v[t]),h(a),x(t)},children:[Object(o.jsx)("option",{value:"1h",children:"p\u0113d\u0113j\u0101 1h"}),Object(o.jsx)("option",{value:"4h",children:"p\u0113d\u0113j\u0101s 4h"}),Object(o.jsx)("option",{value:"12h",children:"p\u0113d\u0113j\u0101s 12h"}),Object(o.jsx)("option",{value:"24h",children:"p\u0113d\u0113j\u0101s 24h"}),Object(o.jsx)("option",{value:"2d",children:"p\u0113d\u0113j\u0101s 2d"}),Object(o.jsx)("option",{value:"7d",children:"p\u0113d\u0113j\u0101s 7d"})]})]})]})},g=function(){return Math.floor(Date.now()/1e3)},f="http://20.113.89.5:8080",N=function(){var e=Object(n.useState)(g()-172800),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(g()),c=Object(u.a)(r,2),l=c[0],i=c[1],j=Object(n.useState)(0),d=Object(u.a)(j,2),h=d[0],m=d[1],O=Object(n.useState)("ignition"),N=Object(u.a)(O,2),y=N[0],S=N[1],k=Object(n.useState)("jac"),w=Object(u.a)(k,2),C=w[0],F=w[1],M=p({method:"GET",url:f+"/api/get/period",urlParams:{from:a,to:l}}),T=Object(u.a)(M,3),P=T[0],L=T[1],I=T[2];if(L)return Object(o.jsx)(b,{});if(I)return Object(o.jsx)("div",{children:"Notikusi k\u013c\u016bda..."});var z=function(){if(y&&P&&C){if(console.log(y,C),0===P.layersets.length)return"no-layers";var e=P.layersets[parseInt(h)].layers[y].filter((function(e){return console.log(e),e.method===C}));return e.length>0?f+e[0].geojson_url:"not-found"}return null}();return P?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)(v,{setPeriodFrom:s,setPeriodTo:i,indexFrom:0,indexTo:P.layersets.length-1,index:h,setIndex:function(e){return m(e.target.value)},layer:y,setLayer:function(e){return S(e.target.value)},method:C,setMethod:function(e){return F(e.target.value)},selectedTime:P.layersets.length>0?new Date(P.layersets[parseInt(h)].date).toLocaleString("lv"):"nav sl\u0101\u0146u"})}),Object(o.jsx)("div",{className:"col-md-8",children:function(){switch(z){case"no-layers":return Object(o.jsx)("div",{children:"Nav atrasti sl\u0101\u0146i \u0161\u012bm laika periodam"});case"not-found":return Object(o.jsx)("div",{children:"Slanis ar izv\u0113l\u0113tajiem parametriem nav atrasts!"});default:return Object(o.jsx)(x,{geojsonUrl:z})}}()})]}):Object(o.jsx)("div",{})},y=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)("div",{className:"container mb-3",children:Object(o.jsx)(j,{})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/map/now",children:Object(o.jsx)(N,{})}),Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(d,{})})]})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.93d3b261.chunk.js.map