import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-user-profile',
  template: `user profile page is loaded`
})
export class UserProfileComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('User/Profile');
  }

  ngOnInit(): void {
  }
}
