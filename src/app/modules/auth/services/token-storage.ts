import { Injectable } from '@angular/core';

export abstract class TokenStorage {
  abstract clear(): void;
  abstract get(): string;
  abstract set(token): void;
}

@Injectable()
export class TokenLocalStorage extends TokenStorage {
  protected key = 'user_login';

  clear(): void {
    localStorage.removeItem(this.key);
  }

  get(): string {
    return localStorage.getItem(this.key);
  }

  set(token): void {
    localStorage.setItem(this.key, token);
  }

}
