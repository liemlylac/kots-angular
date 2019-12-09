import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username;
  private password;
  private formData;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      password: new FormControl('', this.passwordValidation)
    });
  }
  passwordValidation(formControl) {
    if (formControl.value.length < 5) {
      return {password: true};
    }
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'adminm') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credential');
    }
  }

  onClickSubmit(value: any) {}
}
