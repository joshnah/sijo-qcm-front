import { Component, OnInit, Signal, computed, inject } from '@angular/core';
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
})
export class QuizTakerComponent implements OnInit {
  haveStarted = false;
  // Inject QuizService
  private quizService = inject(QuizService);
  // Reactively read quizzes from the signal
  quizzes: Signal<Quiz[]> = this.quizService.quizzesSignal;
  selectedQuizId: string | null = null; // Store selected quiz ID
  loading = false; // Loading state for fetching quiz details


  ngOnInit(): void {
    this.quizService.fetchAndSetQuizzes().subscribe({
      error: (err) => console.error('Error loading quizzes:', err),
    });
  }

  // Select a quiz by its ID
  // Fetch and set the selected quiz based on its ID
  selectQuiz(quiz: any): void {
    this.selectedQuizId = quiz.id;
    this.loading = true;

    this.quizService.fetchAndSetAQuiz(quiz.id).subscribe({
      next: () => {
        this.loading = false;
        this.haveStarted = true; // Start the quiz after it loads
      },
      error: (err) => {
        console.error('Error fetching quiz details:', err);
        this.loading = false;
      },
    });
  }

  selectedQuiz = computed(() => {
    const quiz = this.quizService.quizSignal();
    return quiz || null;
  });

  startQuiz(): void {
    this.haveStarted = true;
  }
}
