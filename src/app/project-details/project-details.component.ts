import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  private project;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.apiService.getProject(this.activatedRoute.snapshot.paramMap.get('projectId')).subscribe((data) => {
      this.project = data;
    });
  }

}
