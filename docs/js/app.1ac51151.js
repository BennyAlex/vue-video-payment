(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},s={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-video-payment/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),s=r.n(a);s.a},7578:function(t,e,r){"use strict";var a=r("eaab"),s=r.n(a);s.a},"9c0c":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-toolbar",{staticClass:"white--text flex-grow-0",attrs:{extended:"",elevation:"1",color:"primary",id:"main-bar"}},[r("v-toolbar-title",[t._v("vue video payment app")]),r("v-spacer"),r("v-btn",{attrs:{text:"",to:"/",color:"white"}},[t._v(" Home ")]),r("v-btn",{attrs:{text:"",to:"/login",color:"white"}},[t._v(" Login ")]),r("v-btn",{attrs:{text:"",to:"/register",color:"white"}},[t._v(" Register ")])],1),r("v-card",{staticClass:"mx-auto",staticStyle:{"margin-top":"-64.7px"},attrs:{"min-width":"300px",width:"70%","max-width":"1060px",elevation:"4","min-height":"600px"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",{staticClass:"grey--text text--darken-4 font-weight-bold"},[t._v(" "+t._s(t.title)+" ")])],1),r("v-divider",{staticStyle:{"border-top-width":"1.3px"}}),r("v-card-text",{staticClass:"black--text pa-9 mt-3",staticStyle:{"font-size":"18px"}},[r("router-view")],1)],1)],1)},o=[],n=r("9ab4"),i=r("60a3");let c=class extends i["c"]{get title(){return this.$route.name||"Home"}};c=Object(n["a"])([i["a"]],c);var l=c,u=l,p=(r("5c0b"),r("2877")),d=r("6544"),v=r.n(d),b=r("7496"),h=r("8336"),m=r("b0af"),f=r("99d9"),w=r("ce7e"),g=r("2fa4"),x=r("71d9"),y=r("2a7f"),k=Object(p["a"])(u,s,o,!1,null,null,null),_=k.exports;v()(k,{VApp:b["a"],VBtn:h["a"],VCard:m["a"],VCardText:f["a"],VDivider:w["a"],VSpacer:g["a"],VToolbar:x["a"],VToolbarTitle:y["a"]});var j=r("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-center"},[t.$store.user?a("div",{staticClass:"font-weight-bold pb-3"},[t._v(" Welcome "+t._s(t.$store.user.username||t.$store.user.email)+"! ")]):a("div",{staticClass:"font-weight-bold pb-3"},[a("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" to see this content ")],1),a("img",{class:t.$store.user?"":"blur",attrs:{alt:"Vue logo",src:r("cf05")}}),t.$store.user?a("v-row",{staticClass:"mt-13",attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"secondary",large:""},on:{click:function(e){t.$store.user=void 0}}},[t._v("Logout")])],1):t._e()],1)},$=[];let S=class extends i["c"]{};S=Object(n["a"])([Object(i["a"])({components:{}})],S);var V=S,C=V,P=(r("7578"),r("0fd9")),T=Object(p["a"])(C,O,$,!1,null,"1e3bc33e",null),M=T.exports;v()(T,{VBtn:h["a"],VRow:P["a"]});var E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("mail-input",{model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),r("password-input",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.error?r("div",{staticClass:"error--text text-center mb-4"},[t._v(" "+t._s(t.error)+" ")]):t._e(),r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{color:"primary",large:"",type:"submit"},on:{click:t.login}},[t._v("Login")])],1)],1),r("v-snackbar",{attrs:{color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(){return[r("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar.show=!1}}},[t._v(" Close ")])]},proxy:!0}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},L=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{attrs:{label:"Password",hint:"At least 8 characters",outlined:"",rounded:"",type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.$rules.required,t.$rules.min],error:t.error},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})},q=[];let B=class extends i["c"]{constructor(){super(...arguments),this.error=!1,this.value="",this.show=!1}get input(){return this.value}set input(t){this.$emit("input",t)}};Object(n["a"])([Object(i["b"])(Boolean)],B.prototype,"error",void 0),Object(n["a"])([Object(i["b"])(String)],B.prototype,"value",void 0),B=Object(n["a"])([Object(i["a"])({name:"password-input"})],B);var F=B,I=F,J=r("8654"),D=Object(p["a"])(I,R,q,!1,null,"0aecb5a0",null),H=D.exports;v()(D,{VTextField:J["a"]});var A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{attrs:{label:"Mail",placeholder:"me@gmail.com",outlined:"",rounded:"",type:"text",rules:[t.$rules.required,t.$rules.mail]},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})},N=[];let z=class extends i["c"]{constructor(){super(...arguments),this.value=""}get input(){return this.value}set input(t){this.$emit("input",t)}};Object(n["a"])([Object(i["b"])(String)],z.prototype,"value",void 0),z=Object(n["a"])([Object(i["a"])({name:"mail-input"})],z);var U=z,W=U,G=Object(p["a"])(W,A,N,!1,null,"4e439df2",null),K=G.exports;v()(G,{VTextField:J["a"]});let Q=class extends i["c"]{constructor(){super(...arguments),this.mail="",this.password="",this.error="",this.snackbar={show:!1,text:"",color:"primary"}}async login(){if(this.$refs.form.validate()){const t=await fetch("https://spect8-streams-backend.dev.vaudience.net/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:this.password,loginId:this.mail})}),e=await t.json();return t.ok?(this.$store.user=e,this.snackbar.text="Successfully logged in!",this.snackbar.color="success",this.error=""):(this.snackbar.text="Error while trying to login!",this.snackbar.color="error",this.error=e.message,console.log("login error:",e)),void(this.snackbar.show=!0)}}};Q=Object(n["a"])([Object(i["a"])({name:"Login",components:{MailInput:K,PasswordInput:H}})],Q);var X=Q,Y=X,Z=r("4bd4"),tt=r("2db4"),et=Object(p["a"])(Y,E,L,!1,null,"394c7047",null),rt=et.exports;v()(et,{VBtn:h["a"],VForm:Z["a"],VRow:P["a"],VSnackbar:tt["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register"},[r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("v-text-field",{attrs:{label:"Username",placeholder:"SuperMario",outlined:"",rounded:"",type:"text",rules:[t.$rules.required]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("mail-input",{model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),r("password-input",{attrs:{error:!!t.error},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}}),r("password-input",{attrs:{error:!!t.error},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),t.error?r("div",{staticClass:"error--text text-center mb-4"},[t._v(" "+t._s(t.error)+" ")]):t._e(),r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{color:"primary",large:"",type:"submit"},on:{click:t.register}},[t._v("Register")])],1)],1),r("v-snackbar",{attrs:{color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(){return[r("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar.show=!1}}},[t._v(" Close ")])]},proxy:!0}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},st=[];let ot=class extends i["c"]{constructor(){super(...arguments),this.username="",this.mail="",this.password1="",this.password2="",this.error="",this.snackbar={show:!1,text:"",color:"primary"}}async register(){if(this.$refs.form.validate()){const t=this.$rules.match(this.password1,this.password2);if(!0===t){const t=await fetch("https://spect8-streams-backend.dev.vaudience.net/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.mail,username:this.username,password:this.password1,confirmPassword:this.password2})}),e=await t.json();return t.ok?(this.snackbar.text="Successfully registed, you must confirm your email first before you can login!",this.snackbar.color="success",this.error=""):(this.snackbar.text="Error while trying to register!",this.snackbar.color="error",this.error=e.message,console.log("register error:",e)),void(this.snackbar.show=!0)}this.error=t}}};ot=Object(n["a"])([Object(i["a"])({name:"Login",components:{MailInput:K,PasswordInput:H}})],ot);var nt=ot,it=nt,ct=Object(p["a"])(it,at,st,!1,null,"a0019dd4",null),lt=ct.exports;v()(ct,{VBtn:h["a"],VForm:Z["a"],VRow:P["a"],VSnackbar:tt["a"],VTextField:J["a"]}),a["a"].use(j["a"]);const ut=[{path:"/",name:"Home",component:M},{path:"/register",name:"Register",component:lt},{path:"/login",name:"Login",component:rt}],pt=new j["a"]({mode:"history",base:"/vue-video-payment/",routes:ut});var dt=pt,vt=r("f309");a["a"].use(vt["a"]);var bt=new vt["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#1867c0"}}}});const ht=i["c"].observable({user:void 0});var mt=ht;const ft={required:t=>!!t||"Required",mail:t=>/.+@.+/.test(t)||"Mail does not look valid",min:t=>t.length>=8||"Must have 8 or more characters",match:(t,e,r="Passwords")=>t===e||r+" do not match"};var wt=ft;a["a"].config.productionTip=!1,a["a"].prototype.$store=mt,a["a"].prototype.$rules=wt,new a["a"]({router:dt,vuetify:bt,render:t=>t(_)}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},eaab:function(t,e,r){}});
//# sourceMappingURL=app.1ac51151.js.map