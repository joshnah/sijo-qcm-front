import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';

import { throwError } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { Role, User } from '../models/user.model';
import { JwtService } from './jwt.service';
import { AlertService } from '../../alert/services/alert.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  http = inject(HttpClient);
  jwtService = inject(JwtService);
  router = inject(Router);
  alertService = inject(AlertService);
  isAuthenticated = computed(() => !!this.userSignal());
  
  private userSignal = signal<User | null>(null);
  user = this.userSignal.asReadonly();

  constructor(){
    this.setUserFromLocalStorage();
  }


  login(credentials: Credentials): Observable<User> {
    return this.http
    .post<User>('/auth/signin', credentials)
    .pipe(
      tap((loginResponse) => {
        this.setAuth({ token: loginResponse.token, login: credentials.login, role: loginResponse.role });
      }),
      catchError((error) => {
        console.error('Error occurred:', error);
  
        this.alertService.setMessage({ message: "Login failed", type: "danger" });
  
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }

  register(credentials: Credentials) {
    return this.http.post('/auth/signup', credentials);
  }

  purgeAuth(): void {
    this.jwtService.destroyUser();
    this.userSignal.set(null);
  }

  setAuth(user: User): void {
    this.jwtService.saveUser(user);
    this.userSignal.set(user);
  }

  logout(): void {
    this.purgeAuth();
    this.router.navigate(['/']);
  }

  hasTutorAccess():boolean{
      return this.user()?.role === Role.ADMIN || this.user()?.role === Role.TUTOR
  }

  private setUserFromLocalStorage(): void {
    const user = this.jwtService.getUser();
    if (user){
      this.setAuth(user);
    }
  }
}
