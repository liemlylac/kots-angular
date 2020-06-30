import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  template: `
  <nav class="layout-header">
    <ng-content></ng-content>
  </nav>
  `,
})
export class LayoutHeaderComponent {
}
