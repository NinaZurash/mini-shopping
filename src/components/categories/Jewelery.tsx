import { Product } from "@/types";

import { useEffect, useState } from "react";

import { getProductsByCategory } from "@/components/api/products";
import ProductCard from "@/components/ProductCard";

export default function Jewelery() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchJewelery = async () => {
      const data = await getProductsByCategory("jewelery");
      if (data) {
        setProducts(data);
      } else {
        alert("Error while fetching jewelery");
      }
    };
    fetchJewelery();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16">
      <h2 className="text-3xl font-bold">Jewelery</h2>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
