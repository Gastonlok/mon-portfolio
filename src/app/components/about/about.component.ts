import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about',
  imports:[NgFor, NavbarComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  name: string = 'Gaston Manga';
  title: string = 'Développeur Web & Mobile';
  description: string = `
    Passionné par le développement web et mobile, j'aime créer des applications performantes et intuitives.
    J'ai une solide expérience avec Angular, React, Node.js et les bases de données SQL.
  `;
  cvLink: string = 'assets/files/CV_Gaston_Manga.pdf';

  skills = [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'AdonisJS', icon: 'assets/icons/adonisjs.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
    { name: 'UX/UI Design', icon: 'assets/icons/figma.svg' }
  ];
}
