import { Routes } from '@angular/router';
import { QuizTakerComponent } from './features/quiz/components/quiz-taker/quiz-taker.component';
import { AuthService } from './core/auth/services/auth.service';
import { inject } from '@angular/core';

export const routes: Routes = [
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
    path: 'quiz',
    component: QuizTakerComponent,
    title: 'Take quiz',
  },
];
