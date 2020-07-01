import { Component } from '@angular/core';

@Component({
  selector: 'app-two-column',
  template: `
  <app-layout showSidebar="1">
    <app-sidebar>
      <ng-content select="app-menu"></ng-content>
    </app-sidebar>
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
