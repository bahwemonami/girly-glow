import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {
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

  // Images du carrousel de manucure
  manucureImages = [
    { src: '/images/manucure/manucure-1.jpg', alt: 'Manucure professionnelle - Design élégant' },
    { src: '/images/manucure/manucure-2.jpg', alt: 'Manucure professionnelle - Nail art créatif' },
    { src: '/images/manucure/manucure-3.jpg', alt: 'Manucure professionnelle - Style moderne' },
    { src: '/images/manucure/manucure-4.jpg', alt: 'Manucure professionnelle - Finition parfaite' },
    { src: '/images/manucure/manucure-5.jpg', alt: 'Manucure professionnelle - Art des ongles' },
    { src: '/images/manucure/manucure-6.jpg', alt: 'Manucure professionnelle - Création unique' }
  ];

  currentImageIndex = signal(0);
  private carouselInterval?: number;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = window.setInterval(() => {
      const nextIndex = (this.currentImageIndex() + 1) % this.manucureImages.length;
      this.currentImageIndex.set(nextIndex);
    }, 4000); // Change d'image toutes les 4 secondes
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  goToImage(index: number) {
    this.stopCarousel();
    this.currentImageIndex.set(index);
    this.startCarousel();
  }

  getCurrentImage() {
    return this.manucureImages[this.currentImageIndex()];
  }
}
