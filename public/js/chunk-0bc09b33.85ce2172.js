(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc09b33"],{"12c5":function(e,t,n){"use strict";n("c3c5")},"73cf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i=Object(r["g"])("h1",null,"Регистрация",-1),o=Object(r["g"])("label",{for:"login"},"Логин",-1),u=Object(r["g"])("label",{for:"email"},"E-Mail",-1),c=Object(r["g"])("label",{for:"password"},"Пароль",-1),a=Object(r["g"])("label",{for:"password-confirm"},"Подтвердите пароль",-1),l=Object(r["g"])("div",null,[Object(r["g"])("button",{type:"submit",class:"game_button_add"},"Зарегистрироваться")],-1);function s(e,t,n,s,d,b){return Object(r["p"])(),Object(r["d"])("div",null,[i,Object(r["g"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(e){return b.registerVue()}),["prevent"]))},[o,Object(r["g"])("div",null,[Object(r["E"])(Object(r["g"])("input",{id:"login",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.newUser.login=e}),required:"",autofocus:"",minlength:"6"},null,512),[[r["B"],d.newUser.login]])]),u,Object(r["g"])("div",null,[Object(r["E"])(Object(r["g"])("input",{id:"email",type:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.newUser.email=e}),required:""},null,512),[[r["B"],d.newUser.email]])]),c,Object(r["g"])("div",null,[Object(r["E"])(Object(r["g"])("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.newUser.password=e}),required:"",minlength:"6"},null,512),[[r["B"],d.newUser.password]])]),a,Object(r["g"])("div",null,[Object(r["E"])(Object(r["g"])("input",{id:"password-confirm",type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return d.password_confirmation=e}),required:"",minlength:"6"},null,512),[[r["B"],d.password_confirmation]])]),l],32)])}var d=n("1da1"),b=n("5530"),p=(n("96cf"),n("5502")),g={computed:Object(p["d"])({email:function(e){return e.auth.email},role:function(e){return e.auth.userRole}}),data:function(){return{newUser:{email:"",login:"",password:""},password_confirmation:""}},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(p["b"])("auth",["register","logout","login"])),Object(p["c"])("auth",["isAuthenticated"])),{},{registerVue:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.newUser.password==e.password_confirmation){t.next=3;break}return window.alert("Пароли не совпадают"),t.abrupt("return");case 3:return t.next=5,e.register(e.newUser);case 5:e.$router.push("/profile");case 6:case"end":return t.stop()}}),t)})))()},logOut:function(){this.logout()}})};n("12c5");g.render=s;t["default"]=g},c3c5:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0bc09b33.85ce2172.js.map