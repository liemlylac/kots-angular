import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
  <app-two-column>
    <router-outlet></router-outlet>
  </app-two-column>`,
})
export class PageComponent {
  menu = {};
}
