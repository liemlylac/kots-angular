import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <div class="layout">
    <ng-content select="app-layout-header"></ng-content>
    <div class="layout-container">
      <div class="layout-sidebar" *ngIf="isShowSideBar">
        <ng-content select="app-sidebar"></ng-content>
      </div>
      <div class="layout-content">
        <ng-content></ng-content>
      </div>
      <ng-content select="app-layout-footer"></ng-content>
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
