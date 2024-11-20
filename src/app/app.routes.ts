import { Routes } from '@angular/router';
import { QuizTakerComponent } from './features/quizz/components/quiz-taker/quiz-taker.component';

export const routes: Routes = [
  {
    path: 'quizz',
    component: QuizTakerComponent,
    title: 'Take quiz',
  },
];
