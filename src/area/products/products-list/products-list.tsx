import React from "react";
import { Card } from "@/components/ui/card"; // Replace with your Card component import
import { ProductItem } from "../products.types"; // Replace with your product types import
import { ChevronDown } from "lucide-react"; // Assuming you have Lucide React icons imported
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths"; // Replace with your route paths import

type ProductsListPropsType = {
  title: string;
  productItems: ProductItem[];
};

const ProductsList: React.FC<ProductsListPropsType> = ({
  title,
  productItems,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <hr className="border-t border-gray-300 flex-grow ml-4" />
      </div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {productItems.map((productItem) => {
          const imageDataSrc = `data:image/png;base64,${productItem.image}`;
          return (
            <Card
              key={productItem.id}
              onClick={() =>
                navigate(`${RoutePath.ProductPage}/${productItem.id}`)
              }
              className="rounded-lg shadow-all-sides overflow-hidden cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105"
            >
              <img
                src={imageDataSrc}
                alt={productItem.name}
                className="h-60 w-full bg-white text-black"
              />
              <div className="p-4 bg-black text-yellow-400 text-center">
                <h3 className="text-lg font-semibold">{productItem.name}</h3>
              </div>
            </Card>
          );
        })}
      </div>
      {productItems.length > 6 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center cursor-pointer">
            <ChevronDown size={20} className="mr-1" />
            <span className="text-gray-600">View More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
