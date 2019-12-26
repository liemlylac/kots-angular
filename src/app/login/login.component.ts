import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private formData;
  private loading = false;
  private submitted = false;
  private returnUrl: string;
  private error = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      password: new FormControl('', this.passwordValidation)
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  passwordValidation(formControl) {
    if (formControl.value.length < 3) {
      return {password: true};
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.formData.controls.username.value, this.formData.controls.password.value)
      .subscribe(() => {
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.error = error;
        this.loading = false;
      });
  }
}
