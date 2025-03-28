import { Component } from '@angular/core';
import { FormationComponent } from "../formation/formation.component";
import { Formation } from '../model/formation';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss'],
  imports: [FormationComponent],
})
export class FormationListComponent {
  formations: Formation[] = [
    {
      title: 'Bac+3 en Mathématiques et Informatique',
      institution: 'Université Pédagogique Nationale',
      year: '2022',
      logo: 'assets/images/upn.png',
    },
    {
      title: 'Certification Développeur Web & Mobile',
      institution: 'Simplon RDC',
      year: '2023',
      logo: 'assets/images/simplon.png',
    },
    {
      title: 'Formation en UX/UI Design',
      institution: 'Autodidacte (Figma, Udemy)',
      year: '2024',
      logo: 'assets/images/figma.png',
    }
  ];
}
