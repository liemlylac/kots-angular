// Angular import
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Vendor import
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
// Self import
import { ThemeModule } from '@theme/theme.module';
import { AuthModule } from '@modules/auth/auth.module';
import { PageModule } from '@modules/page/page.module';
import { ErrorModule } from '@modules/error/error.module';
import { TranslateModuleConfig } from '@modules/common/config/translate.config';
import { jwtOptionsProvider } from '@modules/auth/jwt-options-factory';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appInitializerFactory } from './app.init';

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
    ErrorModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
