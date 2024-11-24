import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Quiz } from '../../../../shared/models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { FinishConfirmationComponent } from '../finish-confirmation/finish-confirmation.component';

@Component({
  selector: 'app-questions-container',
  standalone: true,
  imports: [],
  templateUrl: './questions-container.component.html',
  styleUrl: './questions-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsContainerComponent implements OnInit {
  showResult = signal(false);
  quiz = input.required<Quiz>();
  modalService = inject(NgbModal);
  quizService = inject(QuizService);

  selectedResponses: WritableSignal<Record<string, Set<string>>> = signal({});

  ngOnInit(): void {
    const newRecord: Record<string, Set<string>> = {};
    this.quiz().questions.forEach((question) => {
      newRecord[question.id] = new Set();
    });
    this.selectedResponses.set(newRecord);
  }

  selectAnswer(questionId: string, answerId: string): void {
    this.selectedResponses.update((currentSelection) => {
      const answerSet = currentSelection[questionId];
      if (answerSet.has(answerId)) {
        answerSet.delete(answerId);
      } else {
        answerSet.add(answerId);
      }
      return currentSelection;
    });
  }

  openFinishConfirmationPopup() {
    this.modalService.open(FinishConfirmationComponent).closed.subscribe(() => {
      this.quizService.sendResponses({ responses: this.selectedResponses() });
      this.showResult.set(true)
    });
  }


}
