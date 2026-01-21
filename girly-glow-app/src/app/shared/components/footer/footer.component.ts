import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/prestations', label: 'Prestations' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
    { path: '/mentions-legales', label: 'Mentions légales' }
  ];

  hours = [
    { day: 'Lundi - Dimanche', time: '10h00 - 20h00' }
  ];
}
