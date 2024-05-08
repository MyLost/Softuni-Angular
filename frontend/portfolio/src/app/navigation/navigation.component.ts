import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import {UserProfile} from "../register/register.component";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
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
