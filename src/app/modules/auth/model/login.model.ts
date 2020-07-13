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
  private readonly token: string;

  constructor(
    data: LoginUser
  ) {
    this.displayName = data.displayName;
    this.username = data.username;
    this.token = data.token;
  }

  toString(): string {
    return JSON.stringify(this);
  }

  getFullName(): string {
    return this.displayName;
  }

  getAccessToken(): string {
    return this.token;
  }


}
