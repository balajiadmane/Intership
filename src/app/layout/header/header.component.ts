import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn:boolean = false;

  constructor(
    private auth:AuthService
  ) { if(this.auth.isLoggednIn){
          this.isLoggedIn = true;
          console.log("user is logged in")
      } }

  ngOnInit() {
     
  }

}
