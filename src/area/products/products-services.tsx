import ProductsList from "./products-list/products-list";
import { prodcuts } from "./static-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Products() {
  return (
    <div className="h-[calc(100dvh-100px)] p-5 overflow-y-auto">
      <Tabs defaultValue="products" className="">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          {prodcuts.map((product) => (
            <ProductsList
              title={product.category}
              productItems={product.productItems}
            />
          ))}
        </TabsContent>
        <TabsContent value="services">
          No Services Availabe at the moment.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Products;