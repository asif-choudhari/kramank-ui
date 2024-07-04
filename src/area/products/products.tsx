import ProductsList from "./products-list/products-list";
import { prodcuts } from "./static-data";

function Products() {
  return (
    <div className="h-[calc(100dvh-100px)] p-5 overflow-y-auto">
      {prodcuts.map((product) => (
        <ProductsList
          title={product.category}
          productItems={product.productItems}
        />
      ))}
    </div>
  );
}

export default Products;
