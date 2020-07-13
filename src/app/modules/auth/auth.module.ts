import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '@theme/theme.module';
import { CommonModule } from '@modules/common/common.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],
})
export class AuthModule {
}
