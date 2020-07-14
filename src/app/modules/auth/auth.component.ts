import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  styleUrls: ['auth.component.scss'],
  templateUrl: 'auth.component.html',
})
export class AuthComponent {

  isCollapsed = true;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
