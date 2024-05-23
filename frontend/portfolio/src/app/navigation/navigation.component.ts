import { Component } from '@angular/core';
import { FirebaseAuthenticationService } from '../auth/firebase.authentication.service';
import {UserProfile} from "../register/register.component";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  protected title: string = 'Portfolio'
  protected authenticated: boolean = false;
  protected user: UserProfile;

  constructor(private authService: AuthenticationService) {
    this.authService.isUserAuthenticated().subscribe( value => this.authenticated = value);
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

}
