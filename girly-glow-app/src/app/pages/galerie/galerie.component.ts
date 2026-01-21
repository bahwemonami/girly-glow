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
    { id: '2', src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=600&fit=crop', alt: 'Manucure professionnelle', category: 'manucure' },
    { id: '3', src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop', alt: 'Pose de vernis', category: 'manucure' },
    { id: '4', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop', alt: 'Soin du visage bio', category: 'visage' },
    { id: '5', src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=600&fit=crop', alt: 'Massage relaxant', category: 'massage' },
    { id: '6', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop', alt: 'Massage ayurvédique', category: 'massage' },
    { id: '7', src: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&h=600&fit=crop', alt: 'Henné design main', category: 'henne' },
    { id: '8', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop', alt: 'Intérieur salon', category: 'salon' },
    { id: '9', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', alt: 'Nail art créatif', category: 'manucure' },
    { id: '10', src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop', alt: 'Ambiance zen', category: 'salon' },
    { id: '11', src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop', alt: 'Soin hydratant visage', category: 'visage' },
    { id: '12', src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&h=600&fit=crop', alt: 'Pédicure soin', category: 'manucure' }
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
