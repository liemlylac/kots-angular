import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { LoginLocalStorage } from '@modules/auth/services/login-storage';
import { LoginUser } from '@modules/auth/models/login.model';
import { Language, LanguageService } from '@theme/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  supportLanguages: Language[];
  currentLanguage: Language;

  constructor(
    private readonly authService: AuthService,
    private readonly loginStorage: LoginLocalStorage,
    private readonly languageService: LanguageService,
  ) {
  }

  ngOnInit(): void {
    this.supportLanguages = this.languageService.getAllLanguages();
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  get loginUser(): LoginUser {
    return this.loginStorage.get();
  }

  onChangeLanguage(code: string): void {
    this.languageService.changeLanguage(code);
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }
}
