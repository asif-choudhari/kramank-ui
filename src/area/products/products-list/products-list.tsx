import { Card } from "@/components/ui/card";
import { ProductItem } from "../products.types";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";

type ProductsListPropsType = {
  title: string;
  productItems: ProductItem[];
};

function ProductsList({ title, productItems }: ProductsListPropsType) {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-10">
      <div className="flex items-center">
        <div className="text-2xl font-bold">{title}</div>
        <hr className="hidden md:inline border-b border-slate-900 ml-4 flex-grow" />
      </div>
      <div className="flex my-4 overflow-x-auto hide-scrollbar">
        {productItems.map((productItem) => (
          <Card
            onClick={() =>
              navigate(`${RoutePath.ProductPage}/${productItem.id}`)
            }
            className=" mx-2 mb-1 h-52 w-48 rounded-xl shadow-md flex flex-col items-center justify-around"
          >
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
        <div className="flex flex-col items-center">
          <ChevronDown />
          <span>Expand</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
