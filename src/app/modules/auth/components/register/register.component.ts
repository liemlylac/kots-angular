import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { RegisterModel } from '@modules/auth/model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  submitted = false;

  constructor(
    private readonly titleService: TitleService,
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      displayName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

  get displayName(): AbstractControl {
    return this.registerForm.get('displayName');
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  onSubmit(data: RegisterModel): void {
    if (!this.registerForm.valid) {
      return;
    }
    this.submitted = true;
    this.authService.register(data).subscribe(
      (result: boolean) => {
        this.submitted = false;

        if (result) {
          this.router.navigate(['/dashboard']).then();
          return;
        }

        // Clear password field
        this.registerForm.get('password').reset();
      },
    );
  }
}
