import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';
import { AlertService } from '@theme/alert/alert.service';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { AlertType } from '@theme/alert/alert.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  getFormControl(fieldName): AbstractControl {
    return this.loginForm.get(fieldName);
  }

  get email(): AbstractControl {
    return this.getFormControl('email');
  }

  get password(): AbstractControl {
    return this.getFormControl('password');
  }

  isShowFieldDanger(fieldName): boolean {
    const formControl =  this.getFormControl(fieldName);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  onSubmit(data: LoginModel): void {
    this.alertService.clear();
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
      (error: HttpExceptionFilterResult | HttpErrorResponse) => {
        this.submitted = false;
        let messages = error.message;

        if (!Array.isArray(messages)) {
          messages = [messages];
        }

        messages.forEach(message => {
          if (typeof message === 'string') {
            this.alertService.add({
              type: AlertType.Error,
              message
            });
          }
        });

        // Clear password field
        this.password.reset();
      }
    );
  }
}
