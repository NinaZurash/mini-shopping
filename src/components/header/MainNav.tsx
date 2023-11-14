import { docsConfig } from "@/config/links";

import NavLink from "@/components/header/NavLink";
import { Icons } from "@/components/Icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/utils/routes";

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href={ROUTES.home} className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Shopuki</span>
          </a>
        </NavigationMenuItem>
        {docsConfig.mainNav.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
