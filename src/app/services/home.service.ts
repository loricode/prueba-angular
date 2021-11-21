import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/response/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl:string = environment.baseUrl;
  public text:string = "mi prueba";

  constructor( private http:HttpClient) { }

  public getUsers():Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.baseUrl);
  }

}
