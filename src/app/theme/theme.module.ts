import { NgModule } from '@angular/core';
import { CommonModule } from '@modules/common/common.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleService } from './services/title.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OneColumnComponent } from './layout/one-column/one-column.component';
import { TwoColumnComponent } from './layout/two-column/two-column.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    OneColumnComponent,
    TwoColumnComponent,
  ],
  providers: [
    TitleService,
  ],
  exports: [
    MenuComponent,
    OneColumnComponent,
    TwoColumnComponent,
  ],
})
export class ThemeModule {
}
