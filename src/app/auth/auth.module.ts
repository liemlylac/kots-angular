import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import {
  AuthComponent,
  ForgotPasswordComponent,
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ResetPasswordComponent
} from './components';

@NgModule({
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule {}
