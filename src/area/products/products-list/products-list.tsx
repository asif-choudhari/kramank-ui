import { Card } from "@/components/ui/card";
import { ProductItem } from "../products.types";
import { Button } from "@/components/ui/button";

type ProductsListPropsType = {
  title: string;
  productItems: ProductItem[];
};

function ProductsList({ title, productItems }: ProductsListPropsType) {
  return (
    <div className="w-full mb-10">
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex my-4 overflow-x-auto hide-scrollbar">
        {productItems.map((productItem) => (
          <Card className=" mx-2 mb-1 h-52 w-48 rounded-xl shadow-md flex flex-col items-center justify-around">
            <img
              src={productItem.image}
              alt={productItem.name}
              className="h-40 w-44 rounded-lg"
            />
            <div className="font-bold">{productItem.name}</div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button>Show More</Button>
      </div>
    </div>
  );
}

export default ProductsList;
