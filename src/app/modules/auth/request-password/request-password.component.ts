import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-request-password',
  templateUrl: 'request-password.component.html'
})
export class RequestPasswordComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('Request password');
  }

  ngOnInit(): void {
  }
}
