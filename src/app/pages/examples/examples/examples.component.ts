import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { routeAnimations, selectIsAuthenticated } from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'examples.menu.todos' },
    { link: 'stock-market', label: 'examples.menu.stocks' },
    { link: 'theming', label: 'examples.menu.theming' },
    { link: 'crud', label: 'examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'examples.menu.simple-state-management'
    },
    { link: 'form', label: 'examples.menu.form' },
    { link: 'notifications', label: 'examples.menu.notifications' },
    { link: 'elements', label: 'examples.menu.elements' },
    { link: 'authenticated', label: 'examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
