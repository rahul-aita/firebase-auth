import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';

import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
const routes: Routes = [{
  path:'',
  pathMatch:'full',component:LandingComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:"sign-up",
  component:SignUpComponent
}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
