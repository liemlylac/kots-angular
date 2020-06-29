import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

@NgModule({
  imports: [
    PageRoutingModule,
  ],
  declarations: [PageComponent],
})
export class PageModule {}
