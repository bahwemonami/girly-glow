import { Injectable, signal } from '@angular/core';
import { Category, Prestation, SalonInfo } from '../models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  
  readonly salonInfo: SalonInfo = {
    name: 'Girly Glow',
    slogan: 'Centre de Beauté',
    address: {
      street: '31 rue du Borrego',
      city: 'Paris',
      postalCode: '75020',
      country: 'France'
    },
    phones: ['01 72 38 10 04', '06 05 90 41 01'],
    email: 'girlyglowbeauty@gmail.com',
    hours: {
      days: 'Lundi - Dimanche',
      open: '10h00',
      close: '20h00'
    },
    metro: ['3bis Saint-Fargeau', '11 Télégraphe'],
    social: {
      facebook: 'https://www.facebook.com/GirlyGlow'
    },
    coordinates: {
      lat: 48.8738,
      lng: 2.4012
    }
  };

  readonly categories = signal<Category[]>([
    {
      id: 'epilation-fil',
      name: 'Épilation au Fil',
      icon: 'thread',
      description: 'Technique traditionnelle douce et précise pour une peau lisse',
      image: 'assets/images/epilation-fil.jpg',
      prestations: [
        { id: 'ef-sourcils', name: 'Sourcils', price: 5, duration: 10 },
        { id: 'ef-levre', name: 'Lèvre', price: 5, duration: 5 },
        { id: 'ef-menton', name: 'Menton', price: 5, duration: 5 },
        { id: 'ef-joues', name: 'Joues', price: 6, duration: 10 },
        { id: 'ef-front', name: 'Front', price: 5, duration: 5 },
        { id: 'ef-cou', name: 'Cou', price: 14, duration: 10 },
        { id: 'ef-visage', name: 'Visage complet', price: 17, duration: 25 },
        { id: 'ef-sourcils-levre', name: 'Sourcils + Lèvre + Menton', price: 10, duration: 15 },
        { id: 'ef-forfait32', name: 'Forfait Demi-jambes + aisselles + maillot simple', price: 32, duration: 45 },
        { id: 'ef-forfait42', name: 'Forfait Demi-jambes + aisselles + maillot intégral', price: 42, duration: 60 },
        { id: 'ef-forfait50', name: 'Forfait Jambes complètes + pieds + aisselles + maillot intégral', price: 50, duration: 75 }
      ]
    },
    {
      id: 'epilation-cire',
      name: 'Épilation Cire Chaude',
      icon: 'wax',
      description: 'Épilation longue durée pour une peau parfaitement lisse',
      image: 'assets/images/epilation-cire.jpg',
      prestations: [
        { id: 'ec-sourcils', name: 'Sourcils', price: 7, duration: 10 },
        { id: 'ec-levre-menton', name: 'Lèvre / Menton', price: 5, duration: 5 },
        { id: 'ec-joues', name: 'Joues', price: 6, duration: 10 },
        { id: 'ec-front', name: 'Front', price: 5, duration: 5 },
        { id: 'ec-visage', name: 'Visage complet', price: 15, duration: 20 },
        { id: 'ec-aisselles', name: 'Aisselles', price: 10, duration: 10 },
        { id: 'ec-ventre', name: 'Ventre (à partir de)', price: 10, duration: 15 },
        { id: 'ec-dos', name: 'Dos (à partir de)', price: 10, duration: 20 },
        { id: 'ec-maillot-simple', name: 'Maillot simple', price: 10, duration: 15 },
        { id: 'ec-maillot-echancre', name: 'Maillot échancré', price: 15, duration: 20 },
        { id: 'ec-maillot-integral', name: 'Maillot intégral', price: 20, duration: 25 },
        { id: 'ec-maillot-bresilien', name: 'Maillot Américain ou Brésilien', price: 20, duration: 25 },
        { id: 'ec-maillot-fessier', name: 'Maillot complet et inter fessier', price: 25, duration: 30 },
        { id: 'ec-inter-fessier', name: 'Inter fessier', price: 5, duration: 10 },
        { id: 'ec-demi-jambes', name: 'Demi-jambes', price: 16, duration: 20 },
        { id: 'ec-jambes-entieres', name: 'Jambes entières', price: 25, duration: 35 },
        { id: 'ec-cuisses', name: 'Cuisses', price: 19, duration: 20 },
        { id: 'ec-demi-bras', name: 'Demi-bras', price: 12, duration: 15 },
        { id: 'ec-bras-entiers', name: 'Bras entiers', price: 15, duration: 20 }
      ]
    },
    {
      id: 'soin-visage',
      name: 'Soin du Visage Bio',
      icon: 'face',
      description: 'Soins naturels ayurvédiques pour une peau éclatante',
      image: 'assets/images/soin-visage.jpg',
      prestations: [
        { id: 'sv-simple', name: 'Soins Simple (35 mins)', price: 25, duration: 35, description: 'Gommage, modelage, masque' },
        { id: 'sv-complet', name: 'Soin du visage complet (50 mins)', price: 32, duration: 50, description: 'Gommage, modelage, masque' },
        { id: 'sv-modelage', name: 'Modelage / massage', price: 25, duration: 30 },
        { id: 'sv-vapeur', name: 'Soin du vapeur/purification', price: 38, duration: 45, description: 'Gommage, vaporisation, suppression des points noirs' },
        { id: 'sv-indienne', name: 'Modelage beauté indienne (1 heure)', price: 38, duration: 60 }
      ]
    },
    {
      id: 'beaute-mains',
      name: 'Beauté des Mains',
      icon: 'hand',
      description: 'Manucure professionnelle pour des mains sublimes',
      image: 'assets/images/beaute-mains.jpg',
      prestations: [
        { id: 'bm-vernis-simple', name: 'Pose de Vernis Simple avec limage', price: 7, duration: 20 },
        { id: 'bm-french-limage', name: 'Pose Vernis French avec limage', price: 10, duration: 25 },
        { id: 'bm-semi-permanent', name: 'Pose de vernis semi-permanent', price: 20, duration: 40 },
        { id: 'bm-manucure-simple', name: 'Manucure simple', price: 17, duration: 30, description: 'Limage et repoussage des cuticules' },
        { id: 'bm-manucure-french', name: 'Manucure French', price: 20, duration: 35, description: 'Repoussage des cuticules, modelage, gommage' },
        { id: 'bm-semi-french', name: 'Manucure semi-permanent + French vernis', price: 32, duration: 50 },
        { id: 'bm-depose', name: 'Dépose de vernis semi-permanent', price: 7, duration: 15 },
        { id: 'bm-gainage', name: 'Gainage protéin vernis semi-permanent', price: 35, duration: 45 },
        { id: 'bm-crome-nails', name: 'Crome nails vernis semi-permanent', price: 35, duration: 45 }
      ]
    },
    {
      id: 'beaute-pieds',
      name: 'Beauté des Pieds',
      icon: 'foot',
      description: 'Pédicure complète pour des pieds parfaits',
      image: 'assets/images/beaute-pieds.jpg',
      prestations: [
        { id: 'bp-vernis-simple', name: 'Pose de vernis Simple (avec limage)', price: 7, duration: 20 },
        { id: 'bp-french-semi', name: 'Pose de vernis French semi-permanent', price: 10, duration: 25 },
        { id: 'bp-semi-gommage', name: 'Beauté des pieds + vernis simple, gommage', price: 26, duration: 40 },
        { id: 'bp-french-gommage', name: 'Beauté des pieds + vernis French gommage', price: 29, duration: 45 },
        { id: 'bp-pedicure-semi', name: 'Pédicure + semi-permanent', price: 40, duration: 55, description: 'Repoussage des cuticules, gommage, modelage' },
        { id: 'bp-pedicure-french', name: 'Pédicure + French semi-permanent', price: 45, duration: 60 }
      ]
    },
    {
      id: 'faux-ongles',
      name: 'Pose de Faux Ongles',
      icon: 'nails',
      description: 'Extensions et poses pour des ongles sublimes',
      image: 'assets/images/faux-ongles.jpg',
      prestations: [
        { id: 'fo-capsules-simple', name: 'Pose capsules + vernis simple', price: 30, duration: 60 },
        { id: 'fo-capsules-resine', name: 'Pose capsules + résine + vernis simple', price: 40, duration: 75 },
        { id: 'fo-capsules-french', name: 'Pose capsules + résine + French vernis', price: 36, duration: 75 },
        { id: 'fo-capsules-gel', name: 'Pose capsules + gel + vernis simple', price: 35, duration: 70 },
        { id: 'fo-capsules-gel-french', name: 'Pose capsules + gel + French semi-permanent', price: 45, duration: 80 },
        { id: 'fo-semi-resine', name: 'Pose capsules + résine + French semi-permanent', price: 45, duration: 80 },
        { id: 'fo-semi-gel', name: 'Pose capsules + gel + semi-permanent', price: 45, duration: 80 }
      ]
    },
    {
      id: 'massages',
      name: 'Massages Ayurvédiques',
      icon: 'massage',
      description: 'Relaxation profonde avec des huiles essentielles bio',
      image: 'assets/images/massages.jpg',
      prestations: [
        { id: 'ma-shirodhara', name: 'Shirodhara (30 mins)', price: 30, duration: 30, description: 'Huile tiède sur le front pour réduire stress et insomnies' },
        { id: 'ma-kansu', name: 'Kansu (30 mins)', price: 35, duration: 30, description: 'Massage du pied avec un petit bol spécial, calme et bien-être' },
        { id: 'ma-abhyanga', name: 'Abhyanga (1 Heure)', price: 49, duration: 60, description: 'Massage à l\'huile tiède ayurvédique, circulation, digestion, respiration' },
        { id: 'ma-detente', name: 'Massage détente pieds et dos', price: 30, duration: 30 },
        { id: 'ma-huile', name: 'Massage détente des jambes avec huile de massage', price: 30, duration: 30 }
      ]
    },
    {
      id: 'henne',
      name: 'Henné Design',
      icon: 'henna',
      description: 'Art corporel traditionnel pour des occasions spéciales',
      image: 'assets/images/henne.jpg',
      prestations: [
        { id: 'he-simple', name: 'Henné simple (à partir de)', price: 10, duration: 30 },
        { id: 'he-mariage', name: 'Henné mariage (à partir de)', price: 30, duration: 90 }
      ]
    },
    {
      id: 'soins-cheveux',
      name: 'Soins des Cheveux',
      icon: 'hair',
      description: 'Traitements naturels pour des cheveux éclatants',
      image: 'assets/images/soins-cheveux.jpg',
      prestations: [
        { id: 'sc-henne-naturel', name: 'Coloration au henné naturel / noir (à partir de)', price: 30, duration: 60 },
        { id: 'sc-soin-huile', name: 'Soin des cheveux et du cuir chevelu (massage de la tête avec l\'huile, vapeur, shampoing)', price: 25, duration: 45 },
        { id: 'sc-soin-tete', name: 'Soin de la tête (massage vapeur)', price: 30, duration: 40 }
      ]
    },
    {
      id: 'homme',
      name: 'Prestations Homme',
      icon: 'man',
      description: 'Services dédiés aux hommes',
      image: 'assets/images/homme.jpg',
      prestations: [
        { id: 'ho-sourcils', name: 'Sourcils', price: 7, duration: 10 },
        { id: 'ho-manucure', name: 'Manucure', price: 17, duration: 25 },
        { id: 'ho-pedicure', name: 'Pédicure', price: 30, duration: 35 },
        { id: 'ho-capsules-americaine', name: 'Pose capsules Américaine + Vernis', price: 45, duration: 60 },
        { id: 'ho-semi-permanent', name: 'Semi-permanent', price: 25, duration: 35 },
        { id: 'ho-babyboomer', name: 'Pose capsules + gel + French vernis (BABYBOOMER)', price: 45, duration: 70 },
        { id: 'ho-remplissage', name: 'Remplissage avec résine + vernis simple', price: 25, duration: 45 },
        { id: 'ho-depose', name: 'Dépose capsules gel', price: 10, duration: 20 }
      ]
    }
  ]);

  getCategory(id: string): Category | undefined {
    return this.categories().find(c => c.id === id);
  }

  getAllPrestations(): Prestation[] {
    return this.categories().flatMap(c => c.prestations);
  }

  searchPrestations(query: string): Prestation[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllPrestations().filter(p => 
      p.name.toLowerCase().includes(lowerQuery)
    );
  }
}
