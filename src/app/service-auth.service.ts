import { formatCurrency } from '@angular/common';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from'@angular/fire/auth'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  constructor(private auth:Auth) { }
  login(username:string,password:string){
return from(signInWithEmailAndPassword (this.auth,username,password))
  }
  logout(){
    return from (this.auth.signOut())
  }
}
