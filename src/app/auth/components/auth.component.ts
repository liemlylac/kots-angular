import { Component } from '@angular/core';
import { routeAnimations } from '../../core/core.module';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routeAnimations]
})
export class AuthComponent {}
