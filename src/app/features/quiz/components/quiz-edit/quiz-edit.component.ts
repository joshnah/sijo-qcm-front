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

@Component({
  selector: 'app-quiz-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quiz-edit.component.html',
  styleUrl: './quiz-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  private alertService = inject(AlertService);
  isEditing = false;

  quiz = signal<Quiz | null>(null);
  jsonQuiz = signal('');

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.fetchQuiz(quizId);
      this.isEditing = true;
    } else {
      const { _id, ...emptyQuiz } = MockQuiz;
      this.quiz.set(emptyQuiz);
      this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
    }
  }

  save(): void {
    try {
      const quiz = JSON.parse(this.jsonQuiz());
      this.quizService.updateQuiz(quiz).subscribe({
        next: (quiz) => {
          this.quiz.set(quiz);
          this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
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
    } catch (error) {
      this.alertService.setMessage({
        message: 'Invalid JSON format. Please correct it.',
        type: 'danger',
      });
    }
  }

  reset(): void {
    this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
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
      this.quiz.set(quiz);
      this.jsonQuiz.set(JSON.stringify(this.quiz(), null, 2));
    });
  }
}
