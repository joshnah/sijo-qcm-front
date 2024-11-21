import { Component } from '@angular/core';
import { SampleQuiz } from '../../mocks/quiz.mock';
import { QuestionsContainerComponent } from '../questions-container/questions-container.component';

@Component({
  selector: 'app-quiz-taker',
  standalone: true,
  imports: [QuestionsContainerComponent],
  templateUrl: './quiz-taker.component.html',
  styleUrl: './quiz-taker.component.css',
})
export class QuizTakerComponent {
  haveStarted = false
  quiz = SampleQuiz;
}
