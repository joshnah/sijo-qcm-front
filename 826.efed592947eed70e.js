"use strict";(self.webpackChunksijo_qcm_front=self.webpackChunksijo_qcm_front||[]).push([[826],{8826:(q,u,a)=>{a.r(u),a.d(u,{QuizEditComponent:()=>F});var t=a(4438),d=a(749),m=a(593),c=a(4341),g=a(4629);const h={_id:"%s",title:"This is an example",explanation:"Example",category:"Java",questions:[{id:"q1",text:"Quel est le type de retour de la m\xe9thode 'main' en Java ?",answers:[{id:"a1",option:"void",isCorrect:!0},{id:"a2",option:"int",isCorrect:!0},{id:"a3",option:"String"},{id:"a4",option:"boolean"}]}]};var l=a(4512);const p=(s,r)=>r.id;function C(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",2)(1,"h3",3),t.EFF(2,"Edit Quiz"),t.k0s(),t.j41(3,"div")(4,"button",4),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.reset())}),t.EFF(5,"Reset"),t.k0s()()()}}function z(s,r){1&s&&(t.j41(0,"h3"),t.EFF(1,"Create new quiz"),t.k0s())}function b(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",20)(1,"input",23),t.mxI("ngModelChange",function(n){const o=t.eBV(e).$implicit;return t.DH7(o.option,n)||(o.option=n),t.Njj(n)}),t.k0s(),t.j41(2,"div",24)(3,"input",25),t.mxI("ngModelChange",function(n){const o=t.eBV(e).$implicit;return t.DH7(o.isCorrect,n)||(o.isCorrect=n),t.Njj(n)}),t.k0s(),t.j41(4,"label",26),t.EFF(5," Is correct? "),t.k0s()(),t.j41(6,"button",22),t.bIt("click",function(){const n=t.eBV(e).$index,o=t.XpG().$index,_=t.XpG(3);return t.Njj(_.deleteAnswer(o,n))}),t.EFF(7," Delete Answer "),t.k0s()()}if(2&s){const e=r.$implicit,i=r.$index,n=t.XpG().$index;t.R7$(),t.R50("ngModel",e.option),t.R7$(2),t.FCK("id","correctAnswer",n,"-",i,""),t.R50("ngModel",e.isCorrect),t.R7$(),t.FCK("for","correctAnswer",n,"-",i,"")}}function f(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",15)(1,"label"),t.EFF(2),t.k0s(),t.j41(3,"input",19),t.mxI("ngModelChange",function(n){const o=t.eBV(e).$implicit;return t.DH7(o.text,n)||(o.text=n),t.Njj(n)}),t.k0s(),t.Z7z(4,b,8,8,"div",20,p),t.j41(6,"button",21),t.bIt("click",function(){const n=t.eBV(e).$index,o=t.XpG(3);return t.Njj(o.addAnswer(n))}),t.EFF(7," Add Answer "),t.k0s(),t.j41(8,"button",22),t.bIt("click",function(){const n=t.eBV(e).$index,o=t.XpG(3);return t.Njj(o.deleteQuestion(n))}),t.EFF(9," Delete Question "),t.k0s()()}if(2&s){const e=r.$implicit,i=r.$index;t.R7$(2),t.SpI("Question ",i+1,""),t.R7$(),t.R50("ngModel",e.text),t.R7$(),t.Dyx(e.answers)}}function x(s,r){if(1&s){const e=t.RV6();t.j41(0,"button",27),t.bIt("click",function(){t.eBV(e);const n=t.XpG(3);return t.Njj(n.delete())}),t.EFF(1," Delete Quiz "),t.k0s(),t.j41(2,"button",28),t.bIt("click",function(){t.eBV(e);const n=t.XpG(3);return t.Njj(n.save())}),t.EFF(3,"Save"),t.k0s()}}function j(s,r){if(1&s){const e=t.RV6();t.j41(0,"button",28),t.bIt("click",function(){t.eBV(e);const n=t.XpG(3);return t.Njj(n.create())}),t.EFF(1," Create quiz "),t.k0s()}}function E(s,r){if(1&s){const e=t.RV6();t.j41(0,"div")(1,"div",10)(2,"label",11),t.EFF(3,"Title"),t.k0s(),t.j41(4,"input",12),t.mxI("ngModelChange",function(n){t.eBV(e);const o=t.XpG(2);return t.DH7(o.quiz().title,n)||(o.quiz().title=n),t.Njj(n)}),t.k0s()(),t.j41(5,"div",10)(6,"label",11),t.EFF(7,"Explanation"),t.k0s(),t.j41(8,"textarea",13),t.mxI("ngModelChange",function(n){t.eBV(e);const o=t.XpG(2);return t.DH7(o.quiz().explanation,n)||(o.quiz().explanation=n),t.Njj(n)}),t.k0s()(),t.j41(9,"div",10)(10,"label",11),t.EFF(11,"Category"),t.k0s(),t.j41(12,"input",14),t.mxI("ngModelChange",function(n){t.eBV(e);const o=t.XpG(2);return t.DH7(o.quiz().category,n)||(o.quiz().category=n),t.Njj(n)}),t.k0s()()(),t.j41(13,"h4"),t.EFF(14,"Questions"),t.k0s(),t.Z7z(15,f,10,2,"div",15,p),t.j41(17,"button",16),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.addQuestion())}),t.EFF(18," Add Question "),t.k0s(),t.j41(19,"div",17),t.DNE(20,x,4,0)(21,j,2,0,"button",18),t.k0s()}if(2&s){const e=t.XpG(2);t.R7$(4),t.R50("ngModel",e.quiz().title),t.R7$(4),t.R50("ngModel",e.quiz().explanation),t.R7$(4),t.R50("ngModel",e.quiz().category),t.R7$(3),t.Dyx(e.quiz().questions),t.R7$(5),t.vxM(e.isEditing?20:21)}}function k(s,r){if(1&s){const e=t.RV6();t.j41(0,"textarea",29),t.mxI("ngModelChange",function(n){t.eBV(e);const o=t.XpG(2);return t.DH7(o.jsonQuiz,n)||(o.jsonQuiz=n),t.Njj(n)}),t.k0s(),t.j41(1,"button",30),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.checkJson())}),t.EFF(2," Check JSON "),t.k0s()}if(2&s){const e=t.XpG(2);t.R50("ngModel",e.jsonQuiz)}}function Q(s,r){if(1&s){const e=t.RV6();t.j41(0,"ul",5,0),t.bIt("navChange",function(n){t.eBV(e);const o=t.XpG();return t.Njj(o.onTabChange(n))}),t.j41(2,"li",6)(3,"a",7),t.EFF(4,"Form Input"),t.k0s(),t.DNE(5,E,22,4,"ng-template",8),t.k0s(),t.j41(6,"li",6)(7,"a",7),t.EFF(8,"JSON Editor"),t.k0s(),t.DNE(9,k,3,1,"ng-template",8),t.k0s()(),t.nrm(10,"div",9)}if(2&s){const e=t.sdS(1);t.R7$(2),t.Y8G("ngbNavItem",1),t.R7$(4),t.Y8G("ngbNavItem",2),t.R7$(4),t.Y8G("ngbNavOutlet",e)}}let F=(()=>{class s{route=(0,t.WQX)(d.nX);router=(0,t.WQX)(d.Ix);quizService=(0,t.WQX)(m.p);alertService=(0,t.WQX)(g.u);quiz=(0,t.vPA)(null);jsonQuiz=(0,t.vPA)("");quizBase;ngOnInit(){const e=this.route.snapshot.paramMap.get("id");if(e)this.fetchQuiz(e);else{const{_id:i,...n}=JSON.parse(JSON.stringify(h));this.quiz.set(n)}}save(){try{const e=JSON.parse(this.jsonQuiz());this.quizService.updateQuiz(e).subscribe({next:i=>{this.quiz.set(i),this.alertService.setMessage({message:"Quiz has been updated",type:"success"})},error:i=>{this.alertService.setMessage({message:`Error while updating quiz:  ${i?.description}`,type:"danger"})}})}catch{this.alertService.setMessage({message:"Invalid JSON format. Please correct it.",type:"danger"})}}reset(){this.quizBase&&(this.quiz.set(JSON.parse(JSON.stringify(this.quizBase))),this.jsonQuiz.set(JSON.stringify(this.quizBase,null,2)))}delete(){this.quizService.deleteQuiz(this.quiz()).subscribe(()=>{this.router.navigate(["/quizzes"]),this.alertService.setMessage({message:"Quiz has been deleted",type:"success"})})}create(){this.quizService.createQuiz(this.quiz()).subscribe(()=>{this.router.navigate(["/quizzes"]),this.alertService.setMessage({message:"Quiz has been created",type:"success"})})}fetchQuiz(e){this.quizService.fetchFullQuizById(e).subscribe(i=>{i&&(this.quizBase=JSON.parse(JSON.stringify(i)),this.quiz.set(JSON.parse(JSON.stringify(i))),this.jsonQuiz.set(JSON.stringify(this.quiz(),null,2)))})}checkJson(){try{this.quiz.set(JSON.parse(this.jsonQuiz()))}catch{return this.alertService.setMessage({message:"Invalid JSON format. Please correct it.",type:"danger"}),!1}return!0}addQuestion(){this.quiz.update(e=>{const i=`q${(e?.questions.length||0)+1}`;return e?.questions.push({id:i,text:"Text sample",answers:[{id:"a1",option:"option 1",isCorrect:!0},{id:"a2",option:"option 2"},{id:"a3",option:"option 3"}]}),e})}addAnswer(e){this.quiz.update(i=>(i?.questions[e].answers.push({id:`a${i?.questions[e].answers.length+1}`,option:"new option"}),i))}deleteAnswer(e,i){this.quiz.update(n=>{const o=n?.questions[e].answers;return o?.splice(i,1),o?.forEach((_,v)=>{_.id=`a${v+1}`}),n})}deleteQuestion(e){this.quiz.update(i=>{const n=i?.questions;return n?.splice(e,1),n?.forEach((o,_)=>{o.id=`q${_+1}`}),i})}onTabChange(e){1!==e.nextId||this.checkJson()?this.jsonQuiz.set(JSON.stringify(this.quiz(),null,2)):e.preventDefault()}get isEditing(){return!!this.route.snapshot.paramMap.get("id")}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=t.VBU({type:s,selectors:[["app-quiz-edit"]],standalone:!0,features:[t.aNF],decls:4,vars:2,consts:[["nav","ngbNav"],[1,"container","mt-3"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"m-0"],[1,"btn","btn-primary",3,"click"],["ngbNav","",1,"nav","nav-tabs",3,"navChange"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-3",3,"ngbNavOutlet"],[1,"mb-2"],[1,"form-label"],["type","text","placeholder","Enter Quiz Title",1,"form-control",3,"ngModelChange","ngModel"],["rows","3","placeholder","Enter Explanation",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Enter Category",1,"form-control",3,"ngModelChange","ngModel"],[1,"border","p-3","mb-3"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"d-flex","justify-content-end","mt-4"],[1,"btn","btn-success"],["type","text","placeholder","Enter Question Text",1,"form-control","mb-2",3,"ngModelChange","ngModel"],[1,"input-group","mb-2","align-items-center"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger","ms-2",3,"click"],["type","text","placeholder","Enter Answer Option",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-check","ms-3","d-flex"],["type","checkbox",1,"form-check-input","larger-checkbox",3,"ngModelChange","id","ngModel"],[1,"form-check-label",3,"for"],[1,"btn","btn-outline-danger","me-2",3,"click"],[1,"btn","btn-success",3,"click"],["rows","15","placeholder","Edit your quiz JSON here",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-3","btn","btn-primary",3,"click"]],template:function(i,n){1&i&&(t.j41(0,"div",1),t.DNE(1,C,6,0,"div",2)(2,z,2,0,"h3")(3,Q,11,3),t.k0s()),2&i&&(t.R7$(),t.vxM(n.isEditing?1:2),t.R7$(2),t.vxM(n.quiz()?3:-1))},dependencies:[c.YN,c.me,c.Zm,c.BC,c.vS,l.Pv,l.Um,l.X9,l.sy,l.Gx,l.Ri,l.WA,l.m_],styles:[".larger-checkbox[_ngcontent-%COMP%]{width:1.5em;height:1.5em;margin-right:.5em;cursor:pointer}.form-check-label[_ngcontent-%COMP%]{font-size:1rem;margin-left:.2em;cursor:pointer}"],changeDetection:0})}return s})()}}]);