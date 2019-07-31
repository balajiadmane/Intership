import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth-service.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private route:Router
  ) { }

  ngOnInit() {
    this.auth.logout();
  }

}
