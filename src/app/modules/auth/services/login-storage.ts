import { Injectable } from '@angular/core';
import { LoginUser } from '@modules/auth/model/login.model';

export abstract class LoginStorage {
  abstract clear(): void;
  abstract get(): LoginUser;
  abstract set(data: LoginUser): void;
}

@Injectable()
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

  set(data: LoginUser): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

}