import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from '@modules/common/service/http.service';
import { RegisterModel, RegisterResult } from '../models/register.model';
import { LoginLocalStorage } from './login-storage';
import { LoginModel, LoginResult } from '../models/login.model';
import { ResetPassword } from '../models/reset-password.model';

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
  public static VERIFY_RESET_PASSWORD_TOKEN = '/auth/verify-reset-password-token';
  public static RESET_PASSWORD = '/auth/reset-password';

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
      catchError(this.handleHttpError),
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
      catchError(this.handleHttpError),
    );
  }

  requestPassword(data: { email: string }): Observable<any> {
    return this.httpService.post(AuthService.REQUEST_PASSWORD, data).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleHttpError),
    );
  }

  verifyResetPasswordToken(data: {token: string}): Observable<any> {
    return this.httpService.get(AuthService.VERIFY_RESET_PASSWORD_TOKEN, { params: data }).pipe(
      map(() => {
        return true;
      }),
      catchError(this.handleHttpError),
    );
  }

  resetPassword(data: ResetPassword): Observable<any> {
    return this.httpService.post(AuthService.RESET_PASSWORD, data).pipe(
      map(() => {
        return true;
      }),
      catchError(this.handleHttpError),
    );
  }

  handleHttpError(httpError: HttpErrorResponse): Observable<never> {
    if (httpError.status === 0) {
      return throwError(httpError);
    }
    return throwError(httpError.error);
  }

  logout(): Promise<boolean> {
    this.loginStorage.clear();
    return this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired();
  }
}
