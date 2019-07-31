
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient, HttpHeaders} from '@angular/common/http'
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
    private http:HttpClient
  ) { }

  /**
   * 
   * @param token 
   * Login with API
   */
  authenticateWithAPI(payload:LoginForm) {
    let formData = new FormData();
    formData.append("email",payload.email);
    formData.append("password",payload.password)
    console.log(formData)
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
   return  this.http.post(this.api,formData,{ headers: headers });
   
  }
  sendToken(token: string) {
    window.localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return window.localStorage.getItem("LoggedInUser")
  }

  
  isLoggednIn() {
    console.log(this.getToken())
    return this.getToken() !== null?true:false;
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