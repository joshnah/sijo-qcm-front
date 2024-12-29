import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { CodingQuestionsService } from '../../services/coding-questions.service';
import { CodingQuestionsListComponent } from './coding-questions-list.component';
import { signal } from '@angular/core';

describe('CodingQuestionsListComponent', () => {
  let component: CodingQuestionsListComponent;
  let fixture: ComponentFixture<CodingQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingQuestionsListComponent],
      providers: [
        {
          provide: CodingQuestionsService,
          useValue: {
            codingQuestions: signal([]),
            fetchCodingQuestions: () => {},
          },
        },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
