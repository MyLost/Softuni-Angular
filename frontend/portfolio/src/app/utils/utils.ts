import { BehaviorSubject } from "rxjs";
import { FirebaseAuthenticationService } from "../auth/firebase.authentication.service";
import { SpringAuthenticationService } from "../auth/spring.authentication.service";

const authenticationProviderCnf: any = {
  'firebase' : {
    provider: () =>  new FirebaseAuthenticationService()
  },
  'spring' : {
    provider: () =>  new SpringAuthenticationService()
  }
}

export const loadingSub: BehaviorSubject<boolean> = new BehaviorSubject(false);

export function authServiceFactory(authenticationProviderName: string) {
  console.log(authenticationProviderCnf[authenticationProviderName].provider())
  return authenticationProviderCnf[authenticationProviderName].provider();
}
