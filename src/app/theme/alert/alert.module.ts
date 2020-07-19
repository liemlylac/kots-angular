import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
  ],
  declarations: [AlertComponent],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule {}
