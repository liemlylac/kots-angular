import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    AngularCommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
  ],
  providers: [HttpService]
})
export class CommonModule {
}
