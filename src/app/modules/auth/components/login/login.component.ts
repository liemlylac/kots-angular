import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';
import { LoginModel } from '../../model/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  errors: string[];

  loginForm: FormGroup;

  submitted = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });
  }

  getFormControl(fieldName): AbstractControl {
    return this.loginForm.get(fieldName);
  }

  get username(): AbstractControl {
    return this.getFormControl('username');
  }

  get password(): AbstractControl {
    return this.getFormControl('password');
  }

  isShowFieldDanger(fieldName): boolean {
    const formControl =  this.getFormControl(fieldName);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  onSubmit(data: LoginModel): void {
    this.errors = [];
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.authService.authenticate(data).subscribe(
      (result: boolean) => {
        this.submitted = false;
        if (result) {
          return this.router.navigate(['/dashboard']);
        }
      },
      (error: HttpExceptionFilterResult) => {
        this.submitted = false;
        let messages = error.message;

        if (!Array.isArray(messages)) {
          messages = [messages];
        }

        messages.forEach(message => {
          if (typeof message === 'string') {
            this.errors.push(message);
          }
        });

        // Clear password field
        this.password.reset();
      }
    );
  }
}
