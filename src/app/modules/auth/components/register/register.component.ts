import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { RegisterModel } from '@modules/auth/models/register.model';
import { HttpExceptionFilterResult } from '@modules/common/model/http-exception-filter-result';
import { AlertService } from '@theme/alert/alert.service';
import { AlertType } from '@theme/alert/alert.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  submitted = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      displayName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });
  }

  getFormControl(fieldName): AbstractControl {
    return this.registerForm.get(fieldName);
  }

  get displayName(): AbstractControl {
    return this.getFormControl('displayName');
  }

  get username(): AbstractControl {
    return this.getFormControl('username');
  }

  get password(): AbstractControl {
    return this.getFormControl('password');
  }

  isShowFieldDanger(fieldName): boolean {
    const formControl = this.getFormControl(fieldName);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  onSubmit(data: RegisterModel): void {
    this.alertService.clear();
    if (!this.registerForm.valid) {
      return;
    }
    this.submitted = true;
    this.authService.register(data).subscribe(
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
            this.alertService.add({
              type: AlertType.Error,
              message
            });
          }
        });
        // Clear password field
        this.password.reset();
      },
    );
  }
}
