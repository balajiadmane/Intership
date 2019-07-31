
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
/**
 * Interface
 */
export interface LoginInterface {
  authenticateUser(LoginForm: LoginForm): boolean;
}

@Injectable()
export class AuthService {

  private api: string = "http://nodejs.hackerkernel.com/scholarsathi/login"
  constructor(
    private myRoute: Router,
    private http: HttpClient
  ) { }

  /**
   * 
   * @param token 
   * Login with API
   */
  authenticateWithAPI(payload: LoginForm): Observable<any> {
    let formData = new FormData();
    formData.append("email", payload.email);
    formData.append("password", payload.password)

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.post<any>(this.api, formData, { headers: headers });

  }

  /**
   * 
   * store the user token in loc
   */
  sendToken(token: string) {
    window.localStorage.setItem("LoggedInUser", token)
  }
  /**
   * return the token from localstorage
   */
  getToken() {
    return window.localStorage.getItem("LoggedInUser")
  }

  /**
   * check if the user is logged in or not
   */
  isLoggednIn() {
    console.log(this.getToken())
    return this.getToken() !== null ? true : false;
  }

  /**
   * clear the localstorage
   */
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }
}

/**
 * Login class
 */

export class LoginForm {
  email: string
  password: string
}