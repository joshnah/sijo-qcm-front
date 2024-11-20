import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Quiz, SelectedAnswer } from '../../../../shared/models/quiz.model';

@Component({
  selector: 'app-questions-container',
  standalone: true,
  imports: [],
  templateUrl: './questions-container.component.html',
  styleUrl: './questions-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsContainerComponent implements OnInit {
  quiz = input.required<Quiz>();
  selectedAnswer: WritableSignal<Record<number, Set<number>>> = signal({});

  ngOnInit(): void {
    const newRecord: Record<number, Set<number>> = {};
    this.quiz().questions.forEach((question) => {
      newRecord[question.id] = new Set();
    });
    this.selectedAnswer.set(newRecord);
  }

  selectAnswer(questionId: number, answerId: number): void {
    this.selectedAnswer.update((currentSelection) => {
      const answerSet = currentSelection[questionId];
      if (answerSet.has(answerId)) {
        answerSet.delete(answerId);
      } else {
        answerSet.add(answerId);
      }
      return currentSelection;
    });
  }

  // isChecked(questionId: number, answerId: number){
  //   return this.selectedAnswer()[questionId].has(answerId);
  // }
}
