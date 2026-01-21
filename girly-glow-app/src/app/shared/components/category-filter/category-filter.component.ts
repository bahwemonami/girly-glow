import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { Category } from '../../../core/models/prestation.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="category-filter">
      <button 
        class="filter-btn"
        [class.active]="selectedCategory() === 'all'"
        (click)="selectCategory('all')"
      >
        <app-icon name="all" size="sm" />
        <span class="label">Toutes</span>
      </button>
      @for (category of categories; track category.id) {
        <button 
          class="filter-btn"
          [class.active]="selectedCategory() === category.id"
          (click)="selectCategory(category.id)"
        >
          <app-icon [name]="category.icon" size="sm" />
          <span class="label">{{ category.name }}</span>
        </button>
      }
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .category-filter {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-sm;
      justify-content: center;
      padding: $spacing-md 0;
    }

    .filter-btn {
      display: inline-flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-sm $spacing-lg;
      background: $white;
      color: $gray-600;
      font-family: $font-primary;
      font-size: $font-size-xs;
      font-weight: $font-weight-medium;
      letter-spacing: $letter-spacing-wide;
      text-transform: uppercase;
      border: 1px solid $gray-200;
      border-radius: $border-radius-sm;
      cursor: pointer;
      transition: all $transition-fast;
      @include focus-visible;

      &:hover {
        border-color: $primary-rose;
        color: $primary-rose;
      }

      &.active {
        background: $primary-rose;
        color: $white;
        border-color: $primary-rose;
      }

      .label {
        display: none;

        @include md {
          display: inline;
        }
      }
    }
  `]
})
export class CategoryFilterComponent {
  @Input() categories: Category[] = [];
  @Output() categoryChange = new EventEmitter<string>();
  
  selectedCategory = signal('all');

  selectCategory(id: string) {
    this.selectedCategory.set(id);
    this.categoryChange.emit(id);
  }
}
