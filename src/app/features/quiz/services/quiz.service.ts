import { inject, Injectable, signal } from '@angular/core';
import { Quiz, SelectedResponses } from '../../../shared/models/quiz.model';
// import { SampleQuiz } from '../mocks/quiz.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SampleQuiz } from '../mocks/quiz.mock';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  http = inject(HttpClient)
  constructor() { }
  quizSignal = signal<Quiz | null>(null);
  quizzesSignal = signal<Quiz[]>([]);
  quiz$ = this.quizSignal.asReadonly();

  // TODO: Config quiz backend service
  sendResponses(selectedResponses: SelectedResponses){
    alert("Sending response")
  }


  fetchAndSetQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>("http://localhost:8080/qcm").pipe(
      tap((quizzes) => {
        this.quizzesSignal.set(quizzes);
      })
    );
  }

  fetchAndSetAQuiz(quizId : String) : Observable<Quiz> {
    return this.http.get<Quiz>(`http://localhost:8080/qcm/${quizId}`).pipe(
      tap((quiz) => {
        this.quizSignal.set(quiz);
      })
    );
  }


}
