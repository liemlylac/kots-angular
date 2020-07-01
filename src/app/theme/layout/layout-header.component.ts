import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  template: `
  <header class="layout-header">
    <ng-content></ng-content>
  </header>
  `,
})
export class LayoutHeaderComponent {
}
