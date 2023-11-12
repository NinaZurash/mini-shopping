import { useContext } from "react";

import { ProductContext } from "@/providers/products/ProductsProvider";

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
