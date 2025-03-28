import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // Importer MatCardModule
import { MatIconModule } from '@angular/material/icon';  // Importer MatIconModule
import { ProjetListComponent } from '../projet-list/projet-list.component';
import { FormationListComponent } from '../formation-list/formation-list.component';
@Component({
  selector: 'app-main',
  imports: [RouterOutlet, MatCardModule, MatIconModule, ProjetListComponent, FormationListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
