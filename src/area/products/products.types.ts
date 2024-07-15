export type ProductItem = {
  id: number;
  name: string;
  image: string;
};

export type ProductListItem = {
  categoryId: number;
  categoryName: string;
  productItems: ProductItem[];
};
