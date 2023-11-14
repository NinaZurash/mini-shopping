import { CarrotIcon } from "lucide-react";

import { useProducts } from "@/providers/products/useProducts";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { specialProducts, categories } = useProducts();

  console.log(categories);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 p-16">
        <h2 className="text-3xl font-bold">Today&apos;s Special Items</h2>
        <div className="grid grid-cols-4 gap-8">
          {specialProducts.map((product) => (
            <div
              key={product.id}
              className="relative mx-auto flex w-80 flex-col items-center justify-between gap-3 self-stretch rounded-2xl bg-white px-12 py-8 shadow-lg "
            >
              <img
                src={product.image}
                alt={product.title}
                className="object-fit block h-52 w-full"
              />
              <h3 className="text-center text-gray-500">{product.title}</h3>
              <span className="font-bold">{product.price}$</span>
              <Button variant="outline" className="w-full items-center gap-4">
                Add To Cart <CarrotIcon />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold">Categories</h2>
      <ImageCarousel />
    </>
  );
}
