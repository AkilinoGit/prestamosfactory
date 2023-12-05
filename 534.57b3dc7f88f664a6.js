"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[534],{534:(I,Z,a)=>{a.r(Z),a.d(Z,{AdminPageModule:()=>F});var g=a(6814),m=a(95),s=a(6728),v=a(6958),d=a(5861),T=a(5196),C=a(1789),A=a(1702),n=a(6242),_=a(408),b=a(3722);function y(t,u){if(1&t&&(n.TgZ(0,"ion-col",25)(1,"ion-item")(2,"ion-label",1)(3,"h2"),n._uU(4,"Estado:"),n.qZA(),n.TgZ(5,"ion-text"),n._uU(6),n.qZA()()(),n.TgZ(7,"ion-item")(8,"ion-label",1)(9,"h2"),n._uU(10,"Deuda Restante:"),n.qZA(),n.TgZ(11,"ion-text"),n._uU(12),n.qZA()()(),n.TgZ(13,"ion-item")(14,"ion-label",1)(15,"h2"),n._uU(16,"Cuotas Restantes:"),n.qZA(),n.TgZ(17,"ion-text"),n._uU(18),n.qZA()()()()),2&t){const c=u.$implicit;n.xp6(6),n.hij(" ",c._state.toString(),""),n.xp6(6),n.hij(" ",c._deudaRestante.toString(),""),n.xp6(6),n.Oqu(c._cuotasRestantes.toString())}}function P(t,u){if(1&t&&(n.TgZ(0,"ion-row")(1,"ion-header",23)(2,"ion-title",1),n._uU(3),n.qZA()(),n.YNc(4,y,19,3,"ion-col",24),n.qZA()),2&t){const c=u.$implicit;n.xp6(3),n.hij("User: ",c.key,""),n.xp6(1),n.Q6J("ngForOf",c.value)}}const U=[{path:"",component:(()=>{var t;class u{constructor(e,o,i,r){this.document=e,this.authService=o,this.txService=i,this.formBuilder=r,this.prestamosCursando={},this.admin=o.OWNER,this.web3=new T.ZPm,this.web3.setProvider(new this.web3.providers.HttpProvider(this.authService.PROVIDER)),this.window=e.defaultView,this.definirForm=r.group({porcentajeInteres:"10",cantidad:"1000",cuotas:"3",penalizacionImpago:"10"}),this.invertirForm=r.group({amount:""}),this.recogerForm=r.group({amount:""}),this.factoryContract=new this.web3.eth.Contract(C.d.abi,o.FACTORY)}ngOnInit(){var e=this;return(0,d.Z)(function*(){localStorage.getItem("userAddress")!==e.authService.OWNER&&(e.window.location.href="/home"),e.balance=yield e.factoryContract.methods.getBalance().call({from:localStorage.getItem("userAddress")}),e.clientes=yield e.factoryContract.methods.getClientes().call({from:localStorage.getItem("userAddress")}),yield e.iniciarVistaContratados()})()}invertir(e){var o=this.factoryContract.methods.invertir().encodeABI();console.log(e.amount);var i=this.web3.utils.toHex(parseInt(e.amount));this.txService.makeTransaction(this.authService.FACTORY,i,o)}recogerFondos(e){var o=this.factoryContract.methods.recolectarFondos(e.amount).encodeABI();this.txService.makeTransaction(this.authService.FACTORY,0,o)}iniciarVistaContratados(){var e=this;return(0,d.Z)(function*(){e.clientes.forEach(function(){var o=(0,d.Z)(function*(i){var r=yield e.factoryContract.methods.verContratos(i).call({from:localStorage.getItem("userAddress")}),l=[];r.forEach(function(){var f=(0,d.Z)(function*(h){var w=yield new e.web3.eth.Contract(A.d.abi,h),p=yield w.methods.mostrarInfo().call();p._ultimoCheckeo=e.secondsToDateString(p._ultimoCheckeo),l.push(p),console.log(l)});return function(h){return f.apply(this,arguments)}}()),e.prestamosCursando[i]=l});return function(i){return o.apply(this,arguments)}}())})()}checkeoMensual(){var e=this;return(0,d.Z)(function*(){e.clientes.forEach(function(){var o=(0,d.Z)(function*(i){e.prestamosCursando[i].forEach(function(){var r=(0,d.Z)(function*(l){var h=(yield new e.web3.eth.Contract(A.d.abi,l._direccion)).methods.checkeoMensual().encodeABI();e.txService.makeTransaction(l._direccion,0,h)});return function(l){return r.apply(this,arguments)}}())});return function(i){return o.apply(this,arguments)}}())})()}definirPrestamo(e){var o=this.factoryContract.methods.definirPrestamo(e.porcentajeInteres,e.cantidad,e.cuotas,e.penalizacionImpago).encodeABI();this.txService.makeTransaction(this.authService.FACTORY,0,o)}secondsToDateString(e){var o=e.toString(),i=1e3*Number(o),r=new Date(i);return r.setMonth(r.getMonth()+1),r.getDay()+"/"+(r.getMonth()+1)+"/"+r.getFullYear()}logOut(){window.location.href="/home"}}return(t=u).\u0275fac=function(e){return new(e||t)(n.Y36(g.K0),n.Y36(_.u),n.Y36(b.l),n.Y36(m.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-admin"]],decls:67,vars:10,consts:[[3,"translucent"],[1,"ion-text-center"],[1,"ion-text-center",3,"fullscreen"],[1,"ion-text-center","ion-margin"],["size","4"],[1,"ion-padding-bottom"],[1,"ion-margin",3,"formGroup","ngSubmit"],["position","floating"],["formControlName","porcentajeInteres"],["formControlName","cantidad"],["formControlName","cuotas"],["formControlName","penalizacionImpago"],["expand","block","type","submit"],["size","8"],[1,"scrollable-content"],[4,"ngFor","ngForOf"],[1,"ion-margin","ion-align-items-center","ion-justify-content-center"],[1,"ion-align-items-center"],["size","6"],["formControlName","amount"],[1,"ion-margin"],["expand","block",1,"ion-margin",3,"click"],["expand","block",3,"click"],[1,"ion-margin","ion-padding","ion-align-items-center"],["size","3.1",4,"ngFor","ngForOf"],["size","3.1"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),n._uU(3),n.qZA()()(),n.TgZ(4,"ion-content",2)(5,"ion-row",3)(6,"ion-col",4)(7,"ion-header",5)(8,"ion-title",1),n._uU(9,"Define un nuevo pr\xe9stamo"),n.qZA()(),n.TgZ(10,"form",6),n.NdJ("ngSubmit",function(){return o.definirPrestamo(o.definirForm.value)}),n.TgZ(11,"ion-item")(12,"ion-label",7),n._uU(13,"Porcentaje Interes"),n.qZA(),n._UZ(14,"ion-input",8),n.qZA(),n.TgZ(15,"ion-item")(16,"ion-label",7),n._uU(17,"Cantidad Prestada"),n.qZA(),n._UZ(18,"ion-input",9),n.qZA(),n.TgZ(19,"ion-item")(20,"ion-label",7),n._uU(21,"Numero cuotas"),n.qZA(),n._UZ(22,"ion-input",10),n.qZA(),n.TgZ(23,"ion-item")(24,"ion-label",7),n._uU(25,"Penalizacion Impago"),n.qZA(),n._UZ(26,"ion-input",11),n.qZA(),n.TgZ(27,"ion-button",12),n._uU(28,"Definir"),n.qZA()()(),n.TgZ(29,"ion-col",13)(30,"ion-header",5)(31,"ion-title",1),n._uU(32,"Prestamos en curso"),n.qZA()(),n.TgZ(33,"div",14),n.YNc(34,P,5,2,"ion-row",15),n.ALo(35,"keyvalue"),n.qZA()()(),n.TgZ(36,"ion-row",16)(37,"ion-col",4)(38,"form",6),n.NdJ("ngSubmit",function(){return o.invertir(o.invertirForm.value)}),n.TgZ(39,"ion-item")(40,"ion-row",17)(41,"ion-col",18)(42,"ion-label",7),n._uU(43,"Invierte wei:"),n.qZA(),n._UZ(44,"ion-input",19),n.qZA(),n.TgZ(45,"ion-col",18)(46,"ion-button",12),n._uU(47,"Invertir"),n.qZA()()()()(),n.TgZ(48,"ion-item",20)(49,"ion-text"),n._uU(50),n.qZA()()(),n.TgZ(51,"ion-col",4)(52,"form",6),n.NdJ("ngSubmit",function(){return o.recogerFondos(o.recogerForm.value)}),n.TgZ(53,"ion-item")(54,"ion-row",17)(55,"ion-col",18)(56,"ion-label",7),n._uU(57,"Recoge wei:"),n.qZA(),n._UZ(58,"ion-input",19),n.qZA(),n.TgZ(59,"ion-col",18)(60,"ion-button",12),n._uU(61,"Recoger Fondos"),n.qZA()()()()(),n.TgZ(62,"ion-button",21),n.NdJ("click",function(){return o.checkeoMensual()}),n._uU(63,"Checkeo mensual"),n.qZA()(),n.TgZ(64,"ion-col",4)(65,"ion-button",22),n.NdJ("click",function(){return o.logOut()}),n._uU(66,"LOG OUT"),n.qZA()()()()),2&e&&(n.Q6J("translucent",!0),n.xp6(3),n.hij("ADMIN: ",o.admin,""),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(6),n.Q6J("formGroup",o.definirForm),n.xp6(24),n.Q6J("ngForOf",n.lcZ(35,8,o.prestamosCursando)),n.xp6(4),n.Q6J("formGroup",o.invertirForm),n.xp6(12),n.hij(" BALANCE: ",o.balance," "),n.xp6(2),n.Q6J("formGroup",o.recogerForm))},dependencies:[g.sg,m._Y,m.JJ,m.JL,s.YG,s.wI,s.W2,s.Gu,s.pK,s.Ie,s.Q$,s.Nd,s.yW,s.wd,s.sr,s.j9,m.sg,m.u,g.Nd],styles:['@charset "UTF-8";.scrollable-content[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}']}),u})()}];let S=(()=>{var t;class u{}return(t=u).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.Bz.forChild(U),v.Bz]}),u})(),F=(()=>{var t;class u{}return(t=u).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,m.u5,s.Pc,S,m.UX]}),u})()}}]);