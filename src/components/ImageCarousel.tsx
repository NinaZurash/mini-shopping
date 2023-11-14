import { CategoryImages } from "@/constants/Categories";

import { Carousel } from "@material-tailwind/react";

export function ImageCarousel() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {Object.values(CategoryImages).map((image, index) => (
        <img key={index} src={image} alt="img1" className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
}
