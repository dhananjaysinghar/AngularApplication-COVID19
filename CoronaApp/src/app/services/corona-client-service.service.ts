import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaClientServiceService {
  constructor(public httpClient: HttpClient) { }
  public getCurrentStatus(): Observable<any> {
    return this.httpClient.get('https://corona.lmao.ninja/v2/countries');
  }
}
