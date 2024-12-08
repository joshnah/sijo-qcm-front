import { inject, Injectable, signal } from '@angular/core';
import { Quiz, QuizAnswer } from '../../../shared/models/quiz.model';
// import { SampleQuiz } from '../mocks/quiz.mock';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {
  Submission,
  SubmissionConfirmation,
} from '../../../shared/models/submission.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  http = inject(HttpClient);
  constructor() {}
  quizzesSignal = signal<Quiz[]>([]);
  quizzes = this.quizzesSignal.asReadonly();

  submit(
    answers: QuizAnswer,
    quizId: string
  ): Observable<SubmissionConfirmation> {
    const serializedAnswers = Object.fromEntries(
      Object.entries(answers).map(([key, value]) => [key, Array.from(value)])
    );
    return this.http
      .post<SubmissionConfirmation>('/submissions', {
        answers: serializedAnswers,
        quizId,
      })
      .pipe(
        catchError((err) => {
          throw 'Error while fetching /submissions: ' + err;
        })
      );
  }

  fetchQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('/quizzes').pipe(
      tap((quizzes) => {
        this.quizzesSignal.set(quizzes);
      })
    );
  }

  fetchQuizInfo(quizId: string): Observable<Quiz> {
    const quiz = this.quizzes().find((quiz) => quiz._id === quizId);
    if (quiz) {
      return of(quiz);
    }
    return this.http.get<Quiz>(`/quizzes/${quizId}?type=info`).pipe(
      catchError((err) => {
        console.error('Error while fetching quiz info:', err);
        return throwError(
          () => new Error('Error while fetching quiz info: ' + err)
        );
      })
    );
  }

  fetchQuizWithQuestions(quizId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`/quizzes/${quizId}?type=questions`).pipe(
      catchError((err) => {
        console.error('Error while fetching quiz questions:', err);
        return throwError(
          () => new Error('Error while fetching quiz questions: ' + err)
        );
      })
    );
  }

  fetchSubmission(submissionId: String): Observable<Submission> {
    return this.http.get<any>(`/submissions/${submissionId}`).pipe(
      map((submission) => {
        submission.answers = this.transformToQuizAnswer(submission.answers);
        submission.correctAnswers = this.transformToQuizAnswer(
          submission.correctAnswers
        );
        return submission;
      }),
      catchError((err) => {
        throw 'Error while fetching /submissions ' + err;
      })
    );
  }

  private transformToQuizAnswer(input: Record<string, string[]>): QuizAnswer {
    const quizAnswer: QuizAnswer = {};

    for (const [questionId, answers] of Object.entries(input)) {
      quizAnswer[questionId] = new Set(answers);
    }

    return quizAnswer;
  }
}
