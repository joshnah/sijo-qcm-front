import{a as S}from"./chunk-AJCI4IHL.js";import{i as _}from"./chunk-QDBR6KCD.js";import{Eb as C,Fb as v,Gb as Q,Ia as n,Jb as x,Sa as a,Xa as d,bb as l,ca as r,eb as u,gb as m,hb as p,ib as o,jb as s,ob as g,xb as c,yb as f}from"./chunk-I64YHXKP.js";var y=(e,i)=>i.id,q=e=>["/coding-questions",e];function D(e,i){if(e&1&&(o(0,"li",3)(1,"div")(2,"h5",4),c(3),s()(),o(4,"div",5)(5,"button",6),c(6," Start "),s()()()),e&2){let t=i.$implicit;n(3),f(t.title),n(2),l("routerLink",x(2,q,t.id))}}function E(e,i){if(e&1&&(o(0,"h2",1),c(1,"Available Quizzes"),s(),o(2,"ul",2),m(3,D,7,4,"li",3,y),s()),e&2){g();let t=Q(1);n(3),p(t)}}var b=class e{codingQuestionsService=r(S);ngOnInit(){this.codingQuestionsService.codingQuestions().length||this.codingQuestionsService.fetchCodingQuestions()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-coding-questions-list"]],decls:3,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center","container","flex-column","gap-3"],[1,"mb-3"],[1,"list-group","w-100"],[1,"list-group-item","d-flex","justify-content-between","align-items-center","p-3"],[1,"mb-1"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary","btn-sm",3,"routerLink"]],template:function(t,L){if(t&1&&(o(0,"div",0),C(1),d(2,E,5,0),s()),t&2){n();let h=v(L.codingQuestionsService.codingQuestions());n(),u(h?2:-1)}},dependencies:[_],encapsulation:2,changeDetection:0})};export{b as CodingQuestionsListComponent};