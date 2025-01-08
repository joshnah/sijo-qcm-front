import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {
  CodeExecution,
  CodeExecutionResult,
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

  submitCodingQuestion(
    questionId: string,
    language: string,
    userCode: string,
  ): Observable<CodingSubmission> {
    return this.http.post<CodingSubmission>('/coding-questions', {
      questionId,
      language,
      userCode,
    });
  }

  fetchAllSubmissionsByQuestion(
    codingQuestionId: string,
  ): Observable<CodingSubmission[]> {
    return this.http.get<CodingSubmission[]>(
      `/coding-questions/${codingQuestionId}/submissions`,
    );
  }
  fetchCodeSubmission(submissionId: String): Observable<CodingSubmission> {
    return this.http.get<CodingSubmission>(
      `/coding-questions/submissions/${submissionId}`,
    );
  }
  executeCode(
    code: string,
    language: string,
    input: string,
  ): Observable<CodeExecutionResult> {
    return this.http.post<CodeExecutionResult>('/coding-questions/execute', {
      code,
      language,
      input,
    } as CodeExecution);
  }
}