import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private URL_API = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any>{
    return this.http.get(this.URL_API);
  }

}
