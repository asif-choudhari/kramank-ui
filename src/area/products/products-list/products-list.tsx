import { Card } from "@/components/ui/card";
import { ProductItem } from "../products.types";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";
import foodImage from "@/assets/food.png";

type ProductsListPropsType = {
  title: string;
  productItems: ProductItem[];
};

function ProductsList({ title, productItems }: ProductsListPropsType) {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-4">
      <div className="flex items-center">
        <div className="text-xl font-bold">{title}</div>
        <hr className="hidden md:inline border-b border-slate-200 ml-4 flex-grow" />
      </div>
      <div className="grid gap-4 my-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {productItems.map((productItem) => (
          <Card
            key={productItem.id}
            onClick={() =>
              navigate(`${RoutePath.ProductPage}/${productItem.id}`)
            }
            className="p-2 rounded-xl shadow-all-sides bg-yellow-400 flex flex-col items-center justify-around"
          >
            <img
              src={foodImage}
              alt={productItem.name}
              className="rounded-lg"
            />
            <div className="mt-4 font-bold">{productItem.name}</div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center cursor-pointer">
          <ChevronDown />
          <span>Expand</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
