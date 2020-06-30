import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-not-found',
  template: `<h1>404 not found</h1>
  <button (click)="locationBack()">Back</button>`
})
export class NotFoundComponent {
  constructor(private readonly location: Location) {
  }

  locationBack(): void {
    this.location.back();
  }
}
