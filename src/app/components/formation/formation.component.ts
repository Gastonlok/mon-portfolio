import { Component, Input } from '@angular/core';
import { Formation } from '../model/formation';

@Component({
  selector: 'app-formation',
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
 @Input() formation!: Formation;
}
