export type PageType = 'home' | 'products' | 'services' | 'blog' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: 'statement' | 'succulents' | 'vines' | 'accent' | 'stands';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  height: string;
  potType: string;
  image: string;
  imageAlt?: string;
  gallery: string[];
  galleryAlt?: string[];
  description: string;
  features: string[];
  isBestSeller?: boolean;
  isPetSafe: boolean;
  badge?: string;
}

export interface Category {
  id: 'statement' | 'succulents' | 'vines' | 'accent' | 'stands';
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  productCount: number;
  tagline: string;
  bestFor: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Custom Potting' | 'Corporate Lease';
  priceStarting: string;
  image: string;
  imageAlt?: string;
  description: string;
  features: string[];
  processSteps: { step: number; title: string; desc: string }[];
  idealFor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Interior Design' | 'Plant Care' | 'Trend Report' | 'Pet Friendly';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageAlt?: string;
  content: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  headline: string;
  quote: string;
  productPurchased: string;
  verifiedBuyer: boolean;
  image?: string;
  imageAlt?: string;
}

export interface TrustSignal {
  id: string;
  iconName: string;
  title: string;
  description: string;
  details: string;
}

export interface ValueProp {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  iconName: string;
  comparison: {
    real: string;
    plantiqa: string;
    cheapFaux: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SeoKeyword {
  keyword: string;
  volume: string;
  intent: string;
  usedIn: string;
}

export interface Persona {
  name: string;
  role: string;
  painPoints: string[];
  desires: string[];
  howWeAddress: string;
}

