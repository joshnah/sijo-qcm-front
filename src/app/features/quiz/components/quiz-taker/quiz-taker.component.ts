import {
  Component,
  Input,
  OnInit,
  signal,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { QuestionsContainerComponent } from '../questions-container/questions-container.component';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../../../shared/models/quiz.model';

@Component({
  selector: 'app-quiz-taker',
  standalone: true,
  imports: [CommonModule, QuestionsContainerComponent],
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuizTakerComponent implements OnInit {
  @Input() quizId: string = '';
  loading = signal(true);
  haveStarted = false;
  quiz!: Quiz;

  private quizService = inject(QuizService);

  ngOnInit(): void {
    this.quizService.fetchQuiz(this.quizId).subscribe({
      next: (quiz) => {
        this.quiz = quiz;
        this.loading.set(false);
      },
      error: (err) => console.error('Error loading quizzes:', err),
    });
  }
}
