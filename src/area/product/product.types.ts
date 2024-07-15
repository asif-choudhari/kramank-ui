export type ProductDetailsType = {
  productId: number;
  productName: string;
  price: number;
  description: string;
  isCustom: boolean;
};

export type ProductOptionsType = {
  key: string;
  value: string[];
};

export type ProductImageType = {
  productImageId: number;
  image: string;
};
