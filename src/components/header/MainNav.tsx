import NavLink from "@/components/header/NavLink";
import { Icons } from "@/components/Icons";
import { ROUTES } from "@/utils/routes";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <a href={ROUTES.home} className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Shopuki</span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavLink title="Home" href={ROUTES.home} />
        <NavLink title="Catalog" href={ROUTES.catalog} />
        <NavLink title="Purchase History" href={ROUTES.purchaseHistory} />
      </nav>
    </div>
  );
}
