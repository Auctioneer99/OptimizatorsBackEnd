(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b17dc16":"68279244","chunk-0bc09b33":"85ce2172","chunk-25576e6c":"9d3b5b18","chunk-2d21a3d2":"04b6b37f","chunk-3ea69fc8":"d37a43d4","chunk-e419878a":"ec49b570","chunk-edb2310c":"97149fc4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0b17dc16":1,"chunk-0bc09b33":1,"chunk-25576e6c":1,"chunk-3ea69fc8":1,"chunk-e419878a":1,"chunk-edb2310c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b17dc16":"c0f8ffba","chunk-0bc09b33":"0424bd23","chunk-25576e6c":"a88c60e3","chunk-2d21a3d2":"31d6cfe0","chunk-3ea69fc8":"0424bd23","chunk-e419878a":"15f30428","chunk-edb2310c":"070793d1"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"153d":function(e,t,n){},"3e5a":function(e,t,n){"use strict";n("153d")},"50c0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function c(e,t,n,c,u,o){var i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",a,[(Object(r["p"])(),Object(r["d"])(Object(r["x"])(o.layout),null,{default:Object(r["D"])((function(){return[Object(r["g"])(i)]})),_:1}))])}var u={class:"header"},o=Object(r["g"])("a",null,"Вход",-1),i=Object(r["g"])("a",null,"Регистрация",-1),s=Object(r["g"])("a",null,"Главная",-1);function l(e,t,n,a,c,l){var f=Object(r["w"])("router-link"),d=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",u,[l.isAuthenticated?(Object(r["p"])(),Object(r["d"])(r["a"],{key:0},[Object(r["g"])("a",{href:"",class:"right",onClick:t[1]||(t[1]=function(e){return l.logOut()})},"Выйти"),Object(r["g"])(f,{class:"right",to:"/profile"},{default:Object(r["D"])((function(){return[Object(r["g"])("a",null,Object(r["z"])(l.user.login),1)]})),_:1})],64)):(Object(r["p"])(),Object(r["d"])(r["a"],{key:1},[Object(r["g"])(f,{class:"right",to:"/login"},{default:Object(r["D"])((function(){return[o]})),_:1}),Object(r["g"])(f,{class:"right",to:"/register"},{default:Object(r["D"])((function(){return[i]})),_:1})],64)),Object(r["g"])(f,{class:"right",to:"/"},{default:Object(r["D"])((function(){return[s]})),_:1})]),Object(r["g"])(d)],64)}var f=n("1da1"),d=n("5530"),m=(n("96cf"),n("5502")),p={computed:{isAuthenticated:function(){return null!=this.user},user:function(){return this.$store.state.auth.user}},methods:Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(m["b"])("auth",["updateUser"])),Object(m["b"])("auth",["logout"])),{},{logOut:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}),beforeMount:function(){this.updateUser()}};n("9b2d");p.render=l;var h=p,b={isAuthenticated:function(e){return null!=e.user},getUserId:function(e){return e.userId},getEmail:function(e){return e.user.email},getToken:function(e){return e.token},getRole:function(e){return e.userRole}},g=n("bc3a"),v=n.n(g),O="https://optimizators.herokuapp.com",j={updateUser:function(e){var t=e.commit;t("updateUser")},login:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v()(O+"/auth/login",{method:"post",data:t});case 3:r("updateUser");case 4:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v()(O+"/auth/logout",{method:"post"});case 3:n("updateUser");case 4:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,v()(O+"/auth/register",{method:"post",data:t});case 4:n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log(n.t0.response),console.log(n.t0);case 10:r("updateUser");case 11:case"end":return n.stop()}}),n,null,[[1,6]])})))()}},k=(n("ac1f"),n("1276"),{updateUser:function(e){try{var t=document.cookie.split(";")[0];if("Authorization"==t.split("=")[0]){var n=JSON.parse(atob(t.split("=")[1].split(".")[1]));e.user=n.user}else e.user=null}catch(r){e.user=null}}}),y={user:null},w={namespaced:!0,state:y,getters:b,actions:j,mutations:k},T={getTeams:function(e){return e.teams}},S={addTeam:function(e,t){var n=e.commit;n("addTeam",t)},clearTeams:function(e){var t=e.commit;t("clearTeams")}},R=(n("a434"),{addTeam:function(e,t){e.teams.push(t),localStorage.setItem("teams",JSON.stringify(e.teams))},clearTeams:function(e){e.teams.splice(0),localStorage.removeItem("teams")}}),_={teams:JSON.parse(localStorage.getItem("teams"))||[]},x={namespaced:!0,state:_,getters:T,actions:S,mutations:R},M={getRefTable:function(e){return e.ref_table_1}},A={addRefTable:function(e,t){var n=e.commit;n("addRefTable",t)},clearRefTable:function(e){var t=e.commit;t("clearRefTable")},addMaterial:function(e,t){var n=e.commit;n("addMaterial",t)},clearMaterials:function(e){var t=e.commit;t("clearMaterials")}},E={addRefTable:function(e,t){e.ref_table_1.push(t),localStorage.setItem("RT1",JSON.stringify(e.ref_table_1))},clearRefTable:function(e){e.ref_table_1.splice(0),localStorage.removeItem("RT1")},addMaterial:function(e,t){e.materials.push(t),localStorage.setItem("MT",JSON.stringify(e.materials))},clearMaterials:function(e){e.materials.splice(0),localStorage.removeItem("RT1")}},I={id:"",name:"",description:"",data:[],user:{email:""},createdAt:"",updatedAt:"",ref_table_1:JSON.parse(localStorage.getItem("RT1"))||[],materials:JSON.parse(localStorage.getItem("MT"))||[]},N={namespaced:!0,state:I,getters:M,actions:A,mutations:E},P=new m["a"].Store({modules:{auth:w,team:x,settings:N}}),U=P,C={computed:{teams:function(){return U.state.teams},layout:function(){return"Layout"}},components:{Layout:h}};n("3e5a");C.render=c;var J=C,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),D=[{path:"/",name:"Home",meta:{layout:"Layout"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/game",name:"Game",component:function(){return n.e("chunk-edb2310c").then(n.bind(null,"7d36"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-3ea69fc8").then(n.bind(null,"a55b"))}},{path:"/register",name:"Reister",component:function(){return n.e("chunk-0bc09b33").then(n.bind(null,"73cf"))}},{path:"/materials",name:"Materials",component:function(){return n.e("chunk-0b17dc16").then(n.bind(null,"74c7"))}},{path:"/team1",name:"Team1",component:function(){return n.e("chunk-e419878a").then(n.bind(null,"f5d3"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-25576e6c").then(n.bind(null,"c66d"))},beforeEnter:function(e,t,n){return B(e,t,n)}}],z=Object(L["a"])({history:Object(L["b"])("/"),routes:D});function B(e,t,n){return q.apply(this,arguments)}function q(){return q=Object(f["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null==U.state.auth.user?r({path:"/login"}):r();case 1:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}z.beforeEach((function(e,t,n){U.commit("auth/updateUser"),n()}));var H=z;v.a.defaults.withCredentials=!0,Object(r["c"])(J).use(U).use(H).mount("#app")},"9b2d":function(e,t,n){"use strict";n("50c0")}});
//# sourceMappingURL=app.55206916.js.map