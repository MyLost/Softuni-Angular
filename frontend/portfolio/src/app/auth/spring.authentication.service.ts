import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Observable, of } from "rxjs";
import { LoginUser } from "../login/login.component";
import { RegisterUser, UserProfile } from "../register/register.component";

@Injectable({providedIn: 'root'})
export class SpringAuthenticationService extends AuthenticationService {

  override get isAdmin(): boolean {
    return false;
  }

  isUserAuthenticated(): Observable<boolean> {
    return of(true)
  }
  signOut(): void {
    throw new Error("Method not implemented.");
  }
  signInWithEmailAndPassword(email: string, password: string): Observable<any> {
   return of(true);
  }
  signIn(user: LoginUser): void {
    throw new Error("Method not implemented.");
  }
  createUser(registerUser: RegisterUser): void {
    throw new Error("Method not implemented.");
  }
  get userProfile(): Observable<UserProfile | null> {
     return of(null);
  }
  updateUser(userProfile: UserProfile): Observable<void> {
    return of();
  }
}
