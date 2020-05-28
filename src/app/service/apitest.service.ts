import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApitestService {
  baseurl = 'http://localhost/Test/home/testdata';
  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get(this.baseurl);
  }
}
