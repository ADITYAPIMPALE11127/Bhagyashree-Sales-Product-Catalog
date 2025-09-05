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
  Packaging_Type?: string;
  'Usage/Application'?: string;
  shelf_life?: string;
  product_brand?: string;
  'Selling rate'?: string;
  features?: string[];
  rod_material?: string;
  rod_length?: string;
  blade_length?: string;
  shape?: string;
  color?: string;
  brand?: string;
  Fragrance?: string;
  form?: string;
  box_contains?: string;
  candle_size?: string;
  type?: string;
  diameter?: string,
  material?: string,
}
