export interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  available?: boolean;
  price: string;
  quantity?: string;
  MRP: string;
  Packaging_Size?: string;
  pack_type?: string;
  'Usage/Application'?: string;
  shelf_life?: string;
  product_brand?: string;
  'Selling rate'?: string;
  features?: string[];
}
