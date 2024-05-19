import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from "./home/home.component";
import { AuthenticationService } from "./auth/authentication.service";
import { authServiceFactory } from "./utils/utils";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NavigationComponent,
      FooterComponent,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      NgbModule,
      HomeComponent,
      // for firestore
    ],
  providers: [
    provideAnimationsAsync(),
    { provide: 'AUTHENTICATION_PROVIDER', useValue: environment.authenticationService },
    { provide: AuthenticationService, useFactory: authServiceFactory, deps: [ 'AUTHENTICATION_PROVIDER' ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
