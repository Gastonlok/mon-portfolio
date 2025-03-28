import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjetListComponent },
  { path: 'contact', component: ContactComponent },
];
