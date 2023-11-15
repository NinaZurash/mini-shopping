import { useSearchParams } from "react-router-dom";

import Electronics from "@/components/categories/Electronics";
import Jewelery from "@/components/categories/Jewelery";
import MensClothing from "@/components/categories/MensClothing";
import WomensClothing from "@/components/categories/WomensClothing";

const categoriesComponents = {
  electronics: <Electronics />,
  jewelery: <Jewelery />,
  mensClothing: <MensClothing />,
  womensClothing: <WomensClothing />,
};

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("category");
  return (
    <div className="">
      {categories && categoriesComponents[categories as keyof typeof categoriesComponents]}
    </div>
  );
}

// S P A  = single page application
