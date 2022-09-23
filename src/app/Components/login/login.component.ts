import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any
loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',Validators.requiredTrue,)
})
  authService: any;
  constructor( authService:AuthenticatorResponse) { }

  ngOnInit(): void {
  }
getemail(){
return this.loginForm.get('email')
}
getpassword(){
  return this.loginForm.get('password')
  }
  submit(){
    if(!this.loginForm.valid){
      return
    }
    this.authService.login(this.email,this.password)
  }
}
