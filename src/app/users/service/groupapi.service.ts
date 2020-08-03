import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGroup} from '../model/igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {
  private URL_API = environment.url + 'gr';


  constructor(private http:HttpClient) { }

  getGroups():Observable<any>{
    return this.http.get(this.URL_API)
  }

}
