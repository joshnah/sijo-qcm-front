import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Quiz } from '../../../../shared/models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Submission } from '../../../../shared/models/submission.model';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
})
export class SubmissionComponent implements OnInit {
  quizService = inject(QuizService);
  route = inject(ActivatedRoute);
  quiz!: Quiz;
  submission!: Submission;
  loading = signal(true);

  ngOnInit(): void {
    const submissionId = this.route.snapshot.paramMap.get('id');
    if (submissionId) {
      this.quizService.fetchSubmission(submissionId).subscribe((submission) => {
        this.submission = submission;
        this.quizService.fetchQuizWithQuestions(submission.quizId).subscribe((quiz:Quiz)=>{
          this.quiz = quiz;
          this.loading.set(false)
        })
      });

    }
  }
  isAnswerselected(questionId: string, answerId: string) {
    return this.submission?.answers[questionId].has(answerId);
  }
  isCorrectAnswer(questionId: string, answerId: string) {
    return this.submission?.correctAnswers[questionId].has(answerId);
  }

  getScore(){
    return this.submission.score * 100;  
  }

  getDetailScore(){
    const nbCorrect = this.submission.score * this.quiz.questions.length
    return `${nbCorrect} / ${this.quiz.questions.length}`
  }
}
