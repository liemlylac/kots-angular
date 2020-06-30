import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-user-security',
  template: `user security page is loaded`
})
export class UserSecurityComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('User/Security');
  }

  ngOnInit(): void {
  }
}
