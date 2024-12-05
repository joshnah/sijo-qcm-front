"use strict";(self.webpackChunksijo_qcm_front=self.webpackChunksijo_qcm_front||[]).push([[693],{4693:(z,r,a)=>{a.r(r),a.d(r,{QuizTakerComponent:()=>v});var t=a(4438),l=a(4512),u=a(593);let m=(()=>{class i{modal=(0,t.WQX)(l.Lw);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=t.VBU({type:i,selectors:[["app-finish-confirmation"]],standalone:!0,features:[t.aNF],decls:17,vars:0,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.j41(0,"div",0)(1,"h4",1),t.EFF(2,"Finish quiz"),t.k0s(),t.j41(3,"button",2),t.bIt("click",function(){return o.modal.dismiss("Cross click")}),t.k0s()(),t.j41(4,"div",3)(5,"p")(6,"strong"),t.EFF(7,"Are you sure you want to finish the quiz?"),t.k0s()(),t.j41(8,"p"),t.EFF(9," This quiz will be closed and you will be no longer able to modify responses "),t.j41(10,"span",4),t.EFF(11,"This operation can not be undone."),t.k0s()()(),t.j41(12,"div",5)(13,"button",6),t.bIt("click",function(){return o.modal.dismiss("cancel click")}),t.EFF(14,"Return to quiz"),t.k0s(),t.j41(15,"button",7),t.bIt("click",function(){return o.modal.close("Ok click")}),t.EFF(16,"Finish quiz"),t.k0s()())}})}return i})();var d=a(7681);const p=(i,c)=>c.id;function f(i,c){if(1&i){const n=t.RV6();t.SS7(0),t.j41(1,"div",7)(2,"input",8),t.bIt("change",function(){const o=t.eBV(n).$implicit,s=t.XpG().$implicit,_=t.XpG();return t.Njj(_.selectAnswer(s.id,o.id))}),t.k0s(),t.j41(3,"label",9),t.EFF(4),t.k0s()()}if(2&i){const n=c.$implicit,e=t.XpG().$implicit,o=t.XpG().selectedResponses()[e.id].has(n.id);t.R7$(2),t.FCK("id","",e.id,"-",n.id,""),t.Y8G("checked",o),t.R7$(),t.FCK("for","",e.id,"-",n.id,""),t.R7$(),t.SpI(" ",n.option," ")}}function h(i,c){if(1&i&&(t.j41(0,"h3"),t.EFF(1),t.k0s(),t.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.EFF(6),t.k0s(),t.j41(7,"form",6),t.Z7z(8,f,5,8,"div",7,p),t.k0s()()()()),2&i){const n=c.$implicit,e=c.$index;t.R7$(),t.SpI("Question ",e,""),t.R7$(5),t.SpI(" ",n.text," "),t.R7$(2),t.Dyx(n.answers)}}let b=(()=>{class i{quiz=t.hFB.required();modalService=(0,t.WQX)(l.Bq);quizService=(0,t.WQX)(u.p);router=(0,t.WQX)(d.Ix);selectedResponses=(0,t.vPA)({});ngOnInit(){const n={};this.quiz().questions.forEach(e=>{n[e.id]=new Set}),this.selectedResponses.set(n)}selectAnswer(n,e){this.selectedResponses.update(o=>{const s=o[n];return s.has(e)?s.delete(e):s.add(e),o})}openFinishConfirmationPopup(){this.modalService.open(m).closed.subscribe(()=>{this.submit()})}submit(){this.quizService.submit(this.selectedResponses(),this.quiz()._id).subscribe(n=>{this.router.navigate([`/submissions/${n.submissionId}`])})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=t.VBU({type:i,selectors:[["app-questions-container"]],inputs:{quiz:[1,"quiz"]},standalone:!0,features:[t.aNF],decls:5,vars:0,consts:[[1,"d-flex","justify-content-center","mt-4"],[1,"btn","btn-danger",3,"click"],[1,"container","mt-4"],[1,"card","shadow","p-3","mb-4"],[1,"card-body"],[1,"card-title","border","rounded","p-3",2,"white-space","pre-wrap","max-height","500px","overflow-y","auto"],[1,"d-flex","flex-column","gap-3"],[1,"btn-group"],["type","checkbox",1,"btn-check",3,"change","checked","id"],[1,"btn","btn-lg","text-start","btn-outline-primary",3,"for"]],template:function(e,o){1&e&&(t.Z7z(0,h,10,2,null,null,p),t.j41(2,"div",0)(3,"button",1),t.bIt("click",function(){return o.openFinishConfirmationPopup()}),t.EFF(4," Finish test "),t.k0s()()),2&e&&t.Dyx(o.quiz().questions)},styles:[".btn-check[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{opacity:1}.wrong-icon[_ngcontent-%COMP%]{color:red;margin-left:10px;font-size:1.5rem;vertical-align:middle}"],changeDetection:0})}return i})();var F=a(177);function k(i,c){if(1&i&&(t.j41(0,"div",0),t.nrm(1,"app-questions-container",2),t.k0s()),2&i){const n=t.XpG();t.R7$(),t.Y8G("quiz",n.quiz)}}function C(i,c){1&i&&(t.j41(0,"div",1)(1,"span",3),t.EFF(2,"Loading..."),t.k0s()())}let v=(()=>{class i{route=(0,t.WQX)(d.nX);loading=(0,t.vPA)(!0);haveStarted=!1;quiz;quizService=(0,t.WQX)(u.p);ngOnInit(){const n=this.route.snapshot.paramMap.get("id");n&&this.quizService.fetchQuiz(n).subscribe(e=>{this.quiz=e,this.loading.set(!1)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=t.VBU({type:i,selectors:[["app-quiz-taker"]],standalone:!0,features:[t.aNF],decls:2,vars:1,consts:[[1,"d-flex","justify-content-center","align-items-center","container","flex-column","gap-3"],["role","status",1,"spinner-border","text-primary"],[3,"quiz"],[1,"visually-hidden"]],template:function(e,o){1&e&&t.DNE(0,k,2,1,"div",0)(1,C,3,0,"div",1),2&e&&t.vxM(o.loading()?1:0)},dependencies:[F.MD,b],changeDetection:0})}return i})()}}]);