import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  doLogin() {
    //console.log("username:",this.username)
    let resp= this.authenticationService.authenticate(this.username,this.password);
/*   resp.subscribe(data=>{
     console.log(data)
   })*/
  } 
}
