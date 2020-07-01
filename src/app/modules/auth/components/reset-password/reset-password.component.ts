import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-reset-password',
  template: `reset password page is loaded`
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('Reset password');
  }

  ngOnInit(): void {
  }
}
