import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrestationsService } from '../../core/services/prestations.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private prestationsService = inject(PrestationsService);
  
  categories = this.prestationsService.categories;
  salonInfo = this.prestationsService.salonInfo;

  features = [
    { icon: 'thread', title: 'Épilation au Fil', description: 'Technique douce et précise' },
    { icon: 'nails', title: 'Manucure & Pédicure', description: 'Soins complets des ongles' },
    { icon: 'massage', title: 'Massages Ayurvédiques', description: 'Relaxation profonde' },
    { icon: 'face', title: 'Soins Visage Bio', description: 'Produits naturels' },
    { icon: 'henna', title: 'Henné Design', description: 'Art corporel traditionnel' },
    { icon: 'hair', title: 'Soins Cheveux', description: 'Coloration naturelle au henné' }
  ];
}
