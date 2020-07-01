import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  template: `
  <footer class="layout-footer footer">
    <ng-content></ng-content>
  </footer>
  `,
})
export class LayoutFooterComponent {
}
