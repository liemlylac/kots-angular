import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from './alert.model';

@Injectable()
export class AlertService {

  private alertSource = new Subject<Alert|Alert[]>();
  private clearSource = new Subject<string>();

  alertObserver = this.alertSource.asObservable();
  clearObserver = this.clearSource.asObservable();

  add(alert: Alert): void {
    if (alert) {
      this.alertSource.next(alert);
    }
  }

  replace(alerts: Alert[]): void {
    if (alerts && alerts.length) {
      this.alertSource.next(alerts);
    }
  }

  clear(key?: string): void {
    this.clearSource.next(key || null);
  }

}
