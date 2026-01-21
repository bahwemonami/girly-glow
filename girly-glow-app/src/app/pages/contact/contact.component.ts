import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrestationsService } from '../../core/services/prestations.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private prestationsService = inject(PrestationsService);

  salonInfo = this.prestationsService.salonInfo;
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+\.]{10,}$/)]],
    email: ['', [Validators.email]],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  services = [
    'Épilation au Fil',
    'Épilation Cire Chaude',
    'Soin du Visage Bio',
    'Beauté des Mains',
    'Beauté des Pieds',
    'Pose de Faux Ongles',
    'Massages Ayurvédiques',
    'Henné Design',
    'Soins des Cheveux',
    'Prestations Homme',
    'Autre'
  ];

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.f).forEach(key => {
        this.f[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting.set(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
    this.contactForm.reset();
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  formatPhoneForTel(phone: string): string {
    return phone.replace(/\s/g, '');
  }
}
