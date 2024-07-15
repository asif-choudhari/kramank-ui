import { useEffect } from "react";
import ProductsList from "./products-list/products-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch, useSelector } from "react-redux";
import { getProudctsListThunk, setProdcutsList } from "./state/products.slice";
import { tokenSelector, userSelector } from "../login/state/login.selector";
import { AppDispatch } from "@/store";
import { toast } from "sonner";
import { productsListSelector } from "./state/products.selector";

function Products() {
  const dispatch = useDispatch<AppDispatch>();

  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const productsList = useSelector(productsListSelector);

  useEffect(() => {
    const getProudctsList = async () => {
      await dispatch(
        getProudctsListThunk({
          token,
          companyId: user.companyId,
          securityRights: user.securityRights,
        })
      ).then((response) => {
        if (response.type.includes("rejected")) {
          toast.error("Could not fetch Products");
        } else {
          dispatch(setProdcutsList(response.payload));
        }
      });
    };

    getProudctsList();
  }, [dispatch, token, user.companyId, user.securityRights]);

  return (
    <>
      {productsList.map(
        (product) =>
          product.productItems.length > 0 && (
            <ProductsList
              title={product.categoryName}
              productItems={product.productItems}
            />
          )
      )}
    </>
  );
}

function ProductsServices() {
  return (
    <div className="h-[calc(100dvh-106px)] my-4 p-5 overflow-y-auto bg-white rounded-lg shadow-all-sides">
      <Tabs defaultValue="products">
        <TabsList className="text-yellow-400 bg-black">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <Products />
        </TabsContent>
        <TabsContent value="services">
          No Services Availabe at the moment.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductsServices;
