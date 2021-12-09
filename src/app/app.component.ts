import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { routeAnimations, LocalStorageService, selectEffectiveTheme } from './core/core.module';
import { actionSettingsChangeAnimationsPageDisabled } from './core/settings/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  theme$: Observable<string>;

  constructor(private store: Store, private storageService: LocalStorageService) {}

  public static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }
}
