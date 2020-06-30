import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from '@theme/theme.module';
import { AuthModule } from '@modules/auth/auth.module';
import { PageModule } from '@modules/page/page.module';
import { ErrorModule } from '@modules/error/error.module';
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
    AppRoutingModule,
    ThemeModule,
    AuthModule,
    PageModule,
    ErrorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
