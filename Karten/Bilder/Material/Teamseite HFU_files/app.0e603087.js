(function(t){function e(e){for(var a,r,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1796df65":"280ec5c6","chunk-7883ff51":"a7b54ef1","chunk-7cd4e144":"3d73f868","chunk-e624f578":"9eee5ec7","chunk-ef174584":"5834d256","chunk-2d22d746":"08b153e4","chunk-6286d4c1":"1b041504"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-7883ff51":1,"chunk-7cd4e144":1,"chunk-e624f578":1,"chunk-ef174584":1,"chunk-6286d4c1":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1796df65":"31d6cfe0","chunk-7883ff51":"89e89b09","chunk-7cd4e144":"ca4c7ca6","chunk-e624f578":"0fca7aa7","chunk-ef174584":"527c3ab8","chunk-2d22d746":"31d6cfe0","chunk-6286d4c1":"9f79e906"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{attrs:{app:"",color:"#008a54",dark:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.push("/").catch((function(t){}))}}},[n("h1",[t._v(t._s(t.$store.state.startupData.courseName))])]),n("v-spacer"),t.$store.state.startupData.loggedIn?n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{to:"/register",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Registrieren")]),n("v-icon",[t._v("mdi-account-plus")])],1):t._e(),t.$store.state.startupData.loggedIn?n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{to:"/about",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Weitere Infos")]),n("v-icon",[t._v("mdi-information")])],1):t._e(),"betreuer"==t.$store.state.startupData.type?n("v-btn",{attrs:{to:"/settings",text:""}},[n("v-icon",[t._v("mdi-cog")])],1):t._e(),n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",dark:""}},"v-btn",r,!1),a),[n("v-icon",{staticClass:"hidden-sm-and-down"},[t._v("mdi-dots-vertical")]),n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("mdi-menu")])],1)]}}])},[n("v-list",[t.$store.state.startupData.loggedIn?n("v-list-item",{staticClass:"hidden-md-and-up",attrs:{to:"/register"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Registrieren")])],1),n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-plus")])],1)],1):t._e(),t.$store.state.startupData.loggedIn?n("v-list-item",{staticClass:"hidden-md-and-up",attrs:{to:"/about"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Weitere Infos")])],1),n("v-list-item-icon",[n("v-icon",[t._v("mdi-information")])],1)],1):t._e(),t._l(t.topMenuItems,(function(e,a){return n("v-list-item",{key:a,attrs:{href:e.action,target:"_blank"}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t.$store.state.startupData.starterpaket&&t.$store.state.startupData.loggedIn?n("v-list-item",{attrs:{href:t.$store.state.startupData.starterpaket,target:"_blank"}},[n("v-list-item-title",[t._v("Starterpaket")])],1):t._e(),t.$store.state.startupData.loggedIn?n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-title",[t._v("Ausloggen")])],1):t._e(),t.$store.state.startupData.loggedIn&&"betreuer"==t.$store.state.startupData.type?n("v-list-item",{on:{click:function(e){t.$store.state.startupData.type="student"}}},[n("v-list-item-title",[t._v("Debug: Studentenansicht simulieren")])],1):t._e(),t.$store.state.startupData.loggedIn&&"betreuer"==t.$store.state.startupData.type?n("v-list-item",{on:{click:function(e){t.$store.state.startupData.type="betreuer"}}},[n("v-list-item-title",[t._v("Debug: Betreueransicht simulieren")])],1):t._e()],2)],1)],1),n("v-main",[t.$store.state.startupData.loggedIn?n("router-view"):n("loginForm",{attrs:{loginData:t.loginData},on:{tryLogin:function(e){return t.getStartupData()}}})],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"padding-top":"30px","max-width":"1185px"}},[n("h2",[t._v("Kein Zugriff: Bitte einloggen.")]),n("v-row",{staticStyle:{"padding-top":"30px"},attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{type:"email",dense:"",label:"Benutzername",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin()}},model:{value:t.loginData.username,callback:function(e){t.$set(t.loginData,"username",e)},expression:"loginData.username"}})],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{type:"password",dense:"",label:"Passwort",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin()}},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}})],1)],1),n("v-btn",{attrs:{loading:t.logginIn,color:"primary",elevation:"2"},on:{click:function(e){return t.tryLogin()}}},[t._v("Anmelden")]),"success"==t.loginState?n("div",{staticStyle:{"padding-top":"30px"}},[t._v(" Login erfolgreich. ")]):t._e(),"fail"==t.loginState?n("div",{staticStyle:{"padding-top":"30px"}},[t._v(" Login fehlgeschlagen. Benutzername und Passwort überprüfen. ")]):t._e()],1)},i=[],u={name:"loginForm",props:{loginData:Object},data:function(){return{loginState:!1,logginIn:!1}},methods:{tryLogin:function(){var t=this;t.logginIn=!0;var e=JSON.stringify(this.loginData),n=new XMLHttpRequest;n.open("POST",t.$store.state.appSettings.endpointURL+"login",!0),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.send(e),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(console.log(n.responseText),"success"==n.responseText?(t.loginState="success",t.$emit("tryLogin"),t.logginIn=!1):(t.loginState="fail",t.logginIn=!1)),n.status}}},mounted:function(){}},c=u,l=n("2877"),p=n("6544"),d=n.n(p),f=n("8336"),g=n("62ad"),m=n("a523"),v=n("0fd9"),h=n("8654"),b=Object(l["a"])(c,s,i,!1,null,null,null),y=b.exports;d()(b,{VBtn:f["a"],VCol:g["a"],VContainer:m["a"],VRow:v["a"],VTextField:h["a"]}),Storage.prototype.setObject=function(t,e){this.setItem(t,JSON.stringify(e))},Storage.prototype.getObject=function(t){var e=this.getItem(t);return console.log("get localstorage "+t),e&&JSON.parse(e)};var k={components:{loginForm:y},data:function(){return{topMenuItems:[{title:"Datenschutz",action:"https://www.hs-furtwangen.de/datenschutzhinweise/"}],loginData:{username:null,password:null},testvar:"testsad"}},methods:{getStartupData:function(){var t=this;localStorage.getItem("startupData")&&(t.$store.state.startupData=localStorage.getObject("startupData"));var e=new XMLHttpRequest;e.open("GET",t.$store.state.appSettings.endpointURL+"getStartupData",!0),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.send(null),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(console.log(e.responseText),t.startupData=JSON.parse(e.responseText),t.$store.state.startupData=JSON.parse(e.responseText),localStorage.setObject("startupData",t.$store.state.startupData)),e.status}},logout:function(){var t=this,e=new XMLHttpRequest;e.open("GET",t.$store.state.appSettings.endpointURL+"logout",!0),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.send(null),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(console.log(e.responseText),t.startupData=JSON.parse(e.responseText),t.$store.state.startupData=JSON.parse(e.responseText),localStorage.setObject("startupData",t.$store.state.startupData)),e.status}}},mounted:function(){this.getStartupData()}},_=k,S=(n("cf25"),n("7496")),D=n("40dc"),w=n("132d"),x=n("8860"),$=n("da13"),O=n("5d23"),I=n("34c3"),T=n("f6c4"),L=n("e449"),C=n("2fa4"),j=Object(l["a"])(_,r,o,!1,null,null,null),P=j.exports;d()(j,{VApp:S["a"],VAppBar:D["a"],VBtn:f["a"],VIcon:w["a"],VList:x["a"],VListItem:$["a"],VListItemContent:O["a"],VListItemIcon:I["a"],VListItemTitle:O["b"],VMain:T["a"],VMenu:L["a"],VSpacer:C["a"]});n("5363");var V=n("f309");a["a"].use(V["a"],{iconfont:"md"});var E=new V["a"]({}),N=(n("d3b7"),n("8c4f")),R=function(){return Promise.all([n.e("chunk-7cd4e144"),n.e("chunk-e624f578")]).then(n.bind(null,"bb51"))},M=function(){return Promise.all([n.e("chunk-ef174584"),n.e("chunk-2d22d746")]).then(n.bind(null,"f820"))},A=function(){return Promise.all([n.e("chunk-ef174584"),n.e("chunk-7cd4e144"),n.e("chunk-6286d4c1")]).then(n.bind(null,"73cf"))},q=function(){return n.e("chunk-7883ff51").then(n.bind(null,"26d3"))},B=function(){return n.e("chunk-1796df65").then(n.bind(null,"efbb"))};a["a"].use(N["a"]);var H=[{path:"/",name:"Home",component:R},{path:"/kurs",name:"Kurs",component:B},{path:"/about",name:"About",component:M},{path:"/register",name:"Register",component:A},{path:"/settings",name:"Settings",component:q}],J=new N["a"]({routes:H}),F=J,U=n("2f62");a["a"].use(U["a"]);var z=new U["a"].Store({state:{startupData:{loggedIn:!1,type:null,courseName:null,betreuerliste:null},appSettings:{endpointURL:"./backend.php?mode="},pageHTML:{registerPage:null,aboutPage:null}},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({vuetify:E,router:F,store:z,render:function(t){return t(P)}}).$mount("#app")},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.0e603087.js.map