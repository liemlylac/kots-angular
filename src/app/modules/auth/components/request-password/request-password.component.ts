import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';
import { AlertService } from '@theme/alert/alert.service';
import { AlertType } from '@theme/alert/alert.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-password',
  templateUrl: 'request-password.component.html'
})
export class RequestPasswordComponent implements OnInit {
  requestPasswordForm: FormGroup;

  submitted = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.requestPasswordForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.email
        ]
      ],
    });
  }

  getFormControl(fieldName): AbstractControl {
    return this.requestPasswordForm.get(fieldName);
  }

  get email(): AbstractControl {
    return this.getFormControl('email');
  }

  isShowFieldDanger(fieldName): boolean {
    const formControl =  this.getFormControl(fieldName);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  onSubmit(data: { email: string }): void {
    this.alertService.clear();
    if (this.requestPasswordForm.invalid) {
      this.requestPasswordForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.authService.requestPassword(data).subscribe(
      (result: { email: string }) => {
        this.submitted = false;
        if (result.email) {
          this.alertService.add({
            type: AlertType.Success,
            message: this.translateService.instant('Auth.Request-password.Sent-email', { email: result.email })
          });
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
            this.alertService.add({
              type: AlertType.Error,
              message
            });
          }
        });
      }
    );
  }
}
