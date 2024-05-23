import { Injectable } from '@angular/core';
import { LoginUser } from "./login.component";
import { FirebaseAuthenticationService } from "../auth/firebase.authentication.service";
import { Observable } from "rxjs";
import firebase from "firebase/compat";
import { AuthenticationService } from "../auth/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authSvc: AuthenticationService) { }

  public doEmailPasswordLogin(email: string, password: string): any {
    if(email && password) {
      return this.authSvc.signInWithEmailAndPassword(email, password);
    } else {
      throw new Error('Email ot password not provided!');
    }
  }

  public doLogin(user: LoginUser) {
    if(user) {
      this.authSvc.signIn(user);
    } else {
      throw new Error('Login user not provided!')
    }
  }

}
