import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { routeAnimations, selectIsAuthenticated } from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'kots-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'kots.examples.menu.todos' },
    { link: 'stock-market', label: 'kots.examples.menu.stocks' },
    { link: 'theming', label: 'kots.examples.menu.theming' },
    { link: 'crud', label: 'kots.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'kots.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'kots.examples.menu.form' },
    { link: 'notifications', label: 'kots.examples.menu.notifications' },
    { link: 'elements', label: 'kots.examples.menu.elements' },
    { link: 'authenticated', label: 'kots.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
