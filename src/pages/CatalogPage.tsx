import { useSearchParams } from "react-router-dom";

import Electronics from "@/components/categories/Electronics";
import Jewelery from "@/components/categories/Jewelery";
import MensClothing from "@/components/categories/MensClothing";

const categoriesComponents = {
  electronics: <Electronics />,
  jewelery: <Jewelery />,
  mensClothing: <MensClothing />,
};

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("category");
  console.log(categories);
  return (
    <div className="">
      {categories && categoriesComponents[categories as keyof typeof categoriesComponents]}
    </div>
  );
}

// S P A  = single page application
