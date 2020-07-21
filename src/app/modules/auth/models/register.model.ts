import { LoginModel, LoginResult } from './login.model';

export class RegisterModel extends LoginModel{
  fullName: string;
}
export class RegisterResult extends LoginResult {
}
