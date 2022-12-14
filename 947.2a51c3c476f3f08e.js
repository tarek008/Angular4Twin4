"use strict";(self.webpackChunkample_admin_angular=self.webpackChunkample_admin_angular||[]).push([[947],{4947:(de,T,u)=>{u.r(T),u.d(T,{UniversitiesModule:()=>ce});var p=u(9808),v=u(1083),e=u(5e3);let w=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-universities"]],decls:3,vars:0,consts:[[1,"container","col-lg"],[1,"cont"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"router-outlet"),e.qZA()())},directives:[v.lC],styles:[""]}),n})();var y=u(2340),d=u(520),Z=u(1135);let C=(()=>{class n{constructor(t){this.httpClient=t,this.url_list=y.N.url_u,this.getalluniversities="displayUniversities",this.univUp=new Z.X({}),this.univUp$=this.univUp.asObservable()}getlistuniversities(){const t=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.get(`${this.url_list+this.getalluniversities}`,{headers:t})}getUniversityById(t){const i=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.get(this.url_list+"displayUniversityBYId/"+t,{headers:i})}addUniversite(t){const i=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.post(this.url_list+"addUniversity",t,{headers:i})}updateUniversite(t){const i=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.put(this.url_list+"updateUniversity",t,{headers:i})}addDep(t,i){const r=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.put(this.url_list+"assignuniversityToDepartment/"+t+"/"+i,{headers:r})}univDelete(t){const i=(new d.WM).set("content-type","application/json").set("ngrok-skip-browser-warning","1231").set("Access-Control-Allow-Origin","*");return this.httpClient.delete(this.url_list+"deleteUniv/"+t,{headers:i})}assignUniv(t){this.univUp.next(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var o=u(3075);function I(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw(3),e.MAs(1).previous()})("click",function(){return e.CHM(t),e.oxw(3),e.MAs(1).previous()}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(n,s){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function M(n,s){if(1&n&&(e.TgZ(0,"li",9),e.YNc(1,I,4,2,"a",10),e.YNc(2,D,4,2,"span",11),e.qZA()),2&n){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function F(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;return e.oxw(2),e.MAs(1).setCurrent(r.value)})("click",function(){e.CHM(t);const r=e.oxw().$implicit;return e.oxw(2),e.MAs(1).setCurrent(r.value)}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&n){const t=e.oxw().$implicit,i=e.oxw(2);e.xp6(2),e.hij("",i.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function N(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&n){const t=e.oxw().$implicit,i=e.oxw(2);e.xp6(3),e.hij("",i.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function J(n,s){if(1&n&&(e.TgZ(0,"li"),e.YNc(1,F,6,5,"a",10),e.YNc(2,N,7,5,"ng-container",15),e.qZA()),2&n){const t=s.$implicit;e.oxw(2);const i=e.MAs(1);e.ekj("current",i.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",i.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",i.getCurrent()===t.value)}}function q(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw(3),e.MAs(1).next()})("click",function(){return e.CHM(t),e.oxw(3),e.MAs(1).next()}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function O(n,s){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function S(n,s){if(1&n&&(e.TgZ(0,"li",17),e.YNc(1,q,4,2,"a",10),e.YNc(2,O,4,2,"span",11),e.qZA()),2&n){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function B(n,s){if(1&n&&(e.TgZ(0,"ul",4),e.YNc(1,M,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,J,3,6,"li",7),e.YNc(5,S,3,4,"li",8),e.qZA()),2&n){const t=e.oxw(),i=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",i.getCurrent()," / ",i.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",i.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class b{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(s){return null==s.id&&(s.id=this.DEFAULT_ID),this.instances[s.id]?this.updateInstance(s):(this.instances[s.id]=s,!0)}updateInstance(s){let t=!1;for(let i in this.instances[s.id])s[i]!==this.instances[s.id][i]&&(this.instances[s.id][i]=s[i],t=!0);return t}getCurrentPage(s){return this.instances[s]?this.instances[s].currentPage:1}setCurrentPage(s,t){if(this.instances[s]){let i=this.instances[s];t<=Math.ceil(i.totalItems/i.itemsPerPage)&&1<=t&&(this.instances[s].currentPage=t,this.change.emit(s))}}setTotalItems(s,t){this.instances[s]&&0<=t&&(this.instances[s].totalItems=t,this.change.emit(s))}setItemsPerPage(s,t){this.instances[s]&&(this.instances[s].itemsPerPage=t,this.change.emit(s))}getInstance(s=this.DEFAULT_ID){return this.instances[s]?this.clone(this.instances[s]):{}}clone(s){var t={};for(var i in s)s.hasOwnProperty(i)&&(t[i]=s[i]);return t}}const Y=Number.MAX_SAFE_INTEGER;let j=(()=>{class n{constructor(t){this.service=t,this.state={}}transform(t,i){if(!(t instanceof Array)){let h=i.id||this.service.defaultId();return this.state[h]?this.state[h].slice:t}let c,g,r=i.totalItems&&i.totalItems!==t.length,a=this.createInstance(t,i),l=a.id,_=a.itemsPerPage,f=this.service.register(a);if(!r&&t instanceof Array){if(_=+_||Y,c=(a.currentPage-1)*_,g=c+_,this.stateIsIdentical(l,t,c,g))return this.state[l].slice;{let x=t.slice(c,g);return this.saveState(l,t,x,c,g),this.service.change.emit(l),x}}return f&&this.service.change.emit(l),this.saveState(l,t,t,c,g),t}createInstance(t,i){return this.checkConfig(i),{id:null!=i.id?i.id:this.service.defaultId(),itemsPerPage:+i.itemsPerPage||0,currentPage:+i.currentPage||1,totalItems:+i.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(a=>!(a in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,i,r,a,l){this.state[t]={collection:i,size:i.length,slice:r,start:a,end:l}}stateIsIdentical(t,i,r,a){let l=this.state[t];return!(!l||l.size!==i.length||l.start!==r||l.end!==a)&&l.slice.every((g,_)=>g===i[r+_])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b,16))},n.\u0275pipe=e.Yjl({name:"paginate",type:n,pure:!1}),n})(),Q=(()=>{class n{constructor(t,i){this.service=t,this.changeDetectorRef=i,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const i=this.outOfBoundCorrection(t);i!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(i),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const i=Math.ceil(t.totalItems/t.itemsPerPage);return i<t.currentPage&&0<i?i:t.currentPage<1?1:t.currentPage}createPageArray(t,i,r,a){a=+a;let l=[];const c=Math.max(Math.ceil(r/i),1),g=Math.ceil(a/2),_=t<=g,f=c-g<t,h=!_&&!f;let x=a<c,m=1;for(;m<=c&&m<=a;){let P,L=this.calculatePageNumber(m,t,a,c),ue=2===m&&(h||f),ge=m===a-1&&(h||_);P=x&&(ue||ge)?"...":L,l.push({label:P,value:L}),m++}return l}calculatePageNumber(t,i,r,a){let l=Math.ceil(r/2);return t===r?a:1===t?t:r<a?a-l<i?a-r+t:l<i?i-l+t:t:t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),n})();function U(n){return!!n&&"false"!==n}let E=(()=>{class n{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=U(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=U(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=U(t)}trackByIndex(t){return t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,i){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(a){return i.pageChange.emit(a)})("pageBoundsCorrection",function(a){return i.pageBoundsCorrection.emit(a)}),e.TgZ(2,"nav",2),e.YNc(3,B,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",i.id)("maxSize",i.maxSize),e.xp6(2),e.uIk("aria-label",i.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(i.autoHide&&r.pages.length<=1))}},directives:[Q,p.O5,p.sg],pipes:[p.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[b],imports:[[p.ez]]}),n})();var A=u(7423);function H(n,s){if(1&n&&(e.TgZ(0,"pre"),e._uU(1),e._UZ(2,"br"),e._uU(3,"\n"),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij("  ",t.nomDepart,"")}}let R=(()=>{class n{constructor(){this.rediretToList=new e.vpe}ngOnInit(){}back(){this.rediretToList.emit("U_List")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-university-detail"]],inputs:{univjson:"univjson"},outputs:{rediretToList:"rediretToList"},decls:10,vars:4,consts:[["width","50","height","50",3,"src"],[4,"ngFor","ngForOf"],[1,"btn","btn-dark",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"pre"),e._uU(1),e.qZA(),e.TgZ(2,"pre"),e._uU(3),e.qZA(),e.TgZ(4,"pre"),e._UZ(5,"img",0),e._uU(6," "),e.qZA(),e.YNc(7,H,4,1,"pre",1),e.TgZ(8,"button",2),e.NdJ("click",function(){return i.back()}),e._uU(9,"back"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(i.univjson.idUniv),e.xp6(2),e.Oqu(i.univjson.nomUniv),e.xp6(2),e.s9C("src",i.univjson.imageUniv,e.LSH),e.xp6(2),e.Q6J("ngForOf",null==i.univjson?null:i.univjson.departments))},directives:[p.sg],styles:[""]}),n})();var k=u(3189);const $=function(n,s){return{table1:n,table:s}},W=function(){return{"font-size.px":13}};function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr",11)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",12),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",13),e.qZA(),e.TgZ(7,"td")(8,"button",14),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).univDetails(a)}),e._uU(9,"Detail"),e.qZA()(),e.TgZ(10,"td")(11,"button",15),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).univUpdate(a)}),e._uU(12,"Update"),e.qZA()(),e.TgZ(13,"td")(14,"button",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).univDelete(a.idUniv)}),e._uU(15,"delete"),e.qZA()(),e.TgZ(16,"td")(17,"button",17),e._uU(18,"Affect"),e.qZA()()()}if(2&n){const t=s.$implicit,i=s.index;e.Q6J("ngClass",e.WLB(7,$,i%2,i%2)),e.xp6(2),e.Oqu(t.idUniv),e.xp6(1),e.Udp("color","black"),e.Q6J("ngStyle",e.DdM(10,W)),e.xp6(1),e.Oqu(t.nomUniv),e.xp6(2),e.s9C("src",null==t?null:t.imageUniv,e.LSH)}}const X=function(n){return{itemsPerPage:3,currentPage:n}};function V(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",2)(2,"input",3),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().searchText=r}),e.qZA()(),e.TgZ(3,"table",4)(4,"thead",5)(5,"tr",6)(6,"th",7),e._uU(7,"Id"),e.qZA(),e.TgZ(8,"th",7),e._uU(9,"Nom Universit\xe9"),e.qZA(),e.TgZ(10,"th",7),e._uU(11,"Image"),e.qZA()()(),e.TgZ(12,"tbody"),e.YNc(13,G,19,11,"tr",8),e.ALo(14,"paginate"),e.ALo(15,"filter"),e.qZA()(),e.TgZ(16,"pagination-controls",9),e.NdJ("pageChange",function(r){return e.CHM(t),e.oxw().p=r}),e.qZA(),e.TgZ(17,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().addNew()}),e._uU(18,"add new"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.searchText),e.xp6(11),e.Q6J("ngForOf",e.xi3(14,2,e.xi3(15,5,t.listuniversite,t.searchText),e.VKq(8,X,t.p)))}}function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-university-detail",18),e.NdJ("rediretToList",function(r){return e.CHM(t),e.oxw().rediretToList(r)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("univjson",t.univjson)}}let ee=(()=>{class n{constructor(t,i){this.universiteService=t,this.router=i,this.title="Angular Search Using ng2-search-filter",this.p=1}ngOnInit(){this.view="U_List",this.universiteService.getlistuniversities().subscribe(t=>{this.listuniversite=t})}addNew(){this.router.navigate(["universities/add"]),this.universiteService.assignUniv(null)}univDetails(t){this.univjson=t,this.view="U_Detail"}rediretToList(t){this.view=t}univUpdate(t){this.universiteService.assignUniv(t),this.router.navigate(["universities/add"])}univDelete(t){this.universiteService.univDelete(t).subscribe(i=>{}),window.location.reload()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C),e.Y36(v.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-universite"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"univjson","rediretToList",4,"ngIf"],[1,"search-hero"],["type","text","name","search","autocomplete","off","placeholder","\uf002  Chercher une universit\xe9",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-striped"],[1,"table-dark"],[1,"tr_head"],["scope","col"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"pageChange"],["mat-button","","color","primary",1,"addButton",3,"click"],[3,"ngClass"],[3,"ngStyle"],["width","100","height","60",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click"],["routerLink","/universities/depToUniv",1,"btn","btn-primary"],[3,"univjson","rediretToList"]],template:function(t,i){1&t&&(e.YNc(0,V,19,10,"div",0),e.YNc(1,K,1,1,"app-university-detail",1)),2&t&&(e.Q6J("ngIf","U_List"==i.view),e.xp6(1),e.Q6J("ngIf","U_Detail"==i.view))},directives:[p.O5,o.Fj,o.JJ,o.On,p.sg,p.mk,p.PC,v.rH,E,A.lW,R],pipes:[j,k.Z],styles:[".table[_ngcontent-%COMP%]{width:700px;height:500px;border:1px solid rgba(17,17,17,.5);background-color:#edf0f5}.table1[_ngcontent-%COMP%]{width:700px;height:500px;border:1px solid rgba(63,63,63,.5);background-color:#39a2a2}.button[_ngcontent-%COMP%]{background-color:#4caf50;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.btn-success[_ngcontent-%COMP%]{position:relative;left:300px}.search-hero[_ngcontent-%COMP%]{max-width:500px;padding-bottom:50px;margin:auto;position:relative;right:300px}.addButton[_ngcontent-%COMP%]{position:relative;left:300px}"]}),n})();function te(n,s){1&n&&(e.TgZ(0,"div",6),e._uU(1," this field is required "),e.qZA())}function ne(n,s){1&n&&(e.TgZ(0,"div",6),e._uU(1," this field is required "),e.qZA())}let ie=(()=>{class n{constructor(t,i,r){this.universiteService=t,this.router=i,this.currentRoute=r,this.unamePattern="^[a-z0-9_-]{8,15}$"}ngOnInit(){this.createUniversiteForm(),this.loadData()}addUniversities(){var t;this.universite.valid&&(this.Univ=null===(t=this.universite)||void 0===t?void 0:t.value,null==this.Univ.idUniv?this.universiteService.addUniversite(this.Univ).subscribe(i=>{this.router.navigate(["universities/"])}):this.universiteService.updateUniversite(this.Univ).subscribe(i=>{this.router.navigate(["universities/"])}))}createUniversiteForm(){this.universite=new o.cw({idUniv:new o.NI(""),nomUniv:new o.NI("",[o.kI.minLength(5)]),imageUniv:new o.NI("",[o.kI.required])})}loadData(){this.universiteService.univUp$.subscribe(t=>{t&&this.universite.patchValue({idUniv:t.idUniv,nomUniv:t.nomUniv,imageUniv:t.imageUniv})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C),e.Y36(v.F0),e.Y36(v.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form-universite"]],decls:15,vars:3,consts:[[1,"form-group",3,"formGroup"],[1,"form-group","col-md-6"],["formControlName","nomUniv","type","text","name","nomUniv",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["formControlName","imageUniv","type","text","src","url","name","imageUniv",1,"form-control"],[3,"click"],[1,"alert","alert-danger"]],template:function(t,i){1&t&&(e.TgZ(0,"form")(1,"div",0)(2,"div",1)(3,"label"),e._uU(4,"Nom Universite"),e.qZA(),e._UZ(5,"input",2),e.YNc(6,te,2,0,"div",3),e.qZA(),e.TgZ(7,"div",1)(8,"label"),e._uU(9,"Image"),e.qZA(),e._UZ(10,"input",4),e.YNc(11,ne,2,0,"div",3),e.qZA(),e.TgZ(12,"button",5),e.NdJ("click",function(){return i.addUniversities()}),e._uU(13," Ajouter "),e.qZA(),e._UZ(14,"div"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("formGroup",i.universite),e.xp6(5),e.Q6J("ngIf",i.error),e.xp6(5),e.Q6J("ngIf",i.error))},directives:[o._Y,o.JL,o.F,o.sg,o.Fj,o.JJ,o.u,p.O5],styles:[""]}),n})();class se{}new d.WM({"Content-Type":"application/json"});let re=(()=>{class n{constructor(t){this.httpClient=t,this.url_apilist=y.N.urlDep,this.getallquery="displayalldepartment",console.log(this.url_apilist)}getDepartments(){return this.httpClient.get(`${this.url_apilist+this.getallquery}`)}geDepartmentById(t){return this.httpClient.get(this.url_apilist+"displdepartmentbyid/"+t)}addDepartment(t){return this.httpClient.post(this.url_apilist+"addDepartment",t)}updateDepartment(t,i){return this.httpClient.put(this.url_apilist+"updatedepartment/"+t,i)}deleteDepartment(t){return console.log(t),this.httpClient.delete(this.url_apilist+"DeleteDepartment/"+t)}getEnseignantsByDepartment(t){return this.httpClient.get(this.url_apilist+"GetListOfEnseignantByDepartment/"+t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function ae(n,s){if(1&n&&(e.TgZ(0,"option",4),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",null==t?null:t.idUniv),e.xp6(1),e.Oqu(t.nomUniv)}}function oe(n,s){if(1&n&&(e.TgZ(0,"option",4),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",null==t?null:t.idDepart),e.xp6(1),e.Oqu(t.nomDepart)}}const le=[{path:"",component:w,children:[{path:"",component:ee},{path:"add",component:ie},{path:"depToUniv",component:(()=>{class n{constructor(t,i,r){this.router=t,this.universiteService=i,this.departmentsService=r}ngOnInit(){this.depUniv=new se,this.getListOfDepAndUniv()}saveDep(){this.depUniv.iddep&&this.depUniv.iduniv&&this.universiteService.addDep(this.depUniv.iddep,this.depUniv.iduniv).subscribe(t=>{this.router.navigate(["universities/"])})}getListOfDepAndUniv(){this.universiteService.getlistuniversities().subscribe(t=>{this.listuniversite=t}),this.departmentsService.getDepartments().subscribe(t=>{this.listDepartments=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.F0),e.Y36(C),e.Y36(re))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-dep"]],decls:13,vars:7,consts:[[1,"container",2,"padding","20%"],["f","ngForm"],[1,"form-group"],["name","idDep",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["name","idUniv",3,"ngModel","ngModelChange"],["type"," submit",1,"btn","btn-outline-primary",2,"margin-top","4%",3,"disabled","click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form",0,1)(2,"div",2)(3,"div")(4,"select",3),e.NdJ("ngModelChange",function(a){return i.depUniv.iddep=a}),e._UZ(5,"option",4),e.YNc(6,ae,2,2,"option",5),e.qZA(),e.TgZ(7,"select",6),e.NdJ("ngModelChange",function(a){return i.depUniv.iduniv=a}),e._UZ(8,"option",4),e.YNc(9,oe,2,2,"option",5),e.qZA(),e.TgZ(10,"div",2)(11,"button",7),e.NdJ("click",function(){return i.saveDep()}),e._uU(12,"save dep"),e.qZA()()()()()),2&t){const r=e.MAs(1);e.xp6(4),e.Q6J("ngModel",i.depUniv.iddep),e.xp6(1),e.Q6J("value",null),e.xp6(1),e.Q6J("ngForOf",i.listuniversite),e.xp6(1),e.Q6J("ngModel",i.depUniv.iduniv),e.xp6(1),e.Q6J("value",null),e.xp6(1),e.Q6J("ngForOf",i.listDepartments),e.xp6(2),e.Q6J("disabled",r.invalid)}},directives:[o._Y,o.JL,o.F,o.EJ,o.JJ,o.On,o.YN,o.Kr,p.sg],styles:[""]}),n})()}]}];let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[v.Bz.forChild(le)],v.Bz]}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,pe,o.u5,o.UX,k.h,z,A.ot]]}),n})()}}]);