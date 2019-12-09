import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getProjects() {
    return this.httpClient.get(this.SERVER_URL + '/project');
  }

  public getProject(id) {
    return this.httpClient.get(this.SERVER_URL + '/project/' + id);
  }

  public postProject(data) {
    if (!data.startDate) {
      data.startDate = new Date().toUTCString();
    }
    return this.httpClient.post(this.SERVER_URL + '/project', data);
  }

  public deleteProject(id) {
    return this.httpClient.delete(this.SERVER_URL + 'project/' + id);
  }

  public getUsers() {
    return this.httpClient.get(this.SERVER_URL + '/user');
  }

  public login(username, password) {
    return this.httpClient.post(this.SERVER_URL + '/auth/login', {username, password});
  }

  public getIssues() {
    return this.httpClient.get(this.SERVER_URL + '/issue');
  }
}
