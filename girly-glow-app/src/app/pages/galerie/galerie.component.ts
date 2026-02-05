import { Component, signal, computed } from '@angular/core';
import { GalleryItem } from '../../core/models/prestation.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss'
})
export class GalerieComponent {
  selectedCategory = signal('all');
  selectedImage = signal<GalleryItem | null>(null);

  // Image aléatoire pour le header
  headerImage = this.getRandomManucureImage();

  private getRandomManucureImage(): string {
    const imageCount = 34; // Nombre total d'images disponibles
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `/images/manucure/galerie-manucure-${randomIndex}.jpg`;
  }

  categories = [
    { id: 'all', name: 'Toutes', icon: 'all' },
    { id: 'epilation', name: 'Épilation', icon: 'thread' },
    { id: 'manucure', name: 'Manucure', icon: 'nails' },
    { id: 'visage', name: 'Soins Visage', icon: 'face' },
    { id: 'massage', name: 'Massage', icon: 'massage' },
    { id: 'henne', name: 'Henné', icon: 'henna' },
    { id: 'salon', name: 'Salon', icon: 'salon' }
  ];

  galleryItems: GalleryItem[] = [
    { id: '1', src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop', alt: 'Épilation sourcils au fil', category: 'epilation' },
    { id: '2', src: '/images/manucure/galerie-manucure-1.jpg', alt: 'Manucure professionnelle - Design élégant', category: 'manucure' },
    { id: '3', src: '/images/manucure/galerie-manucure-2.jpg', alt: 'Manucure professionnelle - Nail art créatif', category: 'manucure' },
    { id: '4', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop', alt: 'Soin du visage bio', category: 'visage' },
    { id: '5', src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=600&fit=crop', alt: 'Massage relaxant', category: 'massage' },
    { id: '6', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop', alt: 'Massage ayurvédique', category: 'massage' },
    { id: '7', src: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&h=600&fit=crop', alt: 'Henné design main', category: 'henne' },
    { id: '8', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop', alt: 'Intérieur salon', category: 'salon' },
    { id: '9', src: '/images/manucure/galerie-manucure-3.jpg', alt: 'Manucure professionnelle - Style moderne', category: 'manucure' },
    { id: '10', src: '/images/manucure/galerie-manucure-4.jpg', alt: 'Manucure professionnelle - Finition parfaite', category: 'manucure' },
    { id: '11', src: '/images/manucure/galerie-manucure-5.jpg', alt: 'Manucure professionnelle - Art des ongles', category: 'manucure' },
    { id: '12', src: '/images/manucure/galerie-manucure-6.jpg', alt: 'Manucure professionnelle - Création unique', category: 'manucure' },
    { id: '13', src: '/images/manucure/galerie-manucure-7.jpg', alt: 'Manucure professionnelle - Design sophistiqué', category: 'manucure' },
    { id: '14', src: '/images/manucure/galerie-manucure-8.jpg', alt: 'Manucure professionnelle - Nail art tendance', category: 'manucure' },
    { id: '15', src: '/images/manucure/galerie-manucure-9.jpg', alt: 'Manucure professionnelle - Style élégant', category: 'manucure' },
    { id: '16', src: '/images/manucure/galerie-manucure-10.jpg', alt: 'Manucure professionnelle - Réalisation artistique', category: 'manucure' },
    { id: '17', src: '/images/manucure/galerie-manucure-11.jpg', alt: 'Manucure professionnelle - Design raffiné', category: 'manucure' },
    { id: '18', src: '/images/manucure/galerie-manucure-12.jpg', alt: 'Manucure professionnelle - Création exclusive', category: 'manucure' },
    { id: '19', src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop', alt: 'Soin hydratant visage', category: 'visage' },
    { id: '20', src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop', alt: 'Ambiance zen', category: 'salon' }
  ];

  filteredItems = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === category);
  });

  selectCategory(id: string) {
    this.selectedCategory.set(id);
  }

  openLightbox(item: GalleryItem) {
    this.selectedImage.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage.set(null);
    document.body.style.overflow = '';
  }

  navigateImage(direction: 'prev' | 'next') {
    const current = this.selectedImage();
    if (!current) return;

    const items = this.filteredItems();
    const currentIndex = items.findIndex(item => item.id === current.id);
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {
      newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }

    this.selectedImage.set(items[newIndex]);
  }
}
