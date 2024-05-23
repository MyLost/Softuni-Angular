import { Component, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage } from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import { Project } from "../project/project.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  protected lastFiveProjects: Project[] = [];


  ngOnInit(): void {
      this.lastFiveProjects = [
        {} as Project,
        {} as Project,
        {} as Project,
        {} as Project,
        {} as Project
      ]
  }
}
