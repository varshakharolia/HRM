import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="https://hrmback.onrender.com/login";

  constructor(private http:HttpClient) { }


  loginUser(data:any){

    return this.http.post(this.url, data)
  }
}
