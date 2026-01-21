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
}
