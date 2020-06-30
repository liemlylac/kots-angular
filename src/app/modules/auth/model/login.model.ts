export class LoginModel {
  username: string;
  password: string;
}

export class LoginResult {
  displayName: string;
  username: string;
  token: string;

  constructor(
    displayName,
    username,
    token
  ) {
    this.displayName = displayName;
    this.username = username;
    this.token = token;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
