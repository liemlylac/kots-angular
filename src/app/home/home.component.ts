import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {
  private loading = false;
  user: User;

  constructor(
    private readonly userService: UserService,
  ) {}

  async ngOnInit() {
    this.loading = true;
    await this.userService.profile().subscribe((data: User) => {
      this.user = data;
      this.loading = false;
    });
  }
}
