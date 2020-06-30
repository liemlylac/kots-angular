import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-user-account',
  template: `user account page is loaded`
})
export class UserAccountComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('User/Account');
  }

  ngOnInit(): void {
  }
}
