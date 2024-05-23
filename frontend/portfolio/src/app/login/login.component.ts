import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from "./login.service";
import { AlertComponent } from "../alert/alert.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";

export interface LoginUser {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent, NavigationComponent, MatFormFieldModule, MatInput, MatIcon, MatIconButton, MatCheckbox, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  protected loginFailed: boolean = false;
  protected hide = true;

  constructor (private loginSvc: LoginService) {}

  protected user: LoginUser = {
    email: '',
    password: ''
  };

  ngOnInit(): void {}

  protected login(ngForm: NgForm) {
    const { email, password } = ngForm.value;
    this.loginSvc.doEmailPasswordLogin(email, password)
      .then()
      .catch( (error: any) => {this.loginFailed = true;});
  }
}
