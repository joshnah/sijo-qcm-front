"use strict";(self.webpackChunksijo_qcm_front=self.webpackChunksijo_qcm_front||[]).push([[706],{4706:(b,u,s)=>{s.r(u),s.d(u,{AuthPageComponent:()=>m});var t=s(4438),e=s(4341),o=s(749),l=s(2773);function c(n,d){1&n&&(t.j41(0,"a",13),t.EFF(1," Signup "),t.k0s())}function g(n,d){1&n&&(t.j41(0,"a",14),t.EFF(1," Already have an account? "),t.k0s())}let m=(()=>{class n{authService=(0,t.WQX)(l.u);route=(0,t.WQX)(o.nX);router=(0,t.WQX)(o.Ix);destroyRef=(0,t.WQX)(t.abz);isSubmitting=!1;title="";authType="";ngOnInit(){this.authType=this.route.snapshot.url.at(-1).path,this.title="signin"===this.authType?"Sign in":"Sign up"}onSubmit(i){this.isSubmitting=!0,"signin"===this.authType?this.login(i.value):this.signup(i.value)}login(i){this.authService.login(i).subscribe({next:()=>{this.router.navigate(["/"])},error:r=>{console.error(r),this.isSubmitting=!1}})}signup(i){this.authService.register(i).subscribe({next:()=>{this.router.navigate(["/auth/signin"])},error:r=>{console.error(r),this.isSubmitting=!1}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=t.VBU({type:n,selectors:[["app-auth-page"]],standalone:!0,features:[t.aNF],decls:20,vars:3,consts:[["myForm","ngForm"],[1,"container","mt-5"],[1,"justify-content-center"],[1,"text-center","mb-5","display-4"],[1,"card","p-5","shadow-lg",3,"submit"],[1,"mb-4"],["for","login",1,"form-label","fs-4"],["type","text","name","login","id","login","aria-describedby","loginInput","placeholder","Enter your login","required","","ngModel","",1,"form-control","form-control-lg"],["for","password",1,"form-label","fs-4"],["type","password","name","password","id","password","aria-describedby","passwordInput","placeholder","Enter your password","required","","ngModel","",1,"form-control","form-control-lg"],[1,"d-grid","mb-4"],["type","submit",1,"btn","btn-primary","btn-lg",3,"disabled"],[1,"text-center"],["routerLink","/auth/signup","routerLinkActive","active","aria-current","page",1,"btn","btn-secondary","btn-lg"],["routerLink","/auth/signin","routerLinkActive","active","aria-current","page",1,"btn","btn-link","fs-5"]],template:function(r,a){if(1&r){const p=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"h1",3),t.EFF(3),t.k0s(),t.j41(4,"form",4,0),t.bIt("submit",function(){t.eBV(p);const h=t.sdS(5);return t.Njj(a.onSubmit(h))}),t.j41(6,"div",5)(7,"label",6),t.EFF(8,"Login"),t.k0s(),t.nrm(9,"input",7),t.k0s(),t.j41(10,"div",5)(11,"label",8),t.EFF(12,"Password"),t.k0s(),t.nrm(13,"input",9),t.k0s(),t.j41(14,"div",10)(15,"button",11),t.EFF(16," Submit "),t.k0s()(),t.j41(17,"div",12),t.DNE(18,c,2,0,"a",13)(19,g,2,0,"a",14),t.k0s()()()()}2&r&&(t.R7$(3),t.JRh(a.title),t.R7$(12),t.Y8G("disabled",a.isSubmitting),t.R7$(3),t.vxM("signin"===a.authType?18:19))},dependencies:[e.YN,e.qT,e.me,e.BC,e.cb,e.YS,e.vS,e.cV,o.Wk,o.wQ]})}return n})()}}]);