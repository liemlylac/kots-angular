import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent {
  constructor(private router: Router) {}

  back() {}

  dashboard() {
    this.router.navigate(['dashboard']);
  }
}
