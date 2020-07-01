import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { ThemeModule } from '@theme/theme.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenLocalStorage } from './services/token-storage';

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
  providers: [
    AuthService,
    TokenLocalStorage,
  ]
})
export class AuthModule {
}
