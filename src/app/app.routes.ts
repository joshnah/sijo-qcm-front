import { Routes } from '@angular/router';
import { QuizTakerComponent } from './features/quiz/components/quiz-taker/quiz-taker.component';

export const routes: Routes = [
  {
    path: 'quiz',
    component: QuizTakerComponent,
    title: 'Take quiz',
  },
];
