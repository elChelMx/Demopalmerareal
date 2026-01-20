export enum ProductCategory {
  INSTITUTIONAL = 'Institucional',
  SPORTS = 'Deportiva',
  RECREATIONAL = 'Recreativa',
  HOSPITALITY = 'Restaurantes y Hotelería'
}

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  isRegistered: boolean;
}

export interface ServiceLine {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}