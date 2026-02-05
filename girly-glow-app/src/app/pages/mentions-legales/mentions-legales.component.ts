import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrestationsService } from '../../core/services/prestations.service';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.scss'
})
export class MentionsLegalesComponent {
  private prestationsService = inject(PrestationsService);
  salonInfo = this.prestationsService.salonInfo;
  currentYear = new Date().getFullYear();

  // Image aléatoire pour le header
  headerImage = this.getRandomManucureImage();

  private getRandomManucureImage(): string {
    const imageCount = 34; // Nombre total d'images disponibles
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `/images/manucure/galerie-manucure-${randomIndex}.jpg`;
  }
}