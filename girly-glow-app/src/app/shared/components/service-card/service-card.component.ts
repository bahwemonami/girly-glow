import { Component, Input } from '@angular/core';
import { Prestation } from '../../../core/models/prestation.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) prestation!: Prestation;
  @Input() showDescription = true;
}
