import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { removeLastSlash } from '../utils/string-utils';

@Injectable()
export class HttpService {
  apiUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.apiUrl = removeLastSlash(environment.apiUrl);
  }

  public get(url: string, options?): Observable<ArrayBuffer> {
    return this.httpClient.get(this.apiUrl + url, options);
  }

  public post(url: string, body: any | null, options?): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, body, options);
  }

  public put(url: string, body: any | null, options?): Observable<any> {
    return this.httpClient.put(this.apiUrl + url, body, options);
  }

  public delete(url: string, options?): Observable<any> {
    return this.httpClient.delete(this.apiUrl + url, options);
  }
}
