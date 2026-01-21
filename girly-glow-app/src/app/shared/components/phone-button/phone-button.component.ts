import { Component, signal, HostListener } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-phone-button',
  standalone: true,
  imports: [IconComponent],
  template: `
    <a 
      href="tel:0172381004" 
      class="phone-button"
      [class.visible]="isVisible()"
      aria-label="Appeler Girly Glow"
    >
      <app-icon name="phone" size="md" />
      <span class="text">Appeler</span>
    </a>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .phone-button {
      position: fixed;
      bottom: 100px;
      right: $spacing-lg;
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-md $spacing-lg;
      background: $gradient-button;
      color: $white;
      font-weight: $font-weight-medium;
      font-size: $font-size-sm;
      letter-spacing: $letter-spacing-wide;
      text-transform: uppercase;
      border-radius: $border-radius-sm;
      box-shadow: $shadow-rose;
      text-decoration: none;
      z-index: $z-index-phone-button;
      opacity: 0;
      transform: translateY(20px) scale(0.9);
      transition: all $transition-smooth;
      pointer-events: none;

      &.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      &:hover {
        background: $gradient-button-hover;
        transform: translateY(-3px) scale(1.02);
        box-shadow: $shadow-rose-lg;
      }

      .text {
        display: none;

        @include md {
          display: inline;
        }
      }

      @include md {
        bottom: $spacing-xl;
      }
    }
  `]
})
export class PhoneButtonComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible.set(window.scrollY > 300);
  }
}
