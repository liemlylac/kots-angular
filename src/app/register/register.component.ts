import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private formData: any;

  constructor() {
  }

  ngOnInit() {
    this.formData = new FormGroup({
      displayName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  onClickSubmit(value: any) {
  }
}
