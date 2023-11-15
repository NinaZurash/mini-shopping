import { Product } from "@/types";

import { CarrotIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative mx-auto flex w-80 flex-col items-center justify-between gap-3 self-stretch rounded-2xl bg-white px-12 py-8 shadow-lg ">
      <img src={product.image} alt={product.title} className="object-fit block h-52 w-full" />
      <h3 className="text-center text-gray-500">{product.title}</h3>
      <span className="font-bold">{product.price}$</span>
      <Button variant="outline" className="w-full items-center gap-4">
        Add To Cart <CarrotIcon />
      </Button>
    </div>
  );
}
