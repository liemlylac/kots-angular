import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from '@modules/auth/services/auth.service';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';
import { ResetPassword } from '@modules/auth/models/reset-password.model';
import { AlertService } from '@theme/alert/alert.service';
import { AlertType } from '@theme/alert/alert.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  redirectTimeout = 5;
  isVerifyingToken = false;
  isMissingToken = false;
  isSubmitted = false;
  isInvalidToken = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.isVerifyingToken = true;
    this.validateToken();
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
    }
    // , { validators: this.confirmPasswordValidator }
    );
  }

  confirmPasswordValidator(formGroup: FormGroup): ValidationErrors | null {
    const pass = formGroup.controls.password.value;
    const confirm = formGroup.controls.confirmPassword.value;

    return pass && confirm && pass === confirm ? null : { confirmPasswordIsNotSame: true };
  }

  validateToken(): void {
    this.activatedRoute.queryParams.subscribe(
      (tokenParam) => {
        this.alertService.clear();
        if (!tokenParam.token) {
          this.isMissingToken = true;
          timer(1000, 1000).subscribe(() => this.redirectTimeout--);
          timer(5000).subscribe(() => this.router.navigate(['/auth/login']));
          return;
        }
        this.authService.verifyResetPasswordToken({token: tokenParam.token}).subscribe(
          () => {
            this.isVerifyingToken = false;
          }, () => {
            this.isVerifyingToken = false;
            this.isInvalidToken = true;
          }
        );
      }
    );
  }

  getFormControl(fieldName): AbstractControl {
    return this.resetPasswordForm.get(fieldName);
  }

  get password(): AbstractControl {
    return this.getFormControl('password');
  }

  get passwordConfirm(): AbstractControl {
    return this.getFormControl('passwordConfirm');
  }

  isShowFieldDanger(fieldName): boolean {
    const formControl =  this.getFormControl(fieldName);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  onSubmit(data: ResetPassword): void {
    this.alertService.clear();
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }
    this.isSubmitted = true;
    this.authService.resetPassword(data).subscribe(
      (result: boolean) => {
        this.isSubmitted = false;
        if (result) {
          return this.router.navigate(['/auth/login']);
        }
      },
      (error: HttpExceptionFilterResult | HttpErrorResponse) => {
        this.isSubmitted = false;
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
        this.passwordConfirm.reset();
      }
    );
  }
}
