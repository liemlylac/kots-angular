import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-dashboard',
  template: `dashboard page is loaded`,
})
export class DashboardComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('Dashboard');
  }

  ngOnInit(): void {
  }
}
