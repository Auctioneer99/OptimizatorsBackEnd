(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d580dd4"],{"09d3":function(t,e,c){},c66d:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),b=Object(n["F"])("data-v-0c154db4");Object(n["r"])("data-v-0c154db4");var u={class:"flex"},a={class:"UserInfo"},l=Object(n["f"])("h3",null,"Данные игрока",-1),j=Object(n["f"])("br",null,null,-1),O=Object(n["f"])("br",null,null,-1),d={class:"GamesInfo"},r=Object(n["f"])("h1",null,"Сохраненные игры",-1),f={border:"1"},o=Object(n["f"])("thead",null,[Object(n["f"])("td",null,"Номер"),Object(n["f"])("td",null,"Название"),Object(n["f"])("td",null,"Описание"),Object(n["f"])("td",null,"Дата создания"),Object(n["f"])("td",null,"Дата изменения"),Object(n["f"])("td"),Object(n["f"])("td"),Object(n["f"])("td"),Object(n["f"])("td")],-1),s=Object(n["f"])("td",null,[Object(n["f"])("input",{type:"button",value:"Загрузить"})],-1),i=Object(n["f"])("td",null,[Object(n["f"])("input",{type:"button",value:"Удалить"})],-1),p=Object(n["f"])("td",null,[Object(n["f"])("input",{type:"button",value:"Изменить"})],-1),h=Object(n["f"])("input",{type:"button",value:"Доп. инфо"},null,-1);Object(n["p"])();var v=b((function(t,e,c,b,v,m){return Object(n["o"])(),Object(n["d"])("div",u,[Object(n["f"])("div",a,[l,Object(n["e"])(" Логин: "+Object(n["y"])(v.User.login),1),j,Object(n["e"])(" Почта: "+Object(n["y"])(v.User.email),1),O]),Object(n["f"])("div",d,[r,Object(n["f"])("table",f,[o,(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(v.Games,(function(t,e){return Object(n["o"])(),Object(n["d"])("tr",{key:e},[Object(n["f"])("td",null,Object(n["y"])(t._id),1),Object(n["f"])("td",null,Object(n["y"])(t.gameState[2]),1),Object(n["f"])("td",null,Object(n["y"])(t.gameState[3]),1),Object(n["f"])("td",null,Object(n["y"])(t.createdAt),1),Object(n["f"])("td",null,Object(n["y"])(t.updatedAt),1),s,i,p,h])})),128))])])])})),m=c("1da1"),y=c("5530"),g=(c("96cf"),c("5502")),w=c("bc3a"),k=c.n(w),U={data:function(){return{User:{},Games:{}}},methods:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(g["b"])("auth",["login"])),Object(g["b"])("auth",["logout"])),Object(g["c"])("auth",["isAuthenticated"])),beforeMount:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k()("https://optimizators.herokuapp.com/user/",{method:"post"});case 2:c=e.sent,t.User=c.data.user,t.Games=c.data.games,console.log(c);case 6:case"end":return e.stop()}}),e)})))()}};c("eb76");U.render=v,U.__scopeId="data-v-0c154db4";e["default"]=U},eb76:function(t,e,c){"use strict";c("09d3")}}]);
//# sourceMappingURL=chunk-8d580dd4.49b566dd.js.map