import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Auth.Login.Title' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Auth.Register.Title' }
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
        data: { title: 'Request password' }
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { title: 'Reset password' }
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
