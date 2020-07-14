import { NgModule } from '@angular/core';
import { ThemeModule } from '@theme/theme.module';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonModule } from '../common/common.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PageRoutingModule,
    DashboardModule
  ],
  declarations: [
    SidebarComponent,
    PageComponent,
  ],
})
export class PageModule {}
