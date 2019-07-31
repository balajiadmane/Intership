import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import {HomepageModule} from './homepage/homepage.module'
import { LogoutComponent } from './public/logout/logout.component'
import{AuthGuard} from './auth.guard'
const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  /**
   * private route
   * lazy loading comp
   */
  {path:"home",loadChildren:'./homepage/homepage.module#HomepageModule',canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
