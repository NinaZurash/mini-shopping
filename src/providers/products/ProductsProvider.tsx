import { Product } from "@/types";

import { createContext, useEffect, useState } from "react";

import { getAllProducts } from "@/components/api/products";

type ProductContextState = {
  products: Product[];
  specialProducts: Product[];
  setProducts: (products: Product[]) => void;
};

const initialState: ProductContextState = {
  products: [],
  specialProducts: [],
  setProducts: () => null,
};

export const ProductContext = createContext<ProductContextState>(initialState);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [specialProducts, setSpecialProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      } else {
        alert("Error while fetching products");
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const randomProducts: Product[] = [];
      while (randomProducts.length < 12) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }
      setSpecialProducts(randomProducts);
    }
  }, [products]);

  const values = {
    products,
    setProducts,
    specialProducts,
  };

  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};
