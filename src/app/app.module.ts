import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '@theme/theme.module';
import { AuthModule } from '@modules/auth/auth.module';
import { PageModule } from '@modules/page/page.module';
import { ErrorModule } from '@modules/error/error.module';
import { TranslateModuleConfig } from '@modules/common/config/translate.config';
import { jwtOptionsProvider } from '@modules/auth/jwt-options-factory';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot(jwtOptionsProvider),
    TranslateModule.forRoot(TranslateModuleConfig),
    AppRoutingModule,
    ThemeModule,
    AuthModule,
    PageModule,
    ErrorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
