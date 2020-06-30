import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from '@theme/theme.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  declarations: [NotFoundComponent],
})
export class ErrorModule {
}
