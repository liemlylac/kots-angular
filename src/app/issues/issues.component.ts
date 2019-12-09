import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  private issues = [];
  private loaded = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getIssues().subscribe((data: any[]) => {
      this.issues = data;
      this.loaded = true;
    });
  }
}
