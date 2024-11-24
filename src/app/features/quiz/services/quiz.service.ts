import { inject, Injectable, signal } from '@angular/core';
import { Quiz, SelectedResponses } from '../../../shared/models/quiz.model';
import { SampleQuiz } from '../mocks/quiz.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  http = inject(HttpClient)
  constructor() { }
  quizSignal = signal<Quiz[]>([])
  quiz$ = this.quizSignal.asReadonly();

  // TODO: Config quiz backend service
  sendResponses(selectedResponses: SelectedResponses){
    alert("Sending response")
  }


  fetchQuiz():void{
   this.quizSignal.set([SampleQuiz]);
  }


}
