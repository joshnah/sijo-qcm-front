"use strict";(self.webpackChunksijo_qcm_front=self.webpackChunksijo_qcm_front||[]).push([[76],{593:(p,u,s)=>{s.d(u,{p:()=>z});var o=s(4438),c=s(1562),i=s(9437),h=s(8141),_=s(6354);let z=(()=>{class e{http=(0,o.WQX)(c.Qq);constructor(){}quizzesSignal=(0,o.vPA)([]);quizzes=this.quizzesSignal.asReadonly();submit(r,t){const a=Object.fromEntries(Object.entries(r).map(([n,f])=>[n,Array.from(f)]));return this.http.post("/submissions",{answers:a,quizId:t}).pipe((0,i.W)(n=>{throw"Error while fetching /submissions: "+n}))}fetchQuizzes(){return this.http.get("/quizzes").pipe((0,h.M)(r=>{this.quizzesSignal.set(r)}))}fetchQuiz(r){return this.http.get(`/quizzes/${r}`).pipe((0,i.W)(t=>{throw"Error while fetching /quizzes "+t}))}fetchSubmission(r){return this.http.get(`/submissions/${r}`).pipe((0,_.T)(t=>(t.answers=this.transformToQuizAnswer(t.answers),t.correctAnswers=this.transformToQuizAnswer(t.correctAnswers),t)),(0,i.W)(t=>{throw"Error while fetching /submissions "+t}))}transformToQuizAnswer(r){const t={};for(const[a,n]of Object.entries(r))t[a]=new Set(n);return t}static \u0275fac=function(t){return new(t||e)};static \u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);