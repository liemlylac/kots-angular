import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Project} from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects: Project[];
  private loaded = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
      this.loaded = true;
    });
  }
}
