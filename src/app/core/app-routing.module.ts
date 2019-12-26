import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { IssuesComponent } from '../issues/issues.component';
import { AboutComponent } from '../about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectEditComponent } from '../project-edit/project-edit.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/new', component: ProjectEditComponent},
  {path: 'project/edit/:projectId', component: ProjectEditComponent},
  {path: 'project/delete/:projectId', component: ProjectEditComponent},
  {path: 'project/:projectId', component: ProjectDetailsComponent},
  {path: 'issues', component: IssuesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
