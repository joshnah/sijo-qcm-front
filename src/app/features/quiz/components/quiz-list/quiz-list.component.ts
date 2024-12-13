import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../../../shared/models/quiz.model';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizListComponent implements OnInit {
  private quizService = inject(QuizService);
  private router = inject(Router);
  private authService = inject(AuthService);

  quizzes: Signal<Quiz[]> = this.quizService.quizzesSignal;
  hasTutorAcess = false;

  ngOnInit(): void {
    this.hasTutorAcess = this.authService.hasTutorAccess();
    this.quizService.fetchQuizzes();
  }
}