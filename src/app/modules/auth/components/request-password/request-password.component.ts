import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';

@Component({
  selector: 'app-request-password',
  templateUrl: 'request-password.component.html'
})
export class RequestPasswordComponent implements OnInit {
  errors: string[];

  requestPasswordForm: FormGroup;

  submitted = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.requestPasswordForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
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
    this.errors = [];
    if (this.requestPasswordForm.invalid) {
      this.requestPasswordForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.authService.requestPassword(data).subscribe(
      (result: boolean) => {
        this.submitted = false;
        if (result) {
          return this.router.navigate(['/auth/reset-password']);
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
      }
    );
  }
}
