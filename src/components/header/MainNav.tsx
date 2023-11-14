import { docsConfig } from "@/config/links";
import { CategoryImages } from "@/constants/Categories";

import NavLink, { NavLinkDropDown } from "@/components/header/NavLink";
import { Icons } from "@/components/Icons";
import { ROUTES } from "@/utils/routes";

const categoriesChildren = Object.keys(CategoryImages).map((category) => ({
  title: category,
  href: category,
}));

const Links = docsConfig.mainNav.map((item) =>
  item.href === ROUTES.catalog ? (
    <NavLinkDropDown key={item.href} {...item} categoryArray={categoriesChildren} />
  ) : (
    <NavLink key={item.href} {...item} />
  ),
);

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <a href={ROUTES.home} className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Shopuki</span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">{Links}</nav>
    </div>
  );
}
