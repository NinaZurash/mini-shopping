import { useProducts } from "@/providers/products/useProducts";
import ImageCarousel from "@/components/ImageCarousel";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { specialProducts } = useProducts();

  return (
    <>
      <section className="flex flex-col items-center justify-center ">
        <ImageCarousel />
      </section>
      <div className="flex flex-col items-center justify-center gap-8 p-16">
        <h2 className="text-3xl font-bold">Today&apos;s Special Items</h2>
        <div className="grid grid-cols-4 gap-8">
          {specialProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
