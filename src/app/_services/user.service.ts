import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user";
import { environment } from "../../environments/environment";


@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getProfile(){
    return this.httpClient.get<User>(`${environment.apiUrl}/user/profile`)
  }
}
