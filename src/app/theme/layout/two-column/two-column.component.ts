import { Component } from '@angular/core';

@Component({
  selector: 'app-two-column',
  template: `
  <app-layout showSidebar="1">
    <app-layout-header>
      <app-header></app-header>
    </app-layout-header>
    <ng-content></ng-content>
    <app-layout-footer>
      <app-footer></app-footer>
    </app-layout-footer>
  </app-layout>`,
})
export class TwoColumnComponent {
}
