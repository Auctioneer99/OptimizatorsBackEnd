(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03e7c273"],{"4f39":function(e,t,n){"use strict";n("d4b5")},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["h"])("h1",null,"Вход",-1),c=Object(o["h"])("label",null,"Email",-1),l=Object(o["h"])("br",null,null,-1),a=Object(o["h"])("label",null,"Пароль",-1),u=Object(o["h"])("br",null,null,-1),s=Object(o["h"])("button",{type:"submit",class:"game_button_add"},"Войти",-1);function i(e,t,n,i,b,d){return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("form",{class:"login",onSubmit:t[3]||(t[3]=Object(o["G"])((function(e){return d.logIn()}),["prevent"]))},[r,c,Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.User.email=e}),type:"email","aria-describedby":"emailHelp",placeholder:"test@gmail.com"},null,512),[[o["C"],b.User.email]]),l,a,Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.User.password=e}),type:"password",placeholder:"Pa$$w0rd"},null,512),[[o["C"],b.User.password]]),u,s],32)])}var b=n("1da1"),d=n("5530"),h=(n("96cf"),n("bc3a")),p=n.n(h),m=n("5502"),O={computed:Object(m["d"])({email:function(e){return e.auth.email},role:function(e){return e.auth.userRole}}),data:function(){return{User:{email:"",password:""},StoreUser:{email:"",role:""}}},methods:Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(m["b"])("auth",["login"])),Object(m["b"])("auth",["logout"])),Object(m["c"])("auth",["isAuthenticated"])),{},{logIn:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p()("https://optimizators.herokuapp.com/auth/login",{method:"post",withCredentials:!0,headers:{"Access-Control-Allow-Credentials":!0},data:e.User});case 3:n=t.sent,console.log(n),console.log(document.cookie),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.response),console.log(document.cookie);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},logOut:function(){this.logout()}})};n("4f39");O.render=i;t["default"]=O},d4b5:function(e,t,n){}}]);
//# sourceMappingURL=chunk-03e7c273.38fd75f5.js.map