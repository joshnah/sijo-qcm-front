import{a as g}from"./chunk-QDBR6KCD.js";import{Pa as u,Y as e,ca as r,o}from"./chunk-I64YHXKP.js";var d=class s{http=r(g);codingQuestionsSignal=u([]);codingQuestions=this.codingQuestionsSignal.asReadonly();fetchCodingQuestions(){this.http.get("/coding-questions").subscribe({next:i=>{this.codingQuestionsSignal.set(i)},error:i=>console.error("Error fetching coding questions")})}getCodingQuestion(i){let t=this.codingQuestions().find(n=>n.id===i);return t?o(t):this.fetchCodingQuestion(i)}fetchCodingQuestion(i){return this.http.get(`/coding-questions/${i}`)}submitCodingQuestion(i,t,n){return this.http.post("/coding-questions",{questionId:i,language:t,userCode:n})}fetchAllSubmissionsByQuestion(i){return this.http.get(`/coding-questions/${i}/submissions`)}fetchCodeSubmission(i){return this.http.get(`/coding-questions/submissions/${i}`)}executeCode(i,t,n){return this.http.post("/coding-questions/execute",{code:i,language:t,input:n})}static \u0275fac=function(t){return new(t||s)};static \u0275prov=e({token:s,factory:s.\u0275fac,providedIn:"root"})};export{d as a};