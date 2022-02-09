import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  err:number = 0;

  constructor(private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit() {
    if (this.authenticationService.verifyAuth()) {
      console.log("this.authenticationService.isAuthenticated",this.authenticationService.verifyAuth())
      this.router.navigate(['/orders']);
   }
  }

  doLogin(f: NgForm) {
    let resp= this.authenticationService.login(this.username,this.password);
   resp.subscribe(data=>{
     console.log(data);
     let jwToken = data['jwt'];
     this.authenticationService.saveToken(jwToken);
     this.router.navigate(['claim']);
    },(err)=>{   this.err = 1;
 });
}
}

