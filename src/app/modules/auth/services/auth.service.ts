import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from '@modules/common/service/http.service';
import { RegisterModel, RegisterResult } from '@modules/auth/models/register.model';
import { LoginLocalStorage } from './login-storage';
import { LoginModel, LoginResult } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private readonly loginStorage: LoginLocalStorage,
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly jwtHelperService: JwtHelperService
  ) {
  }

  public static LOGIN_ENDPOINT = '/auth/login';
  public static REGISTER_ENDPOINT = '/auth/register';
  public static REQUEST_PASSWORD = '/auth/request-password';

  authenticate(data: LoginModel): Observable<any> {
    return this.httpService.post(AuthService.LOGIN_ENDPOINT, data).pipe(
      map((res: LoginResult) => {
          // Save token to localStorage
          if (res && res.isSuccess && res.loginUser) {
            this.loginStorage.set(res.loginUser);
          }
          return res.isSuccess;
        }
      ),
      catchError((httpError: HttpErrorResponse) => {
        return throwError(httpError.error);
      })
    );
  }

  register(data: RegisterModel): Observable<any> {
    return this.httpService.post(AuthService.REGISTER_ENDPOINT, data).pipe(
      map((res: RegisterResult) => {
          // Save token to localStorage
          if (res && res.isSuccess && res.loginUser) {
            this.loginStorage.set(res.loginUser);
          }
          return res.isSuccess;
        }
      ),
      catchError((httpError: HttpErrorResponse) => {
        return throwError(httpError.error);
      })
    );
  }

  requestPassword(data: { email: string }): Observable<any> {
    return this.httpService.post(AuthService.REQUEST_PASSWORD, data).pipe(
      map((res) => {
        if (res) {
          return true;
        }
      }),
      catchError((httpError: HttpErrorResponse) => {
        return throwError(httpError.error);
      }),
    );
  }

  logout(): Promise<boolean> {
    this.loginStorage.clear();
    return this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired();
  }
}
