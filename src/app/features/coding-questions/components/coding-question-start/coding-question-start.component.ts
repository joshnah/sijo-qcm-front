import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { CodingQuestionsService } from '../../services/coding-questions.service';
import { ActivatedRoute } from '@angular/router';
import {
  CodingQuestion,
  CodingSubmission,
} from '../../../../shared/models/codingQuestion.model';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CodingSubmissionsListComponent } from '../coding-submissions-list/coding-submissions-list.component';
import { CodingSubmissionDetailsComponent } from '../coding-submission-details/coding-submission-details.component';
import { AlertService } from '../../../../core/alert/services/alert.service';
import { CodeRunComponent } from '../code-run/code-run.component';
import { JavaCodeGenerator } from '../../codeGenerators/java.generator';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-coding-question-start',
  standalone: true,
  imports: [
    EditorComponent,
    CodeRunComponent,
    FormsModule,
    NgbNavModule,
    CodingSubmissionsListComponent,
    CodingSubmissionDetailsComponent,
  ],
  templateUrl: './coding-question-start.component.html',
  styleUrl: './coding-question-start.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodingQuestionStartComponent implements OnInit {
  codingQuestionsService = inject(CodingQuestionsService);
  alertService = inject(AlertService);
  codingQuestion = signal<CodingQuestion | null>(null);
  active = 'description';
  currentSubmission = signal<CodingSubmission | null>(null);
  isSubmitting = signal(false);
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('id');
    if (questionId) {
      this.codingQuestionsService
        .getCodingQuestion(questionId)
        .subscribe((question) => {
          {
            this.codingQuestion.set(question);
            this.code = this.generateFunctionTemplate(question, 'java');
          }
        });
    }
  }
  // Monaco Editor Options
  editorOptions = { language: 'java' };
  code = '';
  // Placeholder for the submission logic
  submitSolution() {
    if (this.codingQuestion) {
      this.isSubmitting.set(true);
      this.codingQuestionsService
        .submitCodingQuestion(this.codingQuestion()!.id, 'java', this.code)
        .pipe(
          finalize(() => {
            this.isSubmitting.set(false);
          }),
        )
        .subscribe({
          next: (codingSubmission: CodingSubmission) => {
            this.alertService.setMessage({
              type: 'success',
              message: 'Code has been submitted',
            });
            this.selectSubmission(codingSubmission);
          },
        });
    }
  }

  selectSubmission(submission: CodingSubmission) {
    this.currentSubmission.set(submission);
    this.navigateToSubmissionTab();
  }

  generateFunctionTemplate(
    codingQuestion: CodingQuestion,
    language: string,
  ): string {
    const signature = codingQuestion.functionSignatures.find(
      (sig) => sig.language.toLowerCase() === language.toLowerCase(),
    );

    if (!signature) {
      throw new Error(`Function signature not found for language: ${language}`);
    }
    return JavaCodeGenerator.generateJavaCode(codingQuestion, signature);
  }

  private navigateToSubmissionTab() {
    this.active = 'submission-detail';
  }
}
