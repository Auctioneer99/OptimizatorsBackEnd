(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-14a21735":"c565efc5","chunk-1efa6b80":"27586361","chunk-2d21a3d2":"ce35aff0","chunk-2f243183":"87e33914","chunk-03e7c273":"38fd75f5","chunk-75839cc8":"292ddef1","chunk-559754e1":"c2fe4481","chunk-a62a9c0e":"2e131d8c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-14a21735":1,"chunk-1efa6b80":1,"chunk-03e7c273":1,"chunk-75839cc8":1,"chunk-559754e1":1,"chunk-a62a9c0e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-14a21735":"3c2c8b04","chunk-1efa6b80":"d17f3c40","chunk-2d21a3d2":"31d6cfe0","chunk-2f243183":"31d6cfe0","chunk-03e7c273":"0424bd23","chunk-75839cc8":"0424bd23","chunk-559754e1":"3c2c8b04","chunk-a62a9c0e":"3c2c8b04"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2bf8":function(e,t){},"3e5a":function(e,t,n){"use strict";n("8b8d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function c(e,t,n,c,o,u){var i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[(Object(r["q"])(),Object(r["d"])(Object(r["y"])(u.layout),null,{default:Object(r["E"])((function(){return[Object(r["h"])(i)]})),_:1}))])}var o={class:"header"},u=Object(r["h"])("a",null,"Вход",-1),i=Object(r["h"])("a",null,"Регистрация",-1),l=Object(r["h"])("a",null,"Главная",-1);function s(e,t,n,a,c,s){var f=Object(r["x"])("router-link"),d=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",o,[e.isAuthenticated()?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(f,{key:0,class:"right",to:"/login"},{default:Object(r["E"])((function(){return[u]})),_:1})),e.isAuthenticated()?(Object(r["q"])(),Object(r["d"])(f,{key:1,class:"right",to:"/login"},{default:Object(r["E"])((function(){return[Object(r["h"])("a",{onClick:t[1]||(t[1]=function(e){return s.logOut()})},"Выйти")]})),_:1})):Object(r["e"])("",!0),e.isAuthenticated()?(Object(r["q"])(),Object(r["d"])(f,{key:2,class:"right",to:"/profile"},{default:Object(r["E"])((function(){return[Object(r["h"])("a",null,Object(r["A"])(e.email),1)]})),_:1})):Object(r["e"])("",!0),e.isAuthenticated()?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(f,{key:3,class:"right",to:"/register"},{default:Object(r["E"])((function(){return[i]})),_:1})),Object(r["h"])(f,{class:"right",to:"/"},{default:Object(r["E"])((function(){return[l]})),_:1})]),Object(r["h"])(d)],64)}var f=n("5530"),d=n("5502"),m={computed:Object(d["d"])({email:function(e){return e.auth.email},role:function(e){return e.auth.userRole}}),data:function(){return{User:{email:"",password:""},StoreUser:{email:"",role:""}}},methods:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(d["b"])("auth",["login"])),Object(d["b"])("auth",["logout"])),Object(d["c"])("auth",["isAuthenticated"])),{},{logIn:function(){},logOut:function(){this.logout()}})};n("bf89");m.render=s;var h=m,b={isAuthenticated:function(e){return null!=e.email&&""!==e.email},getUserId:function(e){return e.userId},getEmail:function(e){return e.email},getToken:function(e){return e.token},getRole:function(e){return e.userRole}},p={login:function(e,t){var n=e.commit;n("auth_login",t)},logout:function(e){var t=e.commit;t("auth_logout")}},g={auth_login:function(e,t){localStorage.setItem("user-email",t.email),localStorage.setItem("user-role",t.role),e.userRole=t.role,e.email=t.email},auth_logout:function(e){e.email="",e.userRole="",localStorage.removeItem("user-email"),localStorage.removeItem("user-role")}},O={userRole:localStorage.getItem("user-role"),email:localStorage.getItem("user-email")||""},j={namespaced:!0,state:O,getters:b,actions:p,mutations:g},v={getTeams:function(e){return e.teams}},k={addTeam:function(e,t){var n=e.commit;n("addTeam",t),console.log("team",t)},clearTeams:function(e){var t=e.commit;t("clearTeams")}},y=(n("a434"),{addTeam:function(e,t){e.teams.push(t),localStorage.setItem("teams",JSON.stringify(e.teams))},clearTeams:function(e){e.teams.splice(0),localStorage.removeItem("teams")}}),S={teams:JSON.parse(localStorage.getItem("teams"))||[]},_={namespaced:!0,state:S,getters:v,actions:k,mutations:y},w=n("c9b8"),E=n.n(w),T=n("2bf8"),A=n.n(T),I=n("a039"),P=n.n(I),x={id:"",name:"",description:"",data:[{}],user:{email:""},createdAt:"",updatedAt:""},q={namespaced:!0,state:x,getters:E.a,actions:A.a,mutations:P.a},L=Object(d["a"])({modules:{auth:j,team:_,settings:q}}),C={computed:{teams:function(){return L.state.teams},layout:function(){return"Layout"}},components:{Layout:h}};n("3e5a");C.render=c;var N=C,R=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),M=[{path:"/",name:"Home",meta:{layout:"Layout"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/game",name:"Game",component:function(){return n.e("chunk-559754e1").then(n.bind(null,"7d36"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-2f243183"),n.e("chunk-03e7c273")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"Reister",component:function(){return Promise.all([n.e("chunk-2f243183"),n.e("chunk-75839cc8")]).then(n.bind(null,"73cf"))}},{path:"/materials",name:"Materials",component:function(){return n.e("chunk-a62a9c0e").then(n.bind(null,"74c7"))}},{path:"/team1",name:"Team1",component:function(){return n.e("chunk-14a21735").then(n.bind(null,"f5d3"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-1efa6b80").then(n.bind(null,"c66d"))}}],J=Object(R["a"])({history:Object(R["b"])("/"),routes:M}),U=J;Object(r["c"])(N).use(L).use(U).mount("#app")},"5d52":function(e,t,n){},"8b8d":function(e,t,n){},a039:function(e,t){},bf89:function(e,t,n){"use strict";n("5d52")},c9b8:function(e,t){}});
//# sourceMappingURL=app.b4416ad5.js.map