(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559754e1"],{"55b0":function(t,e,n){},"7d36":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),l=n("ffb4"),a=n.n(l),u=n("8bb1"),b=n.n(u),s={class:"game"},o={class:"leftCol"},j=Object(c["h"])("h3",null,"Команды",-1),O=Object(c["h"])("br",null,null,-1),i={class:"team"},r=Object(c["h"])("br",null,null,-1),d=Object(c["g"])(" Ресурсы:"),h=Object(c["h"])("br",null,null,-1),m=Object(c["g"])(" ResourceName: Count"),p=Object(c["h"])("br",null,null,-1),f=Object(c["h"])("input",{type:"button",value:"Присоединиться к команде",class:"game_button_add"},null,-1),_={class:"midCol"},g=Object(c["h"])("input",{type:"button",value:"Сохранить настройки",class:"game_button_save"},null,-1),v=Object(c["h"])("h3",null,'Города ("Эталон")',-1),k=Object(c["h"])("br",null,null,-1),w=Object(c["h"])("input",{type:"text",placeholder:"Объем рынка"},null,-1),x={border:"1"},y=Object(c["h"])("input",{type:"text"},null,-1),C={class:"rightCol"},T=Object(c["h"])("li",null,[Object(c["h"])("img",{src:a.a,alt:"",class:"navImg"}),Object(c["h"])("span",{class:"tooltip_text"},"Города")],-1),q=Object(c["h"])("br",null,null,-1),A=Object(c["h"])("li",null,[Object(c["h"])("img",{src:b.a,alt:"",class:"navImg"}),Object(c["h"])("span",{class:"tooltip_text"},"Материалы")],-1),E=Object(c["h"])("br",null,null,-1);function R(t,e,n,l,a,u){var b=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",s,[Object(c["h"])("div",o,[j,Object(c["F"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.newTeam.nickname=t}),placeholder:"Название",class:"textbox_teams"},null,512),[[c["C"],a.newTeam.nickname]]),Object(c["F"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.newTeam.balance=t}),placeholder:"Баланс",class:"textbox_teams"},null,512),[[c["C"],a.newTeam.balance]]),O,Object(c["h"])("input",{type:"button",value:"Создать команду",onClick:e[3]||(e[3]=function(t){return u.teamAdder(a.newTeam)}),class:"game_button_add"}),Object(c["h"])("input",{type:"button",value:"Очистить команды",onClick:e[4]||(e[4]=function(e){return t.clearTeams()}),class:"game_button_delete"}),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(t.teams,(function(t){return Object(c["q"])(),Object(c["d"])("div",{key:t.nickname},[Object(c["h"])(b,{to:"/team1",class:"team_link"},{default:Object(c["E"])((function(){return[Object(c["h"])("h4",null,Object(c["A"])(t.nickname),1)]})),_:2},1024),Object(c["h"])("div",i,[Object(c["g"])(" Баланс:"+Object(c["A"])(t.balance),1),r,d,h,m,p,f])])})),128))]),Object(c["h"])("div",_,[g,Object(c["h"])("h1",null,"Раунд "+Object(c["A"])(a.count),1),Object(c["h"])("input",{type:"button",value:"Следующий раунд",onClick:e[5]||(e[5]=function(t){return u.nextRound()}),class:"game_button_add"}),v,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(a.tables,(function(t){return Object(c["q"])(),Object(c["d"])("div",{key:t},[Object(c["h"])("input",{type:"button",value:"Добавить колонку",onClick:e[6]||(e[6]=function(t){return a.columns.push("")}),class:"game_button_add"}),Object(c["h"])("input",{type:"button",value:"Добавить строку",onClick:e[7]||(e[7]=function(t){return a.rows.push("")}),class:"game_button_add"}),k,w,Object(c["h"])("table",x,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(a.rows,(function(t){return Object(c["q"])(),Object(c["d"])("tr",{key:t},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(a.columns,(function(t){return Object(c["q"])(),Object(c["d"])("td",{key:t},[y])})),128))])})),128))])])})),128))]),Object(c["h"])("div",C,[Object(c["h"])("ul",null,[Object(c["h"])(b,{to:"/game",class:"nav_src"},{default:Object(c["E"])((function(){return[T,q]})),_:1}),Object(c["h"])(b,{to:"/materials",class:"nav_src"},{default:Object(c["E"])((function(){return[A,E]})),_:1})])])])}var F=n("5530"),I=n("5502"),J={computed:Object(I["d"])({teams:function(t){return t.team.teams}}),data:function(){return{count:1,banks:!1,newTeam:{nickname:"",balance:""},rows:[{}],columns:[],tables:[{}]}},methods:Object(F["a"])(Object(F["a"])(Object(F["a"])({},Object(I["b"])("team",["addTeam"])),Object(I["b"])("team",["clearTeams"])),{},{teamAdder:function(t){this.addTeam(t),this.newTeam={}},nextRound:function(){this.count++,this.tables.push(""),this.banks=!0}})};n("c2e5");J.render=R;e["default"]=J},"8bb1":function(t,e,n){t.exports=n.p+"img/gear.33eb5c34.png"},c2e5:function(t,e,n){"use strict";n("55b0")},ffb4:function(t,e,n){t.exports=n.p+"img/loc.6c01d41d.png"}}]);
//# sourceMappingURL=chunk-559754e1.c2fe4481.js.map