import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RegisterService } from './register.service';
import { UserAbout } from "../about/about.component";
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { provideNativeDateAdapter } from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";

export interface UserProfile {
  id: string;
  firstName: string,
  lastName: string,
  address: string,
  phoneNumber: string,
  dateOfBirth: Date,
  email: string,
  aboutUser: UserAbout
}

export interface RegisterUser extends UserProfile {
  password: string,
  confirmPassword: string,
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIcon, MatIconButton, MatCheckbox, MatButton],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [ AngularFireDatabase, provideNativeDateAdapter() ]
})
export class RegisterComponent {

  protected user: RegisterUser = {} as RegisterUser;
  protected termsAndConditions: boolean = false;
  protected hide: boolean = true;

  constructor(private rSvc: RegisterService) {}

  protected submit(ngForm: NgForm) {
    ngForm.form.markAllAsTouched();
    if(ngForm.valid) {
      this.rSvc.doRegister(this.user);
    }
  }

  protected updateTermsAndConditions(event: boolean) {
    this.termsAndConditions = event
  }
}
