import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet';
import { ProjectsComponent } from '../projects/projects.component';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-projet-list',
  imports: [ProjectsComponent,],
  templateUrl: './projet-list.component.html',
  styleUrl: './projet-list.component.css'
})
export class ProjetListComponent  {
  
    projects: Projet[] = [
      {
        title: 'Mini Réseau Social',
        description: 'Une plateforme sociale pour étudiants à Kinshasa.',
        image: 'assets/img/nod.png',
        link: 'https://github.com/ton-repo/mini-reseau-social',
        category: 'Web',
      },
      {
        title: 'Raccourcisseur d’URL',
        description: 'Générateur de liens courts avec QR Code.',
        image: 'assets/images/url-shortener.png',
        link: 'https://github.com/ton-repo/url-shortener',
        category: 'Web',
      },
      {
        title: 'Analyse des Léopards',
        description: 'Statistiques des performances de l’équipe nationale de la RDC.',
        image: 'assets/images/leopards-stats.png',
        link: 'https://github.com/ton-repo/leopards-analysis',
        category: 'Data Science',
      }
    ];
  }



