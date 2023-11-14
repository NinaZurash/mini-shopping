import { useSearchParams } from "react-router-dom";

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("category");

  return (
    <div className="">
      {
        categories
        // categories === "womans" && <WomansCategory />
      }
    </div>
  );
}

// S P A  = single page application
