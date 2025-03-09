
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  stock: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
};
