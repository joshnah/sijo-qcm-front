import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../../../shared/models/quiz.model';
import { QuizHistoryComponent } from '../quiz-history/quiz-history.component';
import { SubmissionService } from '../../services/submission.service';
import { combineLatest } from 'rxjs';
import { Submission } from '../../../../shared/models/submission.model';

@Component({
  selector: 'app-quiz-info',
  standalone: true,
  imports: [QuizHistoryComponent],
  templateUrl: './quiz-info.component.html',
  styleUrl: './quiz-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizInfoComponent {
  quiz!: Quiz;
  loading = signal(true);
  submissions: Submission[] = [];

  private route = inject(ActivatedRoute);
  private quizService = inject(QuizService);
  private submissionService = inject(SubmissionService);
  private router = inject(Router);

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (!quizId) {
      return;
    }

    combineLatest([
      this.quizService.fetchQuizInfo(quizId),
      this.submissionService.fetchSubmissionsIdList(quizId),
    ]).subscribe(([quiz, submissions]) => {
      this.quiz = quiz;
      this.submissions = submissions;
      this.loading.set(false);
    });
  }

  start() {
    this.router.navigate(['take'], { relativeTo: this.route });
  }
}
