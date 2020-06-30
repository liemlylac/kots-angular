import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  template: `
  <nav class="layout-footer">
    <ng-content></ng-content>
  </nav>
  `,
})
export class LayoutFooterComponent {
}
