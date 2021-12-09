import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthComponent,
  ForgotPasswordComponent,
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ResetPasswordComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'auth.title.login ' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'auth.title.register ' }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title: 'auth.title.forgot-password ' }
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { title: 'auth.title.reset-password ' }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        data: { title: 'auth.title.logout ' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
