import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListComponent } from './quiz-list.component';
import { QuizService } from '../../services/quiz.service';
import { of } from 'rxjs';
import { signal } from '@angular/core';
import { MockQuiz } from '../../mocks/quiz.mock';

describe('QuizListComponent', () => {
  let component: QuizListComponent;
  let fixture: ComponentFixture<QuizListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizListComponent],
      providers: [
        {
          provide: QuizService,
          useValue: {fetchQuizzes : ()=>of()}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizListComponent);
    component = fixture.componentInstance;
    component.quizzes = signal([MockQuiz]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
