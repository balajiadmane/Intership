
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http'
/**
 * Interface
 */
export interface LoginInterface {
  authenticateUser(LoginForm:LoginForm)
}

@Injectable()
export class AuthService {

  private api:string= "http://nodejs.hackerkernel.com/scholarsathi/login"
  constructor(
    private myRoute: Router,
    private _http:HttpClient
  ) { }

  /**
   * 
   * @param token 
   * Login with API
   */
  authenticateWithAPI(payload:LoginForm) {
  //   payload['data']={
  //       email:payload.email,
  //       password:payload.password
  //   }
  //  return  this._http.post(this.api,payload);
    return true;
  }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  
  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }
}


/**
 * Login class
 */

 export class LoginForm{
   email:string
   password:string
 }