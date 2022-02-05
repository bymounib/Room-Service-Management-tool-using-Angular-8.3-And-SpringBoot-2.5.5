import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated=false;

  token:string;
  public loggedUser:string;
  public isloggedIn: Boolean = false;
  private helper = new JwtHelperService();
  constructor(private http:HttpClient,private router: Router) { 
  }

/*  authenticate(username:string,password:string){    
    if (this.login(username,password)) {
//      this.isAuthenticated = true;
      //this.router.navigate(['order']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }*/
  
  public login(username:string,password:string){
//    const headers= new HttpHeaders({Authorization: 'Basic '+ btoa(username+":"+password)});
    //this.isAuthenticated=true;
  //  console.log("headers",headers);
    return this.http.post("http://localhost:9191/authenticate",{username,password});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true; 
    this.decodeJWT();
    this.isAuthenticated = true; 
  }
  
  decodeJWT()
  {   if (this.token == undefined)
            return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.loggedUser = decodedToken.sub;
  }

}
