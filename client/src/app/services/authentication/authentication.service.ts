import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated=false;
  constructor(private http:HttpClient,private router: Router) { 
  }

  authenticate(username:string,password:string){
    if (this.login(username,password)) {
      this.isAuthenticated = true;
      this.router.navigate(['claim']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  public login(username:string,password:string){
    const headers= new HttpHeaders({Authorization: 'Basic '+ btoa(username+":"+password)});
    //this.isAuthenticated=true;
    return this.http.get("http://localhost:9191/admin",{headers,responseType: 'text' as 'json'})
  }
}
