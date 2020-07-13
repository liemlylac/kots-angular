import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSecurityComponent } from './user-security/user-security.component';

@NgModule({
  imports: [
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserSecurityComponent,
  ],
})
export class UserModule {
}
