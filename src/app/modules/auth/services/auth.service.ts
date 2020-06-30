import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpService } from '@modules/common/service/http.service';
import { LoginModel, LoginResult } from '../model/login.model';
import { TokenLocalStorage } from './token-storage';

@Injectable()
export class AuthService {

  constructor(
    private readonly tokenService: TokenLocalStorage,
    private readonly httpService: HttpService
  ) {
  }

  public static LOGIN_ENDPOINT = '/auth/login';

  authenticate(loginForm: LoginModel): Observable<any> {
    return this.httpService.post(AuthService.LOGIN_ENDPOINT, loginForm).pipe(
      map((res: LoginResult) => {
          // Save token to localStorage
          if (res && res.token) {
            this.tokenService.set(res.token);
          }
          return of(true);
        }
      ),
      catchError(() => {
        return of(false);
      })
    );
  }

  logout(): void {
    this.tokenService.clear();
  }

  isLoggedIn(): boolean {
    return !!this.tokenService.get();
  }
}
