import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  private project;
  private editForm;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.editForm = this.formBuilder.group({
      name: null,
      description: null,
      startDate: null
    });
  }

  ngOnInit() {
    const projectId = this.activatedRoute.snapshot.paramMap.get('projectId');

    if (projectId) {
      this.apiService.getProject(projectId).subscribe((data: any) => {
        this.project = data;
      });
    }
  }

  onSubmit(projectData) {
    this.apiService.postProject(projectData).subscribe((result: any) => {
      if (result.id) {
        this.router.navigate(['/project']);
      }
    });
  }
}
