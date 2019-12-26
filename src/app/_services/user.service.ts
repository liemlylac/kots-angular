import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  profile() {
    return this.http.get<User>(`${environment.apiUrl}/user/profile`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/user`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/${id}`);
  }
}
