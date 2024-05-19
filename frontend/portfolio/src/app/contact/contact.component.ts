import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertComponent } from "../alert/alert.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";

interface ContactForm {
  name: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    AlertComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  protected contactForm: ContactForm = {} as ContactForm;
  protected sendSuccess: boolean = false;

  protected send(ngForm: NgForm) {
    ngForm.form.markAllAsTouched();
    if(ngForm.valid) {
      // TODO process send email.
      this.sendSuccess = true;
      ngForm.reset();
      setTimeout(() => {this.sendSuccess = false}, 1000);
    }
  }
}
