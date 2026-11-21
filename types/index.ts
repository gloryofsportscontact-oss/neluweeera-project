export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Corporate' | 'Retail';
  location: string;
  year: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'wide' | 'square';
  description?: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  disciplines: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
