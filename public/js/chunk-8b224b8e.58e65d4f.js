(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b224b8e"],{"219e":function(t,e,n){"use strict";n("b05c")},"7d36":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=n("ffb4"),l=n.n(a),b=n("8bb1"),u=n.n(b),s={class:"game"},o={class:"leftCol"},r=Object(c["g"])("h3",null,"Команды",-1),i=Object(c["g"])("br",null,null,-1),j={class:"team"},O=Object(c["g"])("br",null,null,-1),d=Object(c["f"])(" Ресурсы:"),g=Object(c["g"])("br",null,null,-1),m=Object(c["f"])(" ResourceName: Count"),p=Object(c["g"])("br",null,null,-1),f=Object(c["g"])("input",{type:"button",value:"Присоединиться к команде",class:"game_button_add"},null,-1),_={class:"midCol"},v=Object(c["g"])("h3",null,'Города ("Эталон")',-1),h=Object(c["g"])("br",null,null,-1),k=Object(c["g"])("input",{type:"text",placeholder:"Объем рынка"},null,-1),y={border:"1",id:"ref_table"},w={key:0},T=Object(c["g"])("input",{type:"text"},null,-1),x={key:1},C={class:"rightCol"},R=Object(c["g"])("li",null,[Object(c["g"])("img",{src:l.a,alt:"",class:"navImg"}),Object(c["g"])("span",{class:"tooltip_text"},"Города")],-1),z=Object(c["g"])("br",null,null,-1),S=Object(c["g"])("li",null,[Object(c["g"])("img",{src:u.a,alt:"",class:"navImg"}),Object(c["g"])("span",{class:"tooltip_text"},"Материалы")],-1),B=Object(c["g"])("br",null,null,-1);function D(t,e,n,a,l,b){var u=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",s,[Object(c["g"])("div",o,[r,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.newTeam.nickname=t}),placeholder:"Название",class:"textbox_teams"},null,512),[[c["B"],l.newTeam.nickname]]),Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return l.newTeam.balance=t}),placeholder:"Баланс",class:"textbox_teams"},null,512),[[c["B"],l.newTeam.balance]]),i,Object(c["g"])("input",{type:"button",value:"Создать команду",onClick:e[3]||(e[3]=function(t){return b.teamAdder(l.newTeam)}),class:"game_button_add"}),Object(c["g"])("input",{type:"button",value:"Очистить команды",onClick:e[4]||(e[4]=function(e){return t.clearTeams()}),class:"game_button_delete"}),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(t.teams,(function(t){return Object(c["p"])(),Object(c["d"])("div",{key:t.nickname},[Object(c["g"])(u,{to:"/team1",class:"team_link"},{default:Object(c["D"])((function(){return[Object(c["g"])("h4",null,Object(c["z"])(t.nickname),1)]})),_:2},1024),Object(c["g"])("div",j,[Object(c["f"])(" Баланс:"+Object(c["z"])(t.balance),1),O,d,g,m,p,f])])})),128))]),Object(c["g"])("div",_,[Object(c["g"])("input",{type:"button",value:"Сохранить игру",class:"game_button_add",onClick:e[5]||(e[5]=function(t){return b.saveGame()})}),Object(c["g"])("input",{type:"button",value:"Сохранить настройки",class:"game_button_save",onClick:e[6]||(e[6]=function(t){return b.saveTable()})}),Object(c["g"])("input",{type:"button",value:"Удалить настройки",class:"game_button_delete",onClick:e[7]||(e[7]=function(e){return t.clearRefTable()})}),Object(c["g"])("h1",null,"Раунд "+Object(c["z"])(l.count),1),Object(c["g"])("input",{type:"button",value:"Следующий раунд",onClick:e[8]||(e[8]=function(t){return b.nextRound()}),class:"game_button_add"}),v,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(l.tables,(function(n){return Object(c["p"])(),Object(c["d"])("div",{key:n},[Object(c["g"])("input",{type:"button",value:"Добавить колонку",onClick:e[9]||(e[9]=function(t){return l.columns.push("")}),class:"game_button_add"}),Object(c["g"])("input",{type:"button",value:"Добавить строку",onClick:e[10]||(e[10]=function(t){return l.rows.push("")}),class:"game_button_add"}),h,k,Object(c["g"])("table",y,[0==t.ref_table_1.length?(Object(c["p"])(),Object(c["d"])("tbody",w,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(l.rows,(function(t){return Object(c["p"])(),Object(c["d"])("tr",{key:t},[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(l.columns,(function(t){return Object(c["p"])(),Object(c["d"])("td",{key:t},[T])})),128))])})),128))])):(Object(c["p"])(),Object(c["d"])("tbody",x,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(t.ref_table_1,(function(t,e){return Object(c["p"])(),Object(c["d"])("tr",{key:e},[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(t,(function(t,e){return Object(c["p"])(),Object(c["d"])("td",{class:"table_cell",key:e},[Object(c["g"])("span",null,Object(c["z"])(t),1)])})),128))])})),128))]))])])})),128))]),Object(c["g"])("div",C,[Object(c["g"])("ul",null,[Object(c["g"])(u,{to:"/game",class:"nav_src"},{default:Object(c["D"])((function(){return[R,z]})),_:1}),Object(c["g"])(u,{to:"/materials",class:"nav_src"},{default:Object(c["D"])((function(){return[S,B]})),_:1})])])])}var E=n("5530"),I=n("5502"),A=n("bc3a"),G=n.n(A),J={computed:Object(I["d"])({teams:function(t){return t.team.teams},ref_table_1:function(t){return t.settings.ref_table_1},materials:function(t){return t.settings.materials}}),data:function(){return{count:1,banks:!1,newTeam:{nickname:"",balance:""},rows:[{}],columns:[],tables:[{}],gameState:{reference_table:[],materials_tables:[]}}},methods:Object(E["a"])(Object(E["a"])(Object(E["a"])(Object(E["a"])(Object(E["a"])({},Object(I["b"])("team",["addTeam"])),Object(I["b"])("team",["clearTeams"])),Object(I["b"])("settings",["addRefTable"])),Object(I["b"])("settings",["clearRefTable"])),{},{teamAdder:function(t){this.addTeam(t),this.newTeam={}},nextRound:function(){this.count++,this.tables.push(""),this.banks=!0},saveTable:function(){for(var t=document.getElementById("ref_table"),e=[],n=t.rows.length,c=t.rows[0].cells.length,a=0;a<n;a++){for(var l=0;l<c;l++)e.push(t.rows[a].cells[l].children[0].value);this.addRefTable(e),e=[]}},saveGame:function(){this.gameState.materials_tables=this.materials,this.gameState.reference_table=this.ref_table_1,G.a.post("https://optimizators.herokuapp.com/game/create",{data:this.gameState}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}})};n("219e");J.render=D;e["default"]=J},"8bb1":function(t,e,n){t.exports=n.p+"img/gear.33eb5c34.png"},b05c:function(t,e,n){},ffb4:function(t,e,n){t.exports=n.p+"img/loc.6c01d41d.png"}}]);
//# sourceMappingURL=chunk-8b224b8e.58e65d4f.js.map