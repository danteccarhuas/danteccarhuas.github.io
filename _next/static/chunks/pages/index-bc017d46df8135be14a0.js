_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,c){"use strict";c.r(t);var s=c("o0o1"),n=c.n(s);function i(e,t,c,s,n,i,r){try{var a=e[i](r),o=a.value}catch(l){return void c(l)}a.done?t(o):Promise.resolve(o).then(s,n)}function r(e){return function(){var t=this,c=arguments;return new Promise((function(s,n){var r=e.apply(t,c);function a(e){i(r,s,n,a,o,"next",e)}function o(e){i(r,s,n,a,o,"throw",e)}a(void 0)}))}}var a=c("nKUr"),o=c("pJ0N"),l=function(e){var t=e.precio,c=t.last,s=t.buy,n=t.sell,i=e.precio["15m"];return Object(a.jsxs)("div",{className:"card text-white bg-success mb-3",children:[Object(a.jsx)("div",{className:"card-header",children:"Precio del Bitcoin"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h4",{className:"card-title",children:["Precio Actual : $ ",c]}),Object(a.jsxs)("div",{className:"d-md-flex justify-content-between",children:[Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"\xdaltima Hora: "}),s," %"]}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"\xdaltimas 24 horas:"}),n," %"]}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"\xdaltimos 7 D\xedas: "}),i," %"]})]})]})]})},d=function(e){var t,c=e.noticia,s=c.urlToImage,n=c.url,i=c.title,r=c.description,o=c.source;return t=""!==s?Object(a.jsx)("img",{src:s,alt:i,className:"card-img-top"}):Object(a.jsx)("p",{className:"text-center my-5",children:"Imgen No Disponible"}),Object(a.jsx)("div",{className:"col-md-6 col-12  mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:t}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"card-title",children:i}),Object(a.jsx)("p",{className:"card-text",children:r}),Object(a.jsx)("p",{className:"card-text",children:o.name}),Object(a.jsx)("a",{href:n,target:"_blank",className:"btn btn-success d-block",children:"Leer Noticia"})]})]})})},j=function(e){return Object(a.jsx)("div",{className:"row",children:e.noticias.map((function(e){return Object(a.jsx)(d,{noticia:e},e.url)}))})},b=c("vcXL"),u=c.n(b),h=function(e){var t=e.info,c=t.name,s=t.url,n=t.description,i=c.text;i.length>150&&(i=i.substr(0,150)+"...");var r=n.text;return r&&(r=r.substr(0,250)+"..."),Object(a.jsxs)("a",{href:s,target:"_blank",className:"list-group-item active text-light mb-1",children:[Object(a.jsx)("h3",{className:"mb-3",children:i}),Object(a.jsx)("p",{className:"mb-1",children:r})]})},m=function(e){var t=Object.keys(e.eventos);return console.log(t),Object(a.jsx)("div",{className:"list-group",children:t.map((function(t){return Object(a.jsx)(h,{info:e.eventos[t]},t)}))})},x=function(e){return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h2",{children:"Precio del bitcoin"}),Object(a.jsx)(l,{precio:e.precioBitcoin})]}),Object(a.jsxs)("div",{className:"col-md-8",children:[Object(a.jsx)("h2",{className:"my-4",children:"Noticias sobre bitcoin"}),Object(a.jsx)(j,{noticias:e.noticias})]}),Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("h2",{className:"my-4",children:"Proximos Eventos bitcoin"}),Object(a.jsx)(m,{eventos:e.eventos})]})]})})};x.getInitialProps=r(n.a.mark((function e(){var t,c,s,i,r,a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://blockchain.info/ticker");case 2:return t=e.sent,e.next=5,u()("http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=54f6bf7ecf0443518b4f200a0f7dd015&language=es");case 5:return c=e.sent,e.next=8,u()("https://www.eventbriteapi.com/v3/series/15241955098/?tracking_code=5YVCT65EX3I22YHEHF73&token=5YVCT65EX3I22YHEHF73");case 8:return s=e.sent,e.next=11,t.json();case 11:return i=e.sent,e.next=14,c.json();case 14:return r=e.sent,e.next=17,s.json();case 17:return a=e.sent,(o=[]).push(a),e.abrupt("return",{precioBitcoin:i.USD,noticias:r.articles,eventos:o});case 21:case"end":return e.stop()}}),e)})));t.default=x},vcXL:function(e,t,c){"use strict";var s=self.fetch.bind(self);e.exports=s,e.exports.default=e.exports},vlRD:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c("RNiq")}])}},[["vlRD",0,2,1,3]]]);