import { Observable } from "rxjs";
import { RegisterUser, UserProfile } from "../register/register.component";
import { LoginUser } from "../login/login.component";

export abstract class AuthenticationService {

  abstract isUserAuthenticated(): Observable<boolean>;

  abstract signOut(): void;

  abstract signInWithEmailAndPassword (email: string, password: string): Observable<any>;

  abstract signIn (user: LoginUser): void;

  abstract createUser(registerUser: RegisterUser): void;

  // Use this method to retrieve user information
  abstract get userProfile(): Observable<UserProfile | null>;

  abstract updateUser(userProfile: UserProfile): Observable<void>;

  abstract get isAdmin(): boolean;

}
