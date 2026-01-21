import { Component, inject, signal, computed } from '@angular/core';
import { PrestationsService } from '../../core/services/prestations.service';
import { CategoryFilterComponent } from '../../shared/components/category-filter/category-filter.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Category } from '../../core/models/prestation.model';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CategoryFilterComponent, ServiceCardComponent, IconComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss'
})
export class PrestationsComponent {
  private prestationsService = inject(PrestationsService);
  
  categories = this.prestationsService.categories;
  selectedCategory = signal('all');

  filteredCategories = computed(() => {
    const selected = this.selectedCategory();
    if (selected === 'all') {
      return this.categories();
    }
    return this.categories().filter(c => c.id === selected);
  });

  onCategoryChange(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }

  trackByCategory(index: number, category: Category) {
    return category.id;
  }
}
