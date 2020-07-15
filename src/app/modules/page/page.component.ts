import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  template: `
    <app-layout showSidebar="1">
      <app-sidebar>
        <ng-content select="app-menu"></ng-content>
      </app-sidebar>
      <div class="main-content h-100 d-flex flex-column">
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer class="mt-auto"></app-footer>
      </div>
    </app-layout>`,
})
export class PageComponent {
  menu = {};
}
