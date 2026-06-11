export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductOptions {
  finishes?: string[];
  sizes?: string[];
  designs?: string[];
}

export interface Product {
  slug: string;

  name: string;

  category: string;

  badge: string;

  image: string;

  gallery: string[];

  description: string;

  shortDescription: string;

  material: string;

  finish: string;

  style: string;

  applications: string[];

  features: string[];

  whatsappMessage: string;

  specifications: ProductSpecification[];

  options?: ProductOptions;

  seoContent?: string;

  relatedProducts?: string[];

  brochure?: string;
}