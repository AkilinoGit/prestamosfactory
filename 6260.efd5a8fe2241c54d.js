"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{408:(v,d,n)=>{n.d(d,{u:()=>l});var g=n(5861),a=n(6814),m=n(6242);let l=(()=>{var s;class e{constructor(r){this.document=r,this.OWNER="0x46ccd6c01296f9aa02a161b92b007e9ae7675e97",this.FACTORY="0x2A845072b7908b6E6eac5A9546a8460f132aCAF6",this.PROVIDER="https://sepolia.infura.io/v3/d09825f256ae4705a74fdee006040903",this.window=r.defaultView}loginMetamask(){var r=this;return(0,g.Z)(function*(){if(typeof r.window.ethereum<"u"){const p=yield r.window.ethereum.request({method:"eth_requestAccounts"}).catch(f=>{4001===f.code?console.log("Please connect to MetaMask."):console.error(f)});r.saveLogin(p[0])}})()}saveLogin(r){localStorage.setItem("userAddress",r)}deleteLogin(){localStorage.removeItem("userAddress")}}return(s=e).\u0275fac=function(r){return new(r||s)(m.LFG(a.K0))},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),e})()},6260:(v,d,n)=>{n.r(d),n.d(d,{HomePageModule:()=>P});var g=n(6814),a=n(6728),m=n(95),l=n(6958),s=n(5861),e=n(6242),h=n(408);const p=[{path:"",component:(()=>{var t;class c{constructor(o,u){this.document=o,this.authService=u,this.window=o.defaultView}loginMetamask(){var o=this;return(0,s.Z)(function*(){yield o.authService.loginMetamask();const u=o.redirectUrl(localStorage.getItem("userAddress"));window.location.href=u})()}redirectUrl(o){return o===this.authService.OWNER?"/admin":"/user"}}return(t=c).\u0275fac=function(o){return new(o||t)(e.Y36(g.K0),e.Y36(h.u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:22,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"],["routerLink","/admin",2,"color","blue","cursor","pointer","list-style","none"],["routerLink","/user",2,"color","blue","cursor","pointer","list-style","none"],["expand","full",3,"click"]],template:function(o,u){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Logu\xe9ate PRUEBA GIT "),e.qZA()()(),e.TgZ(4,"ion-content",1),e._UZ(5,"ion-header",2),e.TgZ(6,"div",3)(7,"strong"),e._uU(8,"Ready to fuck?"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Nobody does it better "),e.TgZ(11,"a",4),e._uU(12,"Naugthy America"),e.qZA()()(),e.TgZ(13,"div")(14,"ul")(15,"li",5),e._uU(16," ADMIN"),e.qZA()(),e.TgZ(17,"ul")(18,"li",6),e._uU(19," USER"),e.qZA()(),e.TgZ(20,"ion-button",7),e.NdJ("click",function(){return u.loginMetamask()}),e._uU(21,"Iniciar sesi\xf3n con MetaMask"),e.qZA()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[a.YG,a.W2,a.Gu,a.wd,a.sr,a.YI,l.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c})()}];let f=(()=>{var t;class c{}return(t=c).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(p),l.Bz]}),c})(),P=(()=>{var t;class c{}return(t=c).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,m.u5,a.Pc,f]}),c})()}}]);