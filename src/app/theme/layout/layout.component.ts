import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <div class="layout h-100">
    <div class="layout-sidebar float-left h-100 position-fixed" *ngIf="isShowSideBar">
      <ng-content select="app-sidebar"></ng-content>
    </div>
    <div class="layout-container d-flex flex-column h-100">
      <ng-content select="app-layout-header"></ng-content>
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
