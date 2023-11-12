import { docsConfig } from "@/config/links";

import NavLink from "@/components/header/NavLink";
import { Icons } from "@/components/Icons";
import { ROUTES } from "@/utils/routes";

const Links = docsConfig.mainNav.map((item) => <NavLink key={item.href} {...item} />);

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
