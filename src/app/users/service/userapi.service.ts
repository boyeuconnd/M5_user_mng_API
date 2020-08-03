import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../model/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private URL_API = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any>{
    return this.http.get(this.URL_API);
  }

  deleteById(id:number):Observable<IUser>{
    // console.log(this.URL_API +'/'+ id + '/delete');
    return this.http.delete<IUser>(this.URL_API +'/'+ id + '/delete');
  }

  getUserById(id:number):Observable<IUser>{
    return this.http.get<IUser>(this.URL_API + '/'+ id);
  }

}
