// Modèles pour les prestations Girly Glow

export interface Prestation {
  id: string;
  name: string;
  price: number;
  priceMax?: number;
  duration?: number;
  description?: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
  image?: string;
  prestations: Prestation[];
}

export interface SalonInfo {
  name: string;
  slogan: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  phones: string[];
  email: string;
  hours: {
    days: string;
    open: string;
    close: string;
  };
  metro: string[];
  social: {
    facebook?: string;
    instagram?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}
