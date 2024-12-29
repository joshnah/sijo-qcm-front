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

@Component({
  selector: 'app-coding-question-start',
  standalone: true,
  imports: [
    EditorComponent,
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
  codingQuestion = signal<CodingQuestion | null>(null);
  active = 'description';
  currentSubmission?: CodingSubmission;
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
      this.codingQuestionsService.submitCodingQuestion(
        this.codingQuestion()!.id,
        'java',
        this.code,
      );
    }
  }

  selectSubmission(submission: CodingSubmission) {
    this.currentSubmission = submission;
    this.active = 'submission-detail';
  }
  generateFunctionTemplate(
    codingQuestion: CodingQuestion,
    language: string,
  ): string {
    const { functionName, functionSignatures } = codingQuestion;
    const signature = functionSignatures.find(
      (sig) => sig.language.toLowerCase() === language.toLowerCase(),
    );

    if (!signature) {
      throw new Error(`Function signature not found for language: ${language}`);
    }

    const { arguments: args, returnType } = signature;

    if (language.toLowerCase() === 'java') {
      // Java Function Template
      const argsList = args.map((arg) => `${arg.type} ${arg.name}`).join(', ');
      return `
public class Solution {
    public ${returnType} ${functionName}(${argsList}) {
        // TODO: Implement this function
        return null; // Replace with appropriate return value
    }
}`;
    } else if (language.toLowerCase() === 'python') {
      // Python Function Template
      const argsList = args.map((arg) => arg.name).join(', ');
      return `
def ${functionName}(${argsList}) -> ${returnType}:
    """
    TODO: Implement this function
    """
    pass  # Replace with appropriate logic`;
    }

    throw new Error(`Unsupported language: ${language}`);
  }
}
