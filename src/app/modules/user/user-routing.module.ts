import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSecurityComponent } from './user-security/user-security.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'security',
        component: UserSecurityComponent,
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
