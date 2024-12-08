import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Submission } from '../../../shared/models/submission.model';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  http = inject(HttpClient);

  constructor() {}

  fetchSubmissionsIdList(quizId: string): Observable<Submission[]> {
    return this.http
      .get<Submission[]>(`/quizzes/${quizId}/submissions`);
  }
}
