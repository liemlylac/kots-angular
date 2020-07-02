import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { removeLastSlash } from '../utils/string-utils';

@Injectable()
export class HttpService {
  apiUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.apiUrl = removeLastSlash(environment.apiUrl);
  }

  public get<T>(url: string, options?): Observable<T|ArrayBuffer|HttpEvent<T>> {
    return this.httpClient.get(this.apiUrl + url, options);
  }

  public post<T>(url: string, body: any | null, options?): Observable<T|ArrayBuffer|HttpEvent<T>> {
    return this.httpClient.post(this.apiUrl + url, body, options);
  }

  public put<T>(url: string, body: any | null, options?): Observable<T|ArrayBuffer|HttpEvent<T>> {
    return this.httpClient.put(this.apiUrl + url, body, options);
  }

  public delete<T>(url: string, options?): Observable<T|ArrayBuffer|HttpEvent<T>> {
    return this.httpClient.delete(this.apiUrl + url, options);
  }
}
