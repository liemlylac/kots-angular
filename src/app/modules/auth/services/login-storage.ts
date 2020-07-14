import { Injectable } from '@angular/core';
import { LoginUser } from '@modules/auth/models/login.model';

export abstract class LoginStorage {
  abstract clear(): void;

  abstract get(): LoginUser;

  abstract getToken(): string;

  abstract set(data: LoginUser): void;
}

@Injectable({ providedIn: 'root' })
export class LoginLocalStorage extends LoginStorage {
  protected key = 'login_user';

  clear(): void {
    localStorage.removeItem(this.key);
  }

  get(): LoginUser {
    const storageData = JSON.parse(localStorage.getItem(this.key));
    if (storageData && storageData.token) {
      return new LoginUser(storageData);
    }
    return null;
  }

  getToken(): string | null {
    const loginUser = this.get();
    if (loginUser) {
      return loginUser.getAccessToken();
    }
    return null;
  }

  set(data: LoginUser): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

}
