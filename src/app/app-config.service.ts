import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfig {

  constructor(private httpClient: HttpClient) {

  }

  public getParentJSON(): Observable<any> {
    const apiUrl = '../assets/parent.json';
    return this.httpClient.get(apiUrl);
  }

  public getChildJSON(): Observable<any> {
    const apiUrl = '../assets/child.json';
    return this.httpClient.get(apiUrl);
  }
}
