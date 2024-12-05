import { Routes } from '@angular/router';
import { AuthService } from './core/auth/services/auth.service';
import { inject } from '@angular/core';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'quizzes',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        loadComponent: () =>
          import('./core/auth/components/auth-page/auth-page.component').then(
            (m) => m.AuthPageComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./core/auth/components/auth-page/auth-page.component').then(
            (m) => m.AuthPageComponent
          ),
      },
    ],
    canActivate: [() => !inject(AuthService).isAuthenticated()],
  },
  {
    path: 'quizzes',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/quiz/components/quiz-list/quiz-list.component'
          ).then((m) => m.QuizListComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './features/quiz/components/quiz-taker/quiz-taker.component'
          ).then((m) => m.QuizTakerComponent),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'submissions',
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import(
            './features/quiz/components/submission/submission.component'
          ).then((m) => m.SubmissionComponent),
      },
    ],
    canActivate: [AuthGuard],
  },
];
