import{a as b}from"./chunk-2F7DOR6P.js";import{$ as f,Hb as E,Sa as a,Va as M,X as u,ca as d,da as g,kb as v,la as m,ra as p,sa as _,tb as w,ub as C,vb as y,z as l}from"./chunk-I64YHXKP.js";var R=["editorContainer"];var D=new f("NGX_MONACO_EDITOR_CONFIG"),N=!1,O,q=(()=>{class t{constructor(){this.config=d(D),this.onInit=new p,this._insideNg=!1}set insideNg(e){this._insideNg=e,this._editor&&(this._editor.dispose(),this.initMonaco(this._options,this.insideNg))}get insideNg(){return this._insideNg}ngAfterViewInit(){N?O.then(()=>{this.initMonaco(this._options,this.insideNg)}):(N=!0,O=new Promise(e=>{let i=this.config.baseUrl;if((i==="assets"||!i)&&(i="./assets/monaco/min/vs"),typeof window.monaco=="object"){this.initMonaco(this._options,this.insideNg),e();return}let o=n=>{let c=n||window.require,h={paths:{vs:`${i}`}};Object.assign(h,this.config.requireConfig||{}),c.config(h),c(["vs/editor/editor.main"],()=>{typeof this.config.onMonacoLoad=="function"&&this.config.onMonacoLoad(),this.initMonaco(this._options,this.insideNg),e()})};if(this.config.monacoRequire)o(this.config.monacoRequire);else if(window.require)if(window.require.config)o();else{var s=`${i}/loader.js`,r=new XMLHttpRequest;r.addEventListener("load",()=>{let n=document.createElement("script");n.type="text/javascript",n.text=["var nodeRequire = require;",r.responseText.replace('"use strict";',""),"var monacoAmdRequire = require;","require = nodeRequire;","require.nodeRequire = require;"].join(`
`),document.body.appendChild(n),o(window.monacoAmdRequire)}),r.open("GET",s),r.send()}else{let n=document.createElement("script");n.type="text/javascript",n.src=`${i}/loader.js`,n.addEventListener("load",()=>{o()}),document.body.appendChild(n)}}))}ngOnDestroy(){this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._editor&&(this._editor.dispose(),this._editor=void 0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=a({type:t,selectors:[["ng-component"]],viewQuery:function(i,o){if(i&1&&w(R,7),i&2){let s;C(s=y())&&(o._editorContainer=s.first)}},inputs:{insideNg:"insideNg"},outputs:{onInit:"onInit"},standalone:!1,decls:0,vars:0,template:function(i,o){},encapsulation:2})}}return t})(),B=(()=>{class t extends q{constructor(){super(...arguments),this.zone=d(_),this._value="",this.propagateChange=e=>{},this.onTouched=()=>{}}set options(e){this._options=Object.assign({},this.config.defaultOptions,e),this._editor&&(this._editor.dispose(),this.initMonaco(e,this.insideNg))}get options(){return this._options}set model(e){this.options.model=e,this._editor&&(this._editor.dispose(),this.initMonaco(this.options,this.insideNg))}writeValue(e){this._value=e||"",setTimeout(()=>{this._editor&&!this.options.model&&this._editor.setValue(this._value)})}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.onTouched=e}initMonaco(e,i){let o=!!e.model;if(o){let s=monaco.editor.getModel(e.model.uri||"");s?(e.model=s,e.model.setValue(this._value)):e.model=monaco.editor.createModel(e.model.value,e.model.language,e.model.uri)}i?this._editor=monaco.editor.create(this._editorContainer.nativeElement,e):this.zone.runOutsideAngular(()=>{this._editor=monaco.editor.create(this._editorContainer.nativeElement,e)}),o||this._editor.setValue(this._value),this._editor.onDidChangeModelContent(s=>{let r=this._editor.getValue();this.zone.run(()=>{this.propagateChange(r),this._value=r})}),this._editor.onDidBlurEditorWidget(()=>{this.onTouched()}),this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._windowResizeSubscription=l(window,"resize").subscribe(()=>this._editor.layout()),this.onInit.emit(this._editor)}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})()}static{this.\u0275cmp=a({type:t,selectors:[["ngx-monaco-editor"]],inputs:{options:"options",model:"model"},features:[E([{provide:b,useExisting:u(()=>t),multi:!0}]),M],decls:2,vars:0,consts:[["editorContainer",""],[1,"editor-container"]],template:function(i,o){i&1&&v(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;height:200px}.editor-container[_ngcontent-%COMP%]{width:100%;height:98%}"],changeDetection:0})}}return t})();function k(t={}){return g([{provide:D,useValue:t}])}export{B as a,k as b};