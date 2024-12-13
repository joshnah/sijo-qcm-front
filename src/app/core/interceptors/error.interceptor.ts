import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { AlertService } from '../alert/services/alert.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const alertService = inject(AlertService);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/auth/login']);
        authService.logout();
        alertService.setMessage({
          message: 'Please log in again',
          type: 'warning',
        });
      }
      return throwError(() => err.error);
    }),
  );
};
