import {
  AfterContentInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output, ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';
import { state, transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [
    trigger('alertAnimation', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({transform: 'translateY(-25%)', opacity: 0}),
        animate('{{showTransitionParams}}')
      ]),
      transition('* => void', [
        animate(
          ('{{hideTransitionParams}}'),
          style({ opacity: 0, transform: 'translateY(-25%)' })
        )
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements AfterContentInit, OnDestroy {
  @Input() alerts: Alert[];

  @Input() dismissible = true;

  @Input() usingHtml = false;

  @Input() isUseService = true;

  @Input() style: any;

  @Input() className: string;

  @Input() key: string;

  @Input() showTransitionOptions = '300ms ease-out';

  @Input() hideTransitionOptions = '250ms ease-in';

  @Output() valueChange: EventEmitter<Alert[]> = new EventEmitter<Alert[]>();

  alertSubscription: Subscription;

  clearSubscription: Subscription;

  constructor(
    @Optional() public alertService: AlertService,
    public el: ElementRef,
    public cd: ChangeDetectorRef
  ) {
  }

  ngAfterContentInit(): void {
    if (this.alertService && this.isUseService) {
      this.alertSubscription = this.alertService.alertObserver.subscribe((alerts: any) => {
        if (alerts) {
          if (alerts instanceof Array) {
            const filteredAlerts = alerts.filter(m => this.key === m.key);
            this.alerts = this.alerts ? [...this.alerts, ...filteredAlerts] : [...filteredAlerts];
          }
          else if (this.key === alerts.key) {
            this.alerts = this.alerts ? [...this.alerts, ...[alerts]] : [alerts];
          }

          this.cd.markForCheck();
        }
      });

      this.clearSubscription = this.alertService.clearObserver.subscribe(key => {
        if (key) {
          if (this.key === key) {
            this.alerts = null;
          }
        }
        else {
          this.alerts = null;
        }

        this.cd.markForCheck();
      });
    }
  }

  hasAlerts(): boolean {
    const parentEl = this.el.nativeElement.parentElement;
    if (parentEl && parentEl.offsetParent) {
      return this.alerts && this.alerts.length > 0;
    }
    return false;
  }

  dismiss(alert: Alert): void {
    if (this.dismissible || alert.dismissible) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
  }

  clear(event): void {
    this.alerts = [];
    this.valueChange.emit(this.alerts);
    event.preventDefault();
  }

  ngOnDestroy(): void {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
  }
}
