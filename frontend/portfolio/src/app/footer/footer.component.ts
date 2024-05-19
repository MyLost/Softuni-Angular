import { Component } from '@angular/core';
import { DatePipe, NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'np-footer',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  getPath() {
    return '';
  }

  protected readonly test = module
}
