import{a as z}from"./chunk-TPG6Z5HW.js";import{a as ge,e as ue}from"./chunk-GEBUQZWA.js";import{$ as ae,Ca as Z,Da as p,E as A,Ea as C,Fa as re,Ga as P,H as ne,I as u,Ia as d,J as m,Ja as N,Ka as M,L as ie,O as H,P as j,Ta as F,Ua as se,V as oe,Va as ce,Ya as pe,Z as E,_ as s,d as ee,db as le,fb as me,ga as O,ia as y,ib as de,jb as fe,l as te,ma as l,oa as v,pa as I,qa as w,ra as D,sa as a,ta as r,ua as c,va as L,wa as g,xa as h,ya as k}from"./chunk-AWBN5K7A.js";var he=i=>({open:i}),_e=()=>["/app/home"],ve=()=>["/app/matches"],Ce=()=>["/app/results"],xe=()=>["/app/profile"],be=()=>["/auth/login"],U=class i{isOpen=O(!1);toggleMenu(){this.isOpen.set(!this.isOpen())}closeMenu(){this.isOpen.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-header"]],standalone:!0,features:[d],decls:24,vars:13,consts:[[1,"header-left"],["appLogoSrc","","alt","Logo app"],[1,"header-right"],["src","/icons/Menu.png",3,"click"],[1,"content-menu",3,"ngClass"],[1,"content-menu-top"],["appLogoSrc","","alt","Logo app",1,"logo"],["src","/icons/Close.png",1,"close",3,"click"],[1,"content-menu-list"],[1,"content-menu-list-item",3,"click","routerLink"],["src","/icons/Home.png"],["src","/icons/Soccer.png"],["src","/icons/Score.png"],["src","/icons/User.png"],["src","/icons/Logout.png"]],template:function(e,t){e&1&&(a(0,"div",0),c(1,"img",1),r(),a(2,"div",2)(3,"img",3),g("click",function(){return t.toggleMenu()}),r()(),a(4,"div",4)(5,"div",5),c(6,"img",6),a(7,"img",7),g("click",function(){return t.toggleMenu()}),r()(),a(8,"div",8)(9,"a",9),g("click",function(){return t.closeMenu()}),c(10,"img",10),p(11," TABLERO "),r(),a(12,"a",9),g("click",function(){return t.closeMenu()}),c(13,"img",11),p(14," PARTIDOS/PREDICIONES "),r(),a(15,"a",9),g("click",function(){return t.closeMenu()}),c(16,"img",12),p(17," RESULTADOS RECIENTES "),r(),a(18,"a",9),g("click",function(){return t.closeMenu()}),c(19,"img",13),p(20," PERFIL DE USUARIO "),r(),a(21,"a",9),g("click",function(){return t.closeMenu()}),c(22,"img",14),p(23," TERMINAR SESI\xD3N "),r()()()),e&2&&(s(4),l("ngClass",M(6,he,t.isOpen())),s(5),l("routerLink",N(8,_e)),s(3),l("routerLink",N(9,ve)),s(3),l("routerLink",N(10,Ce)),s(3),l("routerLink",N(11,xe)),s(3),l("routerLink",N(12,be)))},dependencies:[me,F,de],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;display:flex;background-color:var(--primary);height:var(--header-height);align-items:end;padding:21px 16px}.header-left[_ngcontent-%COMP%]{flex:1;display:flex}.header-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:57px;height:49px;z-index:2}.header-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:39px;height:39px}.content-menu[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;top:0;left:100vw;background-color:#0f0c21;display:flex;flex-direction:column;transition:all ease .5s}.content-menu.open[_ngcontent-%COMP%]{left:0}.content-menu-top[_ngcontent-%COMP%]{display:flex;height:var(--header-height);align-items:end;padding:21px 16px;justify-content:space-between}.content-menu-top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:57px;height:49px;opacity:0}.content-menu-top[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:32px;height:32px;margin-bottom:10px;cursor:pointer}.content-menu-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex:1;padding:16px}.content-menu-list-item[_ngcontent-%COMP%]{display:flex;margin-bottom:39px;color:#fff;text-decoration:none;align-items:center;cursor:pointer}.content-menu-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:16px}"]})};var V=class i{authService=u(z);ngOnInit(){this.authService.loadProfile(localStorage.getItem("user_id"))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-app"]],standalone:!0,features:[d],decls:2,vars:0,template:function(e,t){e&1&&c(0,"app-header")(1,"router-outlet")},dependencies:[le,U]})};var T=class i{authService=u(z);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-profile"]],standalone:!0,features:[d],decls:8,vars:2,consts:[[1,"content-left"],[1,"content-avatar"],["src","/people/avatar.png"],[1,"content-right"],[1,"content-message"],[1,"content-name"]],template:function(e,t){if(e&1&&(a(0,"div",0)(1,"div",1),c(2,"img",2),r()(),a(3,"div",3)(4,"div",4),p(5),r(),a(6,"div",5),p(7),r()()),e&2){let o,f;s(5),re("Bienvenido ",(o=t.authService.profile())==null?null:o.usr_user,""),s(2),C((f=t.authService.profile())==null?null:f.usr_mail)}},styles:["[_nghost-%COMP%]{background-color:var(--alt-bg);border-radius:8px;border:1px solid #303030;padding:8px;display:flex}.content-right[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;color:#fff;justify-content:center}.content-left[_ngcontent-%COMP%]{margin-right:24px}.content-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:74px;height:74px;border-radius:50%}.content-points[_ngcontent-%COMP%]{display:flex;align-items:center}.content-points[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;margin-right:6px}.content-point[_ngcontent-%COMP%]{font-size:8px;color:var(--alt-color)}.content-message[_ngcontent-%COMP%]{font-weight:700}.content-name[_ngcontent-%COMP%]{margin-bottom:4px;font-size:12px}"]})};var R=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-info"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"content-left"],["src","/icons/Info.png"],[1,"content-right"],[1,"message-message"]],template:function(e,t){e&1&&(a(0,"div",0),c(1,"img",1),r(),a(2,"div",2)(3,"div",3),p(4," Recuerda dar de alta todas tus apuestas y predicciones antes de la fecha se\xF1alada por el administrador de tu KingNiela "),r()())},styles:["[_nghost-%COMP%]{display:flex;background-color:#ea3ef7;align-items:center;padding:8px 16px}.content-right[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content-left[_ngcontent-%COMP%]{padding-right:16px}.message-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:4px}.message-message[_ngcontent-%COMP%]{font-size:14px}"]})};var b=class i{constructor(n){this.http=n}apiUrl=fe;getMatchData(){return this.http.get(this.apiUrl+"/scores/user-predictions")}getMatchEndData(){return this.http.get(this.apiUrl+"/scores/user-predictions-end")}getNewMatchData(){return this.http.get(this.apiUrl+"/scores/news")}setUserMatchPrediction(n){return this.http.post(this.apiUrl+"/scores/user-prediction",n)}static \u0275fac=function(e){return new(e||i)(ne(pe))};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})};var B=i=>({active:i});function Me(i,n){if(i&1&&(a(0,"div",9)(1,"div",10),p(2),r()(),c(3,"app-matches",12)),i&2){let e=n.$implicit,t=h(2);s(2),P(" ",t.phs[e].name," (",t.phs[e].sub,") "),s(),l("matches",t.groups[e])}}function ye(i,n){if(i&1&&(a(0,"div",9)(1,"div",10),p(2,"Siguientes Partidos"),r(),a(3,"button",11),p(4,"VER MAS"),r()(),w(5,Me,4,3,null,null,I)),i&2){let e=h();s(5),D(e.phsIds)}}function Pe(i,n){if(i&1&&(a(0,"div",9)(1,"div",10),p(2),r()(),c(3,"app-matches",12)),i&2){let e=n.$implicit,t=h(2);s(2),P(" ",t.phs[e].name," (",t.phs[e].sub,") "),s(),l("matches",t.newMatches)}}function Se(i,n){if(i&1&&(a(0,"div",9)(1,"div",10),p(2,"Resultados Recientes"),r(),a(3,"button",11),p(4,"VER MAS"),r()(),w(5,Pe,4,3,null,null,I)),i&2){let e=h();s(5),D(e.newPhsIds)}}var $=class i{newGroups={};newPhsIds=[];matches=[];groups={};phsIds=[];phs={};newMatches=[];step=O(1);matchService=u(b);changeStep(n){this.step.set(n)}ngOnInit(){this.loadMatches(),this.loadNewMatches()}groupMatches(n){let e={},t=new Map;for(let o of n)t.set(o.tdb_phs,{name:o.phs_name,sub:o.phs_sub,id:o.tdb_phs}),e[o.tdb_phs]||(e[o.tdb_phs]=[]),e[o.tdb_phs].push(o);t.forEach((o,f)=>{this.phs[f]=o}),this.matches=n,this.groups=e,this.phsIds=Array.from(t.keys()).sort((o,f)=>f-o)}newGroupMatches(n){let e={},t=new Map;for(let o of n)t.set(o.tdb_phs,{name:o.phs_name,sub:o.phs_sub,id:o.tdb_phs}),e[o.tdb_phs]||(e[o.tdb_phs]=[]),e[o.tdb_phs].push(o);t.forEach((o,f)=>{this.phs[f]=o}),this.newMatches=n,this.newGroups=e,this.newPhsIds=Array.from(t.keys()).sort((o,f)=>f-o)}loadMatches(){this.matchService.getMatchData().subscribe(n=>{this.groupMatches(n)},n=>{console.error("Error loading matches:",n)})}loadNewMatches(){this.matchService.getNewMatchData().subscribe(n=>{this.newGroupMatches(n)},n=>{console.error("Error loading matches:",n)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-home-page"]],standalone:!0,features:[d],decls:18,vars:14,consts:[[1,"content-page"],[1,"tabs"],[1,"tabs-item","active",3,"click","ngClass"],["src","/icons/Soccer.png"],[1,"tabs-item-text"],[1,"tabs-item",3,"click","ngClass"],["src","/icons/Score.png"],[1,"content-tabs"],[1,"content-tabs-tab",3,"ngClass"],[1,"content-tabs-tab-top"],[1,"content-tabs-tab-top-text"],[1,"content-tabs-tab-top-bt"],[3,"matches"]],template:function(e,t){e&1&&(c(0,"app-info"),a(1,"div",0),c(2,"app-profile"),a(3,"div",1)(4,"div",2),g("click",function(){return t.changeStep(1)}),c(5,"img",3),a(6,"div",4),p(7,"PARTIDOS"),r()(),a(8,"div",5),g("click",function(){return t.changeStep(2)}),c(9,"img",6),a(10,"div",4),p(11,"RANKING"),r()()(),a(12,"div",7)(13,"div",8),y(14,ye,7,0)(15,Se,7,0),r(),a(16,"div",8),c(17,"app-ranking"),r()()()),e&2&&(s(4),l("ngClass",M(6,B,t.step()===1)),s(4),l("ngClass",M(8,B,t.step()===2)),s(5),l("ngClass",M(10,B,t.step()===1)),s(),v(t.matches.length?14:-1),s(),v(t.newMatches.length?15:-1),s(),l("ngClass",M(12,B,t.step()===2)))},dependencies:[F,T,ue,ge,R],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-top:var(--header-height)}.tabs[_ngcontent-%COMP%]{display:flex}.tabs-item[_ngcontent-%COMP%]{flex:1;text-align:center;color:#fff;display:flex;align-items:center;justify-content:center;padding:12px;border-bottom:solid 2px transparent;cursor:pointer}.tabs-item.active[_ngcontent-%COMP%]{border-bottom:solid 2px var(--alt-color)}.tabs-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;margin-right:6px}.tabs-item.active[_ngcontent-%COMP%]   .tabs-item-text[_ngcontent-%COMP%]{font-weight:700;color:var(--alt-color)}.content-tabs[_ngcontent-%COMP%]{display:flex;width:100%}.content-tabs-tab[_ngcontent-%COMP%]{display:none;flex-direction:column;width:100%;padding:16px 0}.content-tabs-tab.active[_ngcontent-%COMP%]{display:flex}.content-tabs-tab-top[_ngcontent-%COMP%]{display:flex;color:#fff;margin-bottom:8px;align-items:center}.content-tabs-tab-top-text[_ngcontent-%COMP%]{font-weight:700;flex:1}.content-tabs-tab-top-bt[_ngcontent-%COMP%]{display:flex;border:none;color:#fff;background-color:transparent;font-size:8px;cursor:pointer}app-matches[_ngcontent-%COMP%]{margin-bottom:39px}"]})};var Oe=i=>({filled:i}),G=class i{data;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-match-end"]],inputs:{data:"data"},standalone:!0,features:[d],decls:14,vars:13,consts:[[1,"content-left"],[1,"content-name"],[1,"content-img",3,"src","alt"],[1,"content-center"],[1,"content-score",3,"ngClass"],[1,"content-score-user"],[1,"content-score-tms"],[1,"content-right"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1),p(2),r(),c(3,"img",2),r(),a(4,"div",3)(5,"div",4)(6,"span",5),p(7),r(),a(8,"span",6),p(9),r()()(),a(10,"div",7),c(11,"img",2),a(12,"div",1),p(13),r()()),e&2&&(s(2),C(t.data.local_name),s(),k("alt",t.data.local_name),l("src","/imgs/teams2/"+t.data.local_flag,E),s(2),l("ngClass",M(11,Oe,t.data.root_local_score==t.data.tdb_local_score&&t.data.root_visit_score==t.data.tdb_visit_score)),s(2),P(" ",t.data.root_local_score," - ",t.data.root_visit_score," "),s(2),P("",t.data.tdb_local_score,"-",t.data.tdb_visit_score,""),s(2),k("alt",t.data.visit_name),l("src","/imgs/teams2/"+t.data.visit_flag,E),s(2),C(t.data.visit_name))},dependencies:[F],styles:["[_nghost-%COMP%]{display:flex;background-color:var(--alt-bg);border-radius:8px;padding:8px;color:#fff;margin-bottom:10px}.content-img[_ngcontent-%COMP%]{width:40px;height:42px;margin:0 8px;object-fit:contain}.content-right[_ngcontent-%COMP%], .content-left[_ngcontent-%COMP%]{display:flex;align-items:center;flex:1}.content-left[_ngcontent-%COMP%]{justify-content:flex-end}.content-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.content-date[_ngcontent-%COMP%]{font-size:8px;text-align:center}.content-score[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:var(--alt-color);font-weight:700;font-size:14px;align-items:center}.content-score.filled[_ngcontent-%COMP%]   .content-score-user[_ngcontent-%COMP%]{color:#0cff24}.content-score.filled[_ngcontent-%COMP%]   .content-score-tms[_ngcontent-%COMP%]{background:#d749ef}.content-score-user[_ngcontent-%COMP%]{color:#ff2b2b}.content-score-tms[_ngcontent-%COMP%]{font-size:12px;padding:2px 4px;background:#c8c8c8;border-radius:4px;color:#000;margin-top:6px;width:min-content;white-space:nowrap}"]})};function Ee(i,n){if(i&1&&c(0,"app-match-end",3),i&2){let e=n.$implicit;l("data",e)}}function Ie(i,n){if(i&1&&(a(0,"div",2)(1,"div",1),p(2),r()(),w(3,Ee,1,1,"app-match-end",3,I)),i&2){let e=n.$implicit,t=h(2);s(2),P(" ",t.phs[e].name," (",t.phs[e].sub,") "),s(),D(t.groups[e])}}function we(i,n){if(i&1&&(a(0,"div",0)(1,"div",1),p(2,"Resultados"),r()(),w(3,Ie,5,2,null,null,I)),i&2){let e=h();s(3),D(e.phsIds)}}var K=class i{matches=[];groups={};phsIds=[];phs={};matchService=u(b);ngOnInit(){this.loadMatches()}groupMatches(n){let e={},t=new Map;for(let o of n)t.set(o.tdb_phs,{name:o.phs_name,sub:o.phs_sub,id:o.tdb_phs}),e[o.tdb_phs]||(e[o.tdb_phs]=[]),e[o.tdb_phs].push(o);t.forEach((o,f)=>{this.phs[f]=o}),this.matches=n,this.groups=e,this.phsIds=Array.from(t.keys()).sort((o,f)=>f-o)}loadMatches(){this.matchService.getMatchEndData().subscribe({next:n=>{this.groupMatches(n),console.log("\u{1F680} ~ ResultsPageComponent ~ loadMatches ~ data:",n)},error:n=>{console.error("Error loading matches:",n)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-results-page"]],standalone:!0,features:[d],decls:1,vars:1,consts:[[1,"content-tabs-tab-top",2,"margin-bottom","16px"],[1,"content-tabs-tab-top-text"],[1,"content-tabs-tab-top"],[3,"data"]],template:function(e,t){e&1&&y(0,we,5,0),e&2&&v(t.matches.length?0:-1)},dependencies:[G],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-top:var(--header-height);padding:24px 16px}.content-tabs-tab-top[_ngcontent-%COMP%]{display:flex;color:#fff;margin-bottom:8px;align-items:center}.content-tabs-tab-top-text[_ngcontent-%COMP%]{font-weight:700;flex:1}.content-tabs-tab-top-bt[_ngcontent-%COMP%]{display:flex;border:none;color:#fff;background-color:transparent;font-size:8px;cursor:pointer}"]})};var q=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-profile-page"]],standalone:!0,features:[d],decls:1,vars:0,template:function(e,t){e&1&&c(0,"app-profile")},dependencies:[T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-top:var(--header-height);padding:24px 16px}"]})};var S=class i{matches=O([]);matchesScore=O({});set(n,e,t){let o=this.matchesScore();o[n]||(o[n]={}),t?o[n][e]=t:delete o[n][e],this.matchesScore.set(o)}isFullScore(){let n=this.matchesScore(),e=Object.keys(n);return this.matches().length===e.length?e.every(o=>Object.keys(n[o]).length===2):!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})};var J=class i{constructor(n){this.el=n}onInput(n){let e=this.el.nativeElement,t=e.value.replace(/[^0-9]/g,"");e.value=t}static \u0275fac=function(e){return new(e||i)(ae(oe))};static \u0275dir=ie({type:i,selectors:[["","appNoNegativeNumbers",""]],hostBindings:function(e,t){e&1&&g("input",function(f){return t.onInput(f)})},standalone:!0})};var Q=class i{data;matchService=u(S);changeInput(n,e){this.matchService.set(this.data.tdb_id,n,e)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-match-edit"]],inputs:{data:"data"},standalone:!0,features:[d],decls:15,vars:6,consts:[["localInput",""],["visitInput",""],[1,"content-left"],[1,"content-img",3,"src","alt"],[1,"content-name"],["type","number","appNoNegativeNumbers","",1,"content-score-input",3,"keyup"],[1,"content-center"],[1,"content-score"],[1,"content-right"],["type","number",1,"content-score-input",3,"keyup"]],template:function(e,t){if(e&1){let o=L();a(0,"div",2),c(1,"img",3),a(2,"div",4),p(3),r(),a(4,"input",5,0),g("keyup",function(){H(o);let Y=Z(5);return j(t.changeInput("tdb_local_score",Y.value))}),r()(),a(6,"div",6)(7,"div",7),p(8," - "),r()(),a(9,"div",8),c(10,"img",3),a(11,"div",4),p(12),r(),a(13,"input",9,1),g("keyup",function(){H(o);let Y=Z(14);return j(t.changeInput("tdb_visit_score",Y.value))}),r()()}e&2&&(s(),k("alt",t.data.local_name),l("src","/imgs/teams2/"+t.data.local_flag,E),s(2),C(t.data.local_name),s(7),k("alt",t.data.visit_name),l("src","/imgs/teams2/"+t.data.visit_flag,E),s(2),C(t.data.visit_name))},dependencies:[J],styles:["[_nghost-%COMP%]{display:flex;background-color:var(--alt-bg);border-radius:8px;padding:8px;color:#fff}.content-img[_ngcontent-%COMP%]{width:40px;height:42px;margin:0 8px;object-fit:contain}.content-right[_ngcontent-%COMP%], .content-left[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;flex:1}.content-left[_ngcontent-%COMP%]{justify-content:flex-end}.content-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.content-date[_ngcontent-%COMP%]{font-size:8px;text-align:center}.content-score[_ngcontent-%COMP%]{color:var(--alt-color);font-weight:700;font-size:14px}.content-score-input[_ngcontent-%COMP%]{width:60px;height:40px;text-align:center;background-color:#cbb8d3;border-radius:8px;border:none}"]})};function De(i,n){if(i&1&&(a(0,"div"),c(1,"app-match-edit",4),r()),i&2){let e=n.$implicit;s(),l("data",e)}}function ke(i,n){if(i&1){let e=L();a(0,"button",5),g("click",function(){H(e);let o=h();return j(o.onSubmit())}),p(1," GUARDAR MARCADOR "),r()}if(i&2){let e=h();l("disabled",!e.matchesEditDataService.isFullScore())}}function Ne(i,n){i&1&&(a(0,"div",2),p(1," No hay Predicciones pendientes "),r())}function Fe(i,n){i&1&&(a(0,"div",3),c(1,"div",6),r())}var W=class i{type=1;isLoader=!1;matchService=u(b);matchesEditDataService=u(S);onSubmit(){this.isLoader=!0,this.matchService.setUserMatchPrediction(this.matchesEditDataService.matchesScore()).subscribe({next:n=>{location.reload(),this.isLoader=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-matches-edit"]],standalone:!0,features:[d],decls:4,vars:3,consts:[[4,"ngFor","ngForOf"],[1,"bt-kn",3,"disabled"],[1,"emtry"],[1,"loader-content"],[3,"data"],[1,"bt-kn",3,"click","disabled"],[1,"loader"]],template:function(e,t){e&1&&y(0,De,2,1,"div",0)(1,ke,2,1,"button",1)(2,Ne,2,0,"div",2)(3,Fe,2,0,"div",3),e&2&&(l("ngForOf",t.matchesEditDataService.matches()),s(),v(t.matchesEditDataService.matches().length?1:2),s(2),v(t.isLoader?3:-1))},dependencies:[ce,se,Q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}app-match-edit[_ngcontent-%COMP%]{margin-bottom:8px}.emtry[_ngcontent-%COMP%]{width:100%;color:#fff;padding:20px;text-align:center}"]})};function Te(i,n){if(i&1&&(a(0,"div",1)(1,"div",2),p(2),r()()),i&2){let e=h();s(2),C(e.phase)}}var X=class i{phase="";matchService=u(b);matchesEditDataService=u(S);ngOnInit(){this.loadMatches()}loadMatches(){return ee(this,null,function*(){let n=yield te(this.matchService.getNewMatchData());if(this.matchesEditDataService.matches.set(n),n.length&&n[0]){let e=n[0];this.phase=`(${e.phs_name} - ${e.phs_sub})`}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-matches-page"]],standalone:!0,features:[d],decls:7,vars:1,consts:[[1,"content-page"],[1,"content-tabs-tab-top"],[1,"content-tabs-tab-top-text"]],template:function(e,t){e&1&&(c(0,"app-info"),a(1,"div",0)(2,"div",1)(3,"div",2),p(4,"Partidos / Predicciones"),r()(),y(5,Te,3,1,"div",1),c(6,"app-matches-edit"),r()),e&2&&(s(5),v(t.phase?5:-1))},dependencies:[W,R],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-top:var(--header-height)}.content-tabs-tab-top[_ngcontent-%COMP%]{display:flex;color:#fff;margin-bottom:8px;align-items:center}.content-tabs-tab-top-text[_ngcontent-%COMP%]{font-weight:700;flex:1}.content-tabs-tab-top-bt[_ngcontent-%COMP%]{display:flex;border:none;color:#fff;background-color:transparent;font-size:8px;cursor:pointer}"]})};var Zt=[{path:"",component:V,children:[{path:"home",component:$},{path:"results",component:K},{path:"profile",component:q},{path:"matches",component:X}]}];export{Zt as appRoutes};
