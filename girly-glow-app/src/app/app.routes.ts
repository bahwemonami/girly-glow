import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Girly Glow - Centre de Beauté à Paris 20e'
  },
  {
    path: 'prestations',
    loadComponent: () => import('./pages/prestations/prestations.component').then(m => m.PrestationsComponent),
    title: 'Nos Prestations & Tarifs - Girly Glow'
  },
  {
    path: 'galerie',
    loadComponent: () => import('./pages/galerie/galerie.component').then(m => m.GalerieComponent),
    title: 'Galerie Photos - Girly Glow'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact & Rendez-vous - Girly Glow'
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    title: 'Mentions Légales - Girly Glow'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
