import { NgModule } from '@angular/core';
import { CommonModule } from '@modules/common/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguageService } from './services/language.service';
import { TitleService } from './services/title.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  providers: [
    LanguageService,
    TitleService,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
})
export class ThemeModule {
}
