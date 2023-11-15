import { Product } from "@/types";

import { useEffect, useState } from "react";

import { getProductsByCategory } from "@/components/api/products";
import ProductCard from "@/components/ProductCard";

export default function Electronics() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchElectronics = async () => {
      const data = await getProductsByCategory("electronics");
      if (data) {
        setProducts(data);
      } else {
        alert("Error while fetching electronics");
      }
    };
    fetchElectronics();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16">
      <h2 className="text-3xl font-bold">Electronics</h2>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
