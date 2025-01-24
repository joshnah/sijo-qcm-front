import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  effect,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../../../shared/models/quiz.model';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../../core/alert/services/alert.service';
import { MockQuiz } from '../../mocks/quiz.mock';
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { finalize } from 'rxjs';
import { SpinnerService } from '../../../../shared/services/spinner.service';
@Component({
  selector: 'app-quiz-edit',
  imports: [FormsModule, NgbNavModule, EditorComponent],
  templateUrl: './quiz-edit.component.html',
  styleUrl: './quiz-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  private alertService = inject(AlertService);
  private spinnerService = inject(SpinnerService);
  private quizBase?: Quiz;

  active = signal(1);
  quiz = signal<Quiz | null>(null);
  jsonQuiz = signal('');
  editorOptions = {
    language: 'json',
    scrollBeyondLastLine: false,
    lineHeight: 20,
    fontSize: 14,
    wordWrap: 'on',
    wrappingIndent: 'indent',
    theme: 'customTheme',
    automaticLayout: true, // Ajuste automatiquement la taille de l'éditeur
  };

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.fetchQuiz(quizId);
    } else {
      const { _id, ...emptyQuiz } = JSON.parse(JSON.stringify(MockQuiz));
      this.quiz.set(emptyQuiz);
    }
  }
  generateQuiz(topics: string, nbQuestions: string) {
    this.spinnerService.openGlobalSpinner();
    this.quizService
      .generateQuiz(topics, nbQuestions)
      .pipe(
        finalize(() => {
          this.spinnerService.closeGlobalSpinner();
          this.alertService.setMessage({
            message: 'Quiz has been generated',
            type: 'success',
          });
        }),
      )
      .subscribe((result) => {
        this.jsonQuiz.set(JSON.stringify(result, null, 2));
        this.active.set(2);
      });
  }
  save(): void {
    if (!this.quiz()) {
      return;
    }

    this.quizService.updateQuiz(this.quiz()!).subscribe({
      next: (quiz) => {
        this.quiz.set(quiz);
        this.alertService.setMessage({
          message: 'Quiz has been updated',
          type: 'success',
        });
      },
      error: (err) => {
        this.alertService.setMessage({
          message: `Error while updating quiz:  ${err?.description}`,
          type: 'danger',
        });
      },
    });
  }

  reset(): void {
    if (this.quizBase) {
      this.quiz.set(JSON.parse(JSON.stringify(this.quizBase)));
      this.jsonQuiz.set(JSON.stringify(this.quizBase, null, 2));
    }
  }

  delete(): void {
    this.quizService.deleteQuiz(this.quiz()!).subscribe(() => {
      this.router.navigate(['/quizzes']);
      this.alertService.setMessage({
        message: 'Quiz has been deleted',
        type: 'success',
      });
    });
  }

  create(): void {
    this.quizService.createQuiz(this.quiz()!).subscribe(() => {
      this.router.navigate(['/quizzes']);
      this.alertService.setMessage({
        message: 'Quiz has been created',
        type: 'success',
      });
    });
  }

  fetchQuiz(quizId: string) {
    this.quizService.fetchFullQuizById(quizId).subscribe((quiz) => {
      if (quiz) {
        this.quizBase = JSON.parse(JSON.stringify(quiz));
        this.quiz.set(JSON.parse(JSON.stringify(quiz)));
        this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
      }
    });
  }

  checkJson() {
    try {
      this.quiz.set(JSON.parse(this.jsonQuiz()));
    } catch (error) {
      this.alertService.setMessage({
        message: 'Invalid JSON format. Please correct it.',
        type: 'danger',
      });
      return false;
    }
    return true;
  }

  addQuestion(): void {
    this.quiz.update((quiz) => {
      const newId = `q${(quiz?.questions.length || 0) + 1}`;
      quiz?.questions.push({
        id: newId,
        text: 'Text sample',
        answers: [
          { id: 'a1', option: 'option 1', isCorrect: true },
          { id: 'a2', option: 'option 2' },
          { id: 'a3', option: 'option 3' },
        ],
      });
      return quiz;
    });
  }

  addAnswer(idxQuestion: number) {
    this.quiz.update((quiz) => {
      quiz?.questions[idxQuestion].answers.push({
        id: `a${quiz?.questions[idxQuestion].answers.length + 1}`,
        option: 'new option',
      });
      ``;
      return quiz;
    });
  }

  deleteAnswer(questionIndex: number, answerIndex: number) {
    this.quiz.update((quiz) => {
      const answers = quiz?.questions[questionIndex].answers;
      answers?.splice(answerIndex, 1);

      answers?.forEach((answer, idx) => {
        answer.id = `a${idx + 1}`;
      });

      return quiz;
    });
  }
  deleteQuestion(questionIndex: number) {
    this.quiz.update((quiz) => {
      const questions = quiz?.questions;
      questions?.splice(questionIndex, 1);

      // Re-align question IDs and their answers' IDs
      questions?.forEach((question, qIdx) => {
        question.id = `q${qIdx + 1}`;
      });

      return quiz;
    });
  }
  onTabChange(event: NgbNavChangeEvent): void {
    // Change from json to form
    if (event.nextId === 1 && !this.checkJson()) {
      event.preventDefault();
    } else {
      // From form to Json
      this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
    }
  }
  get isEditing() {
    return !!this.route.snapshot.paramMap.get('id');
  }
}
