import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Quiz } from '../../../../shared/models/quiz.model';
import { Submission } from '../../../../shared/models/submission.model';
import { QuizService } from '../../services/quiz.service';
import { SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-submission',
  imports: [],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
})
export class SubmissionComponent implements OnInit {
  submissionService = inject(SubmissionService);
  quizService = inject(QuizService);
  route = inject(ActivatedRoute);
  quiz!: Quiz;
  submission!: Submission;
  loading = signal(true);

  ngOnInit(): void {
    const submissionId = this.route.snapshot.paramMap.get('id');
    if (submissionId) {
      this.loadSubmissionAndQuiz(submissionId);
    }
  }
  isAnswerselected(questionId: string, answerId: string) {
    return this.submission?.answers[questionId].has(answerId);
  }
  isCorrectAnswer(questionId: string, answerId: string) {
    return this.submission?.correctAnswers[questionId].has(answerId);
  }

  getScore() {
    return this.submission.score * 100;
  }

  getDetailScore() {
    const nbCorrect = this.submission.score * this.quiz.questions.length;
    return `${nbCorrect} / ${this.quiz.questions.length}`;
  }

  private loadSubmissionAndQuiz(submissionId: string): void {
    this.submissionService
      .fetchSubmission(submissionId)
      .pipe(
        switchMap((submission) => {
          this.submission = submission;
          return this.quizService.fetchQuizWithQuestions(submission.quizId);
        }),
      )
      .subscribe({
        next: (quiz: Quiz) => {
          this.quiz = quiz;
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Error loading submission or quiz:', error);
          this.loading.set(false); // Handle error by updating the loading state
        },
      });
  }
}
