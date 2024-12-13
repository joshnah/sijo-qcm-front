import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEditComponent } from './quiz-edit.component';
import { provideRouter } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

describe('QuizEditComponent', () => {
  let component: QuizEditComponent;
  let fixture: ComponentFixture<QuizEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizEditComponent],
      providers: [
        provideRouter([]),
        {
          provide: QuizService,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
