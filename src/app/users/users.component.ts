import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users = [];
  private loaded = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      this.loaded = true;
    });
  }

}
