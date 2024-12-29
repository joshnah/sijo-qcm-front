import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CodingQuestionsService } from '../../services/coding-questions.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coding-questions-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coding-questions-list.component.html',
  styleUrl: './coding-questions-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodingQuestionsListComponent implements OnInit {
  codingQuestionsService = inject(CodingQuestionsService)

  ngOnInit(): void {
    if (!this.codingQuestionsService.codingQuestions().length)
      this.codingQuestionsService.fetchCodingQuestions();
  }
}
