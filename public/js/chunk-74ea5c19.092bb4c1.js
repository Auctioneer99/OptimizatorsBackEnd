(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74ea5c19"],{"9c8c":function(t,a,e){"use strict";e("a926")},a926:function(t,a,e){},c66d:function(t,a,e){"use strict";e.r(a);var d=e("7a23"),c=Object(d["G"])("data-v-17cf5db2");Object(d["s"])("data-v-17cf5db2");var b={class:"flex"},n={class:"UserInfo"},r=Object(d["g"])("h3",null,"Данные игрока",-1),u=Object(d["g"])("br",null,null,-1),f=Object(d["g"])("br",null,null,-1),s=Object(d["g"])("br",null,null,-1),o=Object(d["e"])('<div class="GamesInfo" data-v-17cf5db2><h1 data-v-17cf5db2>Сохраненные игры</h1><table border="1" data-v-17cf5db2><thead data-v-17cf5db2><td data-v-17cf5db2>Номер</td><td data-v-17cf5db2>Название</td><td data-v-17cf5db2>Описание</td><td data-v-17cf5db2></td><td data-v-17cf5db2></td></thead><tr data-v-17cf5db2><td data-v-17cf5db2><input type="text" data-v-17cf5db2></td><td data-v-17cf5db2><input type="text" data-v-17cf5db2></td><td data-v-17cf5db2><input type="text" data-v-17cf5db2></td><td data-v-17cf5db2><input type="button" value="Загрузить" data-v-17cf5db2></td><td data-v-17cf5db2><input type="button" value="Сохранить" data-v-17cf5db2></td></tr></table></div>',1);Object(d["q"])();var v=c((function(t,a,e,c,v,i){return Object(d["p"])(),Object(d["d"])("div",b,[Object(d["g"])("div",n,[r,Object(d["f"])(" Id: "+Object(d["z"])(v.User.id),1),u,Object(d["f"])(" Логин: "+Object(d["z"])(v.User.login),1),f,Object(d["f"])(" Почта: "+Object(d["z"])(v.User.email),1),s]),o])})),i=e("1da1"),l=e("5530"),j=(e("96cf"),e("5502")),O=e("bc3a"),p=e.n(O),h={data:function(){return{User:{}}},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(j["b"])("auth",["login"])),Object(j["b"])("auth",["logout"])),Object(j["c"])("auth",["isAuthenticated"])),beforeMount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,p()("http://localhost:2500/user/",{method:"post"});case 2:e=a.sent,t.User=e.data.user,console.log(e);case 5:case"end":return a.stop()}}),a)})))()}};e("9c8c");h.render=v,h.__scopeId="data-v-17cf5db2";a["default"]=h}}]);
//# sourceMappingURL=chunk-74ea5c19.092bb4c1.js.map