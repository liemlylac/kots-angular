import { Component, OnInit } from '@angular/core';
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loading = false;
  user: User;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getProfile().subscribe((data: User) => {
      this.user = data;
      this.loading = false;
    });
  }

}
