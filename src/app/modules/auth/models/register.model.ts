import { LoginModel, LoginResult } from './login.model';

export class RegisterModel extends LoginModel{
  displayName: string;
}
export class RegisterResult extends LoginResult {
}
