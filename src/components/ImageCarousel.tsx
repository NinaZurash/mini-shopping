import { CategoryImages } from "@/constants/Categories";

import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {Object.entries(CategoryImages).map(([key, image], index) => {
          const formattedKey = key
            .replace("mensClothing", "men's clothing")
            .replace("womensClothing", "women's clothing");

          return (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <div className="relative h-4/5 w-full rounded-md border-2 border-gray-300">
                <img
                  src={image}
                  alt="category"
                  className="w-full object-cover opacity-80 hover:opacity-100"
                  style={{ filter: "brightness(70%)" }}
                />
                <p className="absolute left-60 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold uppercase text-gray-100 text-opacity-70">
                  {formattedKey}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
