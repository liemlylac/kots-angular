import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <div class="layout h-100">
    <div class="layout-sidebar float-left h-100 position-fixed" *ngIf="isShowSideBar">
      <ng-content select="app-sidebar"></ng-content>
    </div>
    <div class="layout-container h-100">
      <ng-content select="app-header"></ng-content>
      <ng-content></ng-content>
      <ng-content select="app-footer"></ng-content>
    </div>
  </div>`,
})
export class LayoutComponent {

  isShowSideBar = false;

  @Input('showSidebar')
  set showSidebar(isShow: boolean) {
    this.isShowSideBar = isShow;
  }
}
