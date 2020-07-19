import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  styleUrls: ['auth.component.scss'],
  templateUrl: 'auth.component.html',
})
export class AuthComponent {

  isCollapsed = true;
  appLogo = 'assets/images/logo48.png';
  faBars = faBars;
  faTimes = faTimes;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
