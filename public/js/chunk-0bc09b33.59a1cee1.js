(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc09b33"],{"12c5":function(e,t,n){"use strict";n("c3c5")},"73cf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["f"])("h1",null,"Регистрация",-1),i=Object(r["f"])("label",{for:"login"},"Логин",-1),u=Object(r["f"])("label",{for:"email"},"E-Mail",-1),c=Object(r["f"])("label",{for:"password"},"Пароль",-1),a=Object(r["f"])("label",{for:"password-confirm"},"Подтвердите пароль",-1),l=Object(r["f"])("div",null,[Object(r["f"])("button",{type:"submit",class:"game_button_add"},"Зарегистрироваться")],-1);function s(e,t,n,s,d,f){return Object(r["o"])(),Object(r["d"])("div",null,[o,Object(r["f"])("form",{onSubmit:t[5]||(t[5]=Object(r["E"])((function(e){return f.registerVue()}),["prevent"]))},[i,Object(r["f"])("div",null,[Object(r["D"])(Object(r["f"])("input",{id:"login",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.newUser.login=e}),required:"",autofocus:"",minlength:"6"},null,512),[[r["A"],d.newUser.login]])]),u,Object(r["f"])("div",null,[Object(r["D"])(Object(r["f"])("input",{id:"email",type:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.newUser.email=e}),required:""},null,512),[[r["A"],d.newUser.email]])]),c,Object(r["f"])("div",null,[Object(r["D"])(Object(r["f"])("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.newUser.password=e}),required:"",minlength:"6"},null,512),[[r["A"],d.newUser.password]])]),a,Object(r["f"])("div",null,[Object(r["D"])(Object(r["f"])("input",{id:"password-confirm",type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return d.password_confirmation=e}),required:"",minlength:"6"},null,512),[[r["A"],d.password_confirmation]])]),l],32)])}var d=n("1da1"),f=n("5530"),b=(n("96cf"),n("5502")),p={computed:Object(b["d"])({email:function(e){return e.auth.email},role:function(e){return e.auth.userRole}}),data:function(){return{newUser:{email:"",login:"",password:""},password_confirmation:""}},methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(b["b"])("auth",["register","logout","login"])),Object(b["c"])("auth",["isAuthenticated"])),{},{registerVue:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.newUser.password==e.password_confirmation){t.next=3;break}return window.alert("Пароли не совпадают"),t.abrupt("return");case 3:return t.next=5,e.register(e.newUser);case 5:e.$router.push("/profile");case 6:case"end":return t.stop()}}),t)})))()},logOut:function(){this.logout()}})};n("12c5");p.render=s;t["default"]=p},c3c5:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0bc09b33.59a1cee1.js.map