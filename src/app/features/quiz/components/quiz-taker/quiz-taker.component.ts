import { Component, OnInit, computed, inject } from '@angular/core';
import { QuestionsContainerComponent } from '../questions-container/questions-container.component';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-taker',
  standalone: true,
  imports: [CommonModule, QuestionsContainerComponent],
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css'],
})
export class QuizTakerComponent implements OnInit {
  haveStarted = false;
  // Reactively read quizzes from the signal
  quizzes = computed(() => this.quizService.quizSignal());
  selectedQuiz = computed(() => (this.quizzes() ? this.quizzes() : null)); // Default to the first quiz if available

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.fetchAndSetQuizzes().subscribe({
      error: (err) => console.error('Error loading quizzes:', err),
    });
  }

  startQuiz(): void {
    this.haveStarted = true;
  }
}
