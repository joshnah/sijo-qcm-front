import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizEditComponent } from './quiz-edit.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { provideRouter } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { AlertService } from '../../../../core/alert/services/alert.service';
import { MockQuiz } from '../../mocks/quiz.mock';

describe('QuizEditComponent', () => {
  let component: QuizEditComponent;
  let fixture: ComponentFixture<QuizEditComponent>;
  let quizServiceMock: any;
  let alertServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    quizServiceMock = {
      fetchFullQuizById: jasmine
        .createSpy('fetchFullQuizById')
        .and.returnValue(of({ ...MockQuiz })),
      updateQuiz: jasmine.createSpy('updateQuiz').and.returnValue(of(MockQuiz)),
      deleteQuiz: jasmine.createSpy('deleteQuiz').and.returnValue(of({})),
      createQuiz: jasmine.createSpy('createQuiz').and.returnValue(of(MockQuiz)),
    };

    alertServiceMock = {
      setMessage: jasmine.createSpy('setMessage'),
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      imports: [QuizEditComponent, FormsModule, NgbNavModule],
      providers: [
        provideRouter([]),
        { provide: QuizService, useValue: quizServiceMock },
        { provide: AlertService, useValue: alertServiceMock },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '123' } } },
        },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch quiz on init', () => {
    expect(quizServiceMock.fetchFullQuizById).toHaveBeenCalledWith('123');
  });

  it('should prevent switching to form if JSON is not checked', () => {
    const event: NgbNavChangeEvent = {
      activeId: 2,
      nextId: 1,
      preventDefault: jasmine.createSpy(),
    };
    component.jsonQuiz.set("");

    component.onTabChange(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(alertServiceMock.setMessage).toHaveBeenCalledWith({
      message: 'Invalid JSON format. Please correct it.',
      type: 'danger',
    });
  });

  it('should add a question', () => {
    console.log(component.quiz());

    const initialLength = component.quiz()?.questions.length || 0;
    component.addQuestion();

    expect(component.quiz()?.questions.length).toBe(initialLength + 1);
  });

  it('should add an answer to a question', () => {
    component.addQuestion();
    const questionIndex = 0;
    const initialLength =
      component.quiz()?.questions[questionIndex]?.answers.length || 0;

    component.addAnswer(questionIndex);

    expect(component.quiz()?.questions[questionIndex]?.answers.length).toBe(
      initialLength + 1,
    );
  });

  it('should delete an answer and re-align IDs', () => {
    component.addQuestion(); // add question with 3 mock answers
    const questionIndex = component.quiz()!.questions.length - 1;
    const answers = component.quiz()?.questions[questionIndex]?.answers;

    expect(answers?.length).toBe(3);

    component.addAnswer(questionIndex);
    component.addAnswer(questionIndex);

    component.deleteAnswer(questionIndex, 0);

    expect(answers?.length).toBe(4);
    expect(answers?.[0].id).toBe('a1'); // Check ID re-alignment
  });

  it('should delete a question and re-align IDs', () => {
    const questions = component.quiz()?.questions;
    expect(questions?.length).toBe(1);

    component.addQuestion();
    component.addQuestion();

    component.deleteQuestion(0);

    expect(questions?.length).toBe(2);
    expect(questions?.[0].id).toBe('q1'); // Check ID re-alignment
  });

  it('should reset the quiz', () => {
    component.addQuestion();
    component.reset();
    expect(component.quiz()).toEqual(MockQuiz);
  });
});
