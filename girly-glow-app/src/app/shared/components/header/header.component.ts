import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  navLinks = [
    { path: '/', label: 'Accueil', exact: true },
    { path: '/prestations', label: 'Prestations', exact: false },
    { path: '/galerie', label: 'Galerie', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
