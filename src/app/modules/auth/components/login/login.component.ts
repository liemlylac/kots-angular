import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../model/login.model';
import { AuthService } from '../../services/auth.service';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  submitted = false;

  constructor(
    private readonly titleService: TitleService,
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });
    this.titleService.setTitle('Login');
  }

  ngOnInit(): void {

  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  onSubmit(login: LoginModel): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.submitted = true;
    this.authService.authenticate(login).subscribe(
      (result: boolean) => {
        this.submitted = false;

        if (result) {
          this.router.navigate(['/dashboard']).then();
          return;
        }

        // Clear password field
        this.loginForm.get('password').reset();
      },
    );
  }
}
