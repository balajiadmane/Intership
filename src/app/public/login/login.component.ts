import { Component, OnInit } from '@angular/core';
import { AuthService, LoginInterface, LoginForm } from '../../service/auth-service.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements LoginInterface {

  private loginForm: FormGroup;
  private alert: AlertMessage = new AlertMessage();

  constructor(
    private auth: AuthService,
    private route: Router
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })

  }

  ngOnInit() {
  }
  /**
   * 
   */
  authenticateUser(form: LoginForm): boolean {
    /**
     * check email and password form field are validated
     */
    if (!this.validation.isEmailAddress(form.email) && !this.validation.isNotEmpty(form.password)) {
      console.log("form is not validated")
      this.alert.className = "alert alert-warning"
      this.alert.isVisible = true
      this.alert.message = "Please fill all form field"
      return false;
    }
    if (form.email === "Admin@gmail.com" && form.password === "123456") {
      this.auth.sendToken(form.email)
      this.route.navigate(['home'])

    }else{
      this.alert.className = "alert alert-warning"
      this.alert.isVisible = true
      this.alert.message = "User does't exist"
    }
    // this.auth.authenticateWithAPI(form).subscribe(
    //   (response)=>{
    //       console.log(response)
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
  }

  /**
   * form validation
   */
  validation = {
    isEmailAddress: function (str) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return pattern.test(str);  // returns a boolean
    },
    isNotEmpty: function (str) {
      var pattern = /\S+/;
      return pattern.test(str);  // returns a boolean
    },
  };
}


/**
 * alert 
 */

export class AlertMessage {
  message: string
  className: string
  isVisible: boolean
}