import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../../../shared/models/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent implements OnInit {
  private quizService = inject(QuizService);
  private router = inject(Router);
  quizzes: Signal<Quiz[]> = this.quizService.quizzesSignal;


  ngOnInit(): void {
    this.quizService.fetchQuizzes().subscribe({
      error: (err) => console.error('Error loading quizzes:', err),
    });
  }


  selectQuiz(quiz: Quiz):void{
    this.router.navigate([`/quiz/${quiz.id}`]);
  }


}
