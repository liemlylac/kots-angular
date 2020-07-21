export class LoginModel {
  email: string;
  password: string;
}

export class LoginResult {
  isSuccess: boolean;
  loginUser: LoginUser;

  constructor(
    isSuccess,
    loginUser
  ) {
    this.isSuccess = isSuccess;
    this.loginUser = loginUser;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

export class LoginUser {
  private readonly fullName: string;
  private readonly email: string;
  private readonly accessToken: string;

  constructor(
    data: LoginUser
  ) {
    this.fullName = data.fullName;
    this.email = data.email;
    this.accessToken = data.accessToken;
  }

  toString(): string {
    return JSON.stringify(this);
  }

  getFullName(): string {
    return this.fullName;
  }

  getAccessToken(): string {
    return this.accessToken;
  }


}
