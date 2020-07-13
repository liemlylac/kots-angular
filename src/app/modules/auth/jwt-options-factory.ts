import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtConfig } from '@auth0/angular-jwt/lib/angular-jwt.module';
import { LoginLocalStorage, LoginStorage } from './services/login-storage';

export const jwtOptionsProvider = {
  jwtOptionsProvider: {
    provide: JWT_OPTIONS,
    useFactory: jwtOptionsFactory,
    deps: [LoginLocalStorage]
  }
};

export function jwtOptionsFactory(service: LoginStorage): JwtConfig {
  return {
    skipWhenExpired: false,
    tokenGetter: () => {
      return service.getToken();
    },
  };
}
