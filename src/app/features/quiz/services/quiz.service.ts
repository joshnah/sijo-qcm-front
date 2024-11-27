import { inject, Injectable, signal } from '@angular/core';
import {
  Quiz,
  QuizAnswer,
  Submission,
  SubmissionRequest,
} from '../../../shared/models/quiz.model';
// import { SampleQuiz } from '../mocks/quiz.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SampleQuiz } from '../mocks/quiz.mock';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  http = inject(HttpClient);
  constructor() {}
  quizzesSignal = signal<Quiz[]>([]);
  quizzes = this.quizzesSignal.asReadonly();

  submit(answers: QuizAnswer, quizId: string): Observable<Submission> {
    return this.http.post<Submission>('/submission', {
      answers,
      quizId,
    });
  }

  fetchQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('/quiz').pipe(
      tap((quizzes) => {
        this.quizzesSignal.set(quizzes);
      })
    );
  }

  fetchQuiz(quizId: String): Observable<Quiz> {
    return this.http.get<Quiz>(`/quiz/${quizId}`);
  }
}
