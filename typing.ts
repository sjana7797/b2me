export interface Product {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "product";
  _updatedAt: string;
  details: string;
  image: Image[];
  name: string;
  price: number;
  slug: { _type: "slug"; current: string };
  banner: Banner[];
}

export interface Image {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Banner {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "banner";
  _updatedAt: string;
  buttonText: string;
  discount: string;
  largeText1: string;
  largeText2: string;
  saleTime: string;
  products: {
    _ref: string;
    _type: "reference";
  };
}

export enum Operation {
  increment = "increment",
  decrement = "decrement",
}

export interface CartItem extends Product {
  quantity: number;
}
