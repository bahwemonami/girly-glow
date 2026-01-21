import { Component, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [IconComponent],
  template: `
    @if (isVisible()) {
      <div class="cookie-banner" role="dialog" aria-label="Bannière de cookies">
        <div class="cookie-content">
          <div class="cookie-text">
            <div class="cookie-icon">
              <app-icon name="cookie" size="lg" />
            </div>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre 
              <a href="/mentions-legales">politique de confidentialité</a>.
            </p>
          </div>
          <div class="cookie-actions">
            <button class="btn-accept" (click)="acceptCookies()">
              Accepter
            </button>
            <button class="btn-decline" (click)="declineCookies()">
              Refuser
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: $white;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
      z-index: $z-index-cookie-banner;
      padding: $spacing-lg;
      animation: slideUp 0.4s ease;
      border-top: 1px solid $gray-100;
    }

    .cookie-content {
      @include container;
      display: flex;
      flex-direction: column;
      gap: $spacing-lg;

      @include md {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .cookie-text {
      display: flex;
      gap: $spacing-md;
      align-items: flex-start;

      .cookie-icon {
        color: $primary-rose;
        flex-shrink: 0;
      }

      p {
        font-size: $font-size-sm;
        color: $gray-600;
        margin: 0;
        line-height: 1.6;

        a {
          color: $primary-rose;
          text-decoration: underline;
        }
      }
    }

    .cookie-actions {
      display: flex;
      gap: $spacing-sm;
      flex-shrink: 0;
    }

    .btn-accept {
      @include button-primary;
      padding: $spacing-sm $spacing-lg;
      font-size: $font-size-xs;
    }

    .btn-decline {
      @include button-secondary;
      padding: $spacing-sm $spacing-lg;
      font-size: $font-size-xs;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `]
})
export class CookieBannerComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  isVisible = signal(false);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setTimeout(() => this.isVisible.set(true), 1000);
      }
    }
  }

  acceptCookies() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie-consent', 'accepted');
    }
    this.isVisible.set(false);
  }

  declineCookies() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie-consent', 'declined');
    }
    this.isVisible.set(false);
  }
}
