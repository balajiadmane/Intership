import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn:boolean=false;

  constructor(
    private auth:AuthService,
    private route:Router
  ) { 
     
    }

  ngOnInit() {
     
  }

  ///
  loggedIn(){
    let token = window.localStorage.getItem('LoggedInUser')
    if(token === null)
        return false
    else
        return true  
  }
}
