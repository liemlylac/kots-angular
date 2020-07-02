export class LoginModel {
  username: string;
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
  private readonly displayName: string;
  private readonly username: string;
  private readonly accessToken: string;

  constructor(
    data: LoginUser
  ) {
    this.displayName = data.displayName;
    this.username = data.username;
    this.accessToken = data.accessToken;
  }

  toString(): string {
    return JSON.stringify(this);
  }

  get fullName(): string {
    return this.displayName;
  }

  get token(): string {
    return this.accessToken;
  }


}
