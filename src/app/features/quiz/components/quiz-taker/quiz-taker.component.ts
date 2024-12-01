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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-taker',
  standalone: true,
  imports: [CommonModule, QuestionsContainerComponent],
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizTakerComponent implements OnInit {
  route = inject(ActivatedRoute);
  loading = signal(true);
  haveStarted = false;
  quiz!: Quiz;

  private quizService = inject(QuizService);

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.quizService.fetchQuiz(quizId).subscribe((quiz) => {
        this.quiz = quiz;
        this.loading.set(false);
      });
    }
  }
}
