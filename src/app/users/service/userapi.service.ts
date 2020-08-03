import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../model/iuser';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private URL_API = environment.url + 'user';
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

  updateUserById(id:number,data:IUser):Observable<IUser>{
    return this.http.put<IUser>(this.URL_API+'/'+id+'/edit', data);
  }

  createUser(data:IUser):Observable<IUser>{
    return this.http.post<IUser>(this.URL_API,data);
  }


}
