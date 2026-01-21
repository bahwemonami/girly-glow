import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PhoneButtonComponent } from './shared/components/phone-button/phone-button.component';
import { CookieBannerComponent } from './shared/components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PhoneButtonComponent,
    CookieBannerComponent
  ],
  template: `
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <app-header />
    <main id="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-phone-button />
    <app-cookie-banner />
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    main {
      min-height: calc(100vh - 80px);
    }
  `]
})
export class AppComponent {}
