(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cf294":"97cf59c0","chunk-2d22d746":"295a29a4","chunk-5b5ea52b":"aec71bbb","chunk-70b3e724":"33a64a47","chunk-c2d3720a":"6b8fef14"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5b5ea52b":1,"chunk-70b3e724":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cf294":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-5b5ea52b":"b73df7da","chunk-70b3e724":"4eb99c39","chunk-c2d3720a":"31d6cfe0"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c74":function(e,t,n){"use strict";n("b5fa")},"24c5":function(e,t,n){"use strict";n("37c6")},"37c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("3fd4");n("7dd6");function c(e,t,n,o,c,a){var i=Object(r["M"])("router-view");return Object(r["D"])(),Object(r["i"])("div",{id:"nav",class:1==c.isPc?"min1366":""},[Object(r["m"])(i)],2)}var a={data:function(){return{isPc:sessionStorage.getItem("isPc")}}};n("1c74");a.render=c;var i=a,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s=n("cf1c"),d=n.n(s),f=Object(r["fb"])("data-v-d9714f36");Object(r["G"])("data-v-d9714f36");var l={class:"loadingTemplate"},p=Object(r["m"])("img",{src:d.a,class:"loadingImg"},null,-1);Object(r["E"])();var h=f((function(e,t,n,o,c,a){var i=Object(r["M"])("el-progress");return Object(r["D"])(),Object(r["i"])("div",l,[p,Object(r["m"])(i,{class:"progress",percentage:c.progressConfig.percentage,"stroke-width":c.progressConfig.strokeWidth,"show-text":c.progressConfig.showText},null,8,["percentage","stroke-width","show-text"])])})),b=(n("ac1f"),n("466d"),{data:function(){return{progressConfig:{percentage:0,strokeWidth:18,showText:!1}}},methods:{loading:function(){var e=this;setTimeout((function(){e.progressConfig.percentage>=100||(e.progressConfig.percentage++,e.loading())}),30)},equipmentMonitoring:function(){var e=this;sessionStorage.getItem("isPc")?this.$router.push("/home"):(this.loading(),setTimeout((function(){navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?sessionStorage.setItem("isPc",2):sessionStorage.setItem("isPc",1),e.$router.push("/home")}),4e3))}},mounted:function(){this.equipmentMonitoring()}});n("24c5");b.render=h,b.__scopeId="data-v-d9714f36";var g=b,m=[{path:"/",name:"Loading",component:g},{path:"/home",name:"Home",component:function(){return n.e("chunk-5b5ea52b").then(n.bind(null,"bb51"))}},{path:"/notes",name:"Notes",component:function(){return n.e("chunk-70b3e724").then(n.bind(null,"0841"))}},{path:"/daily",name:"Daily",component:function(){return n.e("chunk-2d0cf294").then(n.bind(null,"6312"))}},{path:"/pageDetail",name:"PageDetail",component:function(){return n.e("chunk-c2d3720a").then(n.bind(null,"d632"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],v=Object(u["a"])({history:Object(u["b"])("/"),routes:m}),y=v,k=(n("845f"),Object(r["h"])(i).use(y));k.use(o["a"]),k.mount("#app")},"845f":function(e,t,n){},b5fa:function(e,t,n){},cf1c:function(e,t,n){e.exports=n.p+"img/loading.caf91ec5.gif"}});
//# sourceMappingURL=app.76bbe27b.js.map