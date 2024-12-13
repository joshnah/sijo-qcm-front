import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { QuizService } from './quiz.service';
import { Quiz } from '../../../shared/models/quiz.model';
import { provideHttpClient } from '@angular/common/http';
import { MockQuiz } from '../mocks/quiz.mock';

describe('QuizService', () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(QuizService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should fetch quiz info by ID if not in the signal', () => {
    const mockQuiz: Quiz = MockQuiz;

    service.fetchQuizInfo('1').subscribe((quiz) => {
      expect(quiz).toEqual(mockQuiz);
    });

    const req = httpMock.expectOne('/quizzes/1?type=info');
    expect(req.request.method).toBe('GET');
    req.flush(mockQuiz);
  });
});
