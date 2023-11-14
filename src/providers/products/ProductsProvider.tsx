import { CategoryImages } from "@/constants/Categories";
import { Category, Product } from "@/types";

import { createContext, useEffect, useState } from "react";

import { getAllCategories, getAllProducts } from "@/components/api/products";

type ProductContextState = {
  categories: Category[];
  products: Product[];
  specialProducts: Product[];
  setProducts: (products: Product[]) => void;
};

const initialState: ProductContextState = {
  categories: [],
  products: [],
  specialProducts: [],
  setProducts: () => null,
};

export const ProductContext = createContext<ProductContextState>(initialState);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
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
    const fetchCategories = async () => {
      const data = await getAllCategories();

      if (data) {
        const categoriesArray = data.map((category, index) => ({
          id: index,
          title: category,
          image: CategoryImages[category as keyof typeof CategoryImages],
        }));
        setCategories(categoriesArray);
      } else {
        alert("Error while fetching products");
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const randomProducts: Product[] = [];
      while (randomProducts.length < 4) {
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
    categories,
    products,
    setProducts,
    specialProducts,
  };

  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};
