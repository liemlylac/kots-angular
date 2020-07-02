import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { LoginLocalStorage } from '@modules/auth/services/login-storage';
import { LoginUser } from '@modules/auth/model/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private readonly authService: AuthService,
    private readonly loginStorage: LoginLocalStorage
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  get loginUser(): LoginUser {
    return this.loginStorage.get();
  }
}
