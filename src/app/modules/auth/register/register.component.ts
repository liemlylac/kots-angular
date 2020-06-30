import { Component, OnInit } from '@angular/core';
import { TitleService } from '@theme/services/title.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private readonly titleService: TitleService,
  ) {
    this.titleService.setTitle('Register');
  }

  ngOnInit(): void {
  }
}
