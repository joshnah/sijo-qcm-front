import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import { QuizService } from '../../services/quiz.service';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../../../core/auth/services/auth.service';

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionComponent],
      providers: [
        {
          provide: QuizService,
          useValue: {}
        },
        {
          provide: AuthService,
          useValue: { isAuthenticated: () => {} },
        },
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
