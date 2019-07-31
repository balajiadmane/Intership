import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import {HomepageModule} from './homepage/homepage.module'
import{AuthGuard} from './auth.guard'
const routes: Routes = [
  {path:"login",component:LoginComponent},

  /**
   * private route
   */
  {path:"home",loadChildren:'./homepage/homepage.module#HomepageModule',canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
