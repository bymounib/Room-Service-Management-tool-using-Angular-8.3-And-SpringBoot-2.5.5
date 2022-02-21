import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoomServices';
  constructor(public authenticationSevice: AuthenticationService,private router: Router){
  }
  ngOnInit(): void {
  }
}
