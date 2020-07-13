import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event.title));
  }
}
