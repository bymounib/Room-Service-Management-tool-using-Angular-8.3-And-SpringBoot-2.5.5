import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authenticationSevice: AuthenticationService,private router: Router){
  }
  ngOnInit(): void {
    if (this.authenticationSevice.isAuthenticated()) {
      //this.router.navigate(['/user/order']);
    }
  }

}
