import { useSearchParams } from "react-router-dom";

import Electronics from "@/components/categories/Electronics";

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("category");

  return <div className="">{categories === "electronics" && <Electronics />}</div>;
}

// S P A  = single page application
