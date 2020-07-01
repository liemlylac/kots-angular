import { LoginResult } from '@modules/auth/model/login.model';

export class RegisterModel {
  displayName: string;
  username: string;
  password: string;
}
export class RegisterResult extends LoginResult {
}
