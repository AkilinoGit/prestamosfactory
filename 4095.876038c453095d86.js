"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4095],{4095:(_,m,r)=>{r.r(m),r.d(m,{UserPageModule:()=>S});var d=r(6814),T=r(95),s=r(6728),h=r(6958),g=r(5861),Z=r(1789),p=r(1702),C=r(5196),t=r(6242),f=r(408),A=r(3722);function v(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"ion-col",9)(1,"ion-card")(2,"ion-card-content")(3,"ion-list")(4,"ion-item")(5,"ion-label",1),t._uU(6),t.qZA()(),t.TgZ(7,"ion-item")(8,"ion-label",1),t._uU(9),t.qZA()(),t.TgZ(10,"ion-item")(11,"ion-label",1),t._uU(12),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-label",1),t._uU(15),t.qZA()(),t.TgZ(16,"ion-item")(17,"ion-label",1),t._uU(18),t.qZA()()(),t.TgZ(19,"ion-button",10),t.NdJ("click",function(){const i=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.contratarPrestamo(i.index))}),t._uU(20,"CONTRATAR"),t.qZA()()()()}if(2&o){const n=l.$implicit;t.xp6(6),t.hij("Cantidad: ",n.cantidad.toString(),""),t.xp6(3),t.hij("Cuotas: ",n.cuotas.toString()," "),t.xp6(3),t.hij("Deuda Total: ",n.deudaTotal.toString(),""),t.xp6(3),t.hij("Penalizaci\xf3n por Impago: ",n.penalizacionImpago.toString(),"%"),t.xp6(3),t.hij("Porcentaje de Inter\xe9s: ",n.porcentajeInteres.toString(),"%")}}function U(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"ion-col",9)(1,"ion-card")(2,"ion-card-content")(3,"ion-list")(4,"ion-item")(5,"ion-label",1),t._uU(6),t.qZA()(),t.TgZ(7,"ion-item")(8,"ion-label",1),t._uU(9),t.qZA()(),t.TgZ(10,"ion-item")(11,"ion-label",1),t._uU(12),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-label",1),t._uU(15),t.qZA()(),t.TgZ(16,"ion-item")(17,"ion-label",1),t._uU(18),t.qZA()(),t.TgZ(19,"ion-item")(20,"ion-label",1),t._uU(21),t.qZA()()(),t.TgZ(22,"ion-button",10),t.NdJ("click",function(){const i=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.pagarCuota(i._direccion,i._cuotaMensual))}),t._uU(23),t.qZA()()()()}if(2&o){const n=l.$implicit;t.xp6(6),t.hij("Estado: ",n._state.toString(),""),t.xp6(3),t.hij("Deuda Restante: ",n._deudaRestante.toString(),""),t.xp6(3),t.hij("Cuotas Restantes: ",n._cuotasRestantes.toString()," "),t.xp6(3),t.hij("Cantidad Pr\xf3xima Cuota: ",n._cuotaMensual.toString()," "),t.xp6(3),t.hij("Fin plazo acutal: ",n._ultimoCheckeo,""),t.xp6(3),t.hij("Penalizaci\xf3n por Impago: ",n._penalizacionImpago.toString(),"%"),t.xp6(2),t.hij("PAGAR CUOTA (",n._cuotaMensual.toString(),")")}}const P=[{path:"",component:(()=>{var o;class l{constructor(e,a,i){this.document=e,this.authService=a,this.txService=i,this.listaContratados=[],this.window=e.defaultView,this.web3=new C.ZPm(new C.ZPm.providers.HttpProvider(a.PROVIDER)),this.factoryContract=new this.web3.eth.Contract(Z.d.abi,a.FACTORY),this.user=localStorage.getItem("userAddress")}ngOnInit(){var e=this;return(0,g.Z)(function*(){e.listaPrestamos=yield e.factoryContract.methods.verTiposContrato().call(),e.balance=yield e.web3.eth.getBalance(localStorage.getItem("userAddress")),yield e.iniciarVistaContratados()})()}iniciarVistaContratados(){var e=this;return(0,g.Z)(function*(){e.direccionesContratados=yield e.factoryContract.methods.verContratos(localStorage.getItem("userAddress")).call({from:localStorage.getItem("userAddress")}),e.direccionesContratados.forEach(function(){var a=(0,g.Z)(function*(i){var c=new e.web3.eth.Contract(p.d.abi,i),u=yield c.methods.mostrarInfo().call();u._ultimoCheckeo=e.secondsToDateString(u._ultimoCheckeo),e.listaContratados.push(u)});return function(i){return a.apply(this,arguments)}}())})()}contratarPrestamo(e){var a=this.factoryContract.methods.contratarPrestamo(localStorage.getItem("userAddress"),0).encodeABI();this.txService.makeTransaction(this.authService.FACTORY,0,a)}pagarCuota(e,a){var c=new this.web3.eth.Contract(p.d.abi,e).methods.pagarMensualidad().encodeABI(),u=this.web3.utils.toHex(parseInt(a));this.txService.makeTransaction(e,u,c)}secondsToDateString(e){var a=e.toString(),i=1e3*Number(a),c=new Date(i);return c.setMonth(c.getMonth()+1),c.getDay()+"/"+(c.getMonth()+1)+"/"+c.getFullYear()}logOut(){window.location.href="/home"}}return(o=l).\u0275fac=function(e){return new(e||o)(t.Y36(d.K0),t.Y36(f.u),t.Y36(A.l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-user"]],decls:21,vars:6,consts:[[3,"translucent"],[1,"ion-text-center"],[1,"ion-text-center",3,"fullscreen"],[1,"ion-text-center","ion-justify-content-center","ion-margin"],[1,"ion-padding"],["size","3.1",4,"ngFor","ngForOf"],[1,"ion-justify-content-center"],["size","4"],["expand","block",3,"click"],["size","3.1"],[3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"h2"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content",2)(7,"ion-row",3)(8,"ion-header",4)(9,"ion-title"),t._uU(10,"OFERTAS DE PR\xc9STAMOS"),t.qZA()(),t.YNc(11,v,21,5,"ion-col",5),t.qZA(),t.TgZ(12,"ion-row",3)(13,"ion-header",4)(14,"ion-title"),t._uU(15,"PRESTAMOS CONTRATADOS"),t.qZA()(),t.YNc(16,U,24,7,"ion-col",5),t.qZA(),t.TgZ(17,"ion-row",6)(18,"ion-col",7)(19,"ion-button",8),t.NdJ("click",function(){return a.logOut()}),t._uU(20,"LOG OUT"),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(3),t.hij("USER: ",a.user,""),t.xp6(2),t.hij("BALANCE: ",a.balance,""),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngForOf",a.listaPrestamos),t.xp6(5),t.Q6J("ngForOf",a.listaContratados))},dependencies:[d.sg,s.YG,s.PM,s.FN,s.wI,s.W2,s.Gu,s.Ie,s.Q$,s.q_,s.Nd,s.wd,s.sr]}),l})()}];let x=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(P),h.Bz]}),l})(),S=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,T.u5,s.Pc,x]}),l})()}}]);