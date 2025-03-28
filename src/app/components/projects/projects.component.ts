import { Component, Input} from '@angular/core';

import { Projet } from '../model/projet';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 @Input() projet!: Projet;

}
