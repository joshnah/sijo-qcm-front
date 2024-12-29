import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {
  CodingQuestion,
  CodingSubmission,
} from '../../../shared/models/codingQuestion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodingQuestionsService {
  private http = inject(HttpClient);
  private readonly codingQuestionsSignal = signal<CodingQuestion[]>([]);
  readonly codingQuestions = this.codingQuestionsSignal.asReadonly();

  fetchCodingQuestions() {
    this.http.get<CodingQuestion[]>('/coding-questions').subscribe({
      next: (codingQuestions) => {
        this.codingQuestionsSignal.set(codingQuestions);
      },
      error: (err: any) => console.error('Error fetching coding questions'),
    });
  }

  getCodingQuestion(codingQuestionId: string): Observable<CodingQuestion> {
    const codingQuestion = this.codingQuestions().find(
      (question) => question.id === codingQuestionId,
    );
    if (codingQuestion) {
      return of(codingQuestion);
    } else {
      return this.fetchCodingQuestion(codingQuestionId);
    }
  }

  fetchCodingQuestion(codingQuestionId: string) {
    return this.http.get<CodingQuestion>(
      `/coding-questions/${codingQuestionId}`,
    );
  }

  submitCodingQuestion(questionId: string, language: string, userCode: string) {
    this.http
      .post('/coding-questions', {
        questionId,
        language,
        userCode,
      })
      .subscribe((a) => console.log(a));
  }

  fetchAllSubmissionsByQuestion(
    codingQuestionId: string,
  ): Observable<CodingSubmission[]> {
    return this.http.get<CodingSubmission[]>(
      `/coding-questions/${codingQuestionId}/submissions`,
    );
  }
}
