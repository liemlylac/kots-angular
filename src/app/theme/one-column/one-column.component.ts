import { Component } from '@angular/core';

@Component({
  selector: 'app-one-column',
  template: `
  <app-layout showSidebar="0">
    <app-layout-header>
      <app-header></app-header>
    </app-layout-header>
    <app-sidebar>
        <ng-content select="app-menu"></ng-content>
    </app-sidebar>
    <ng-content></ng-content>
    <app-layout-footer>
      <app-footer></app-footer>
    </app-layout-footer>
  </app-layout>
    `,
})
export class OneColumnComponent {
}
