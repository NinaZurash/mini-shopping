import { CategoryImages } from "@/constants/Categories";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/utils/routes";

type Props = {
  title: string;
  href: string;
};

export default function NavLink({ title, href }: Props) {
  return href === ROUTES.catalog ? (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
        Catalog
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] items-center gap-3 p-6 lg:grid-cols-[.75fr_1fr]">
          {Object.keys(CategoryImages).map((category) => (
            <li key={category} className="row-span-3">
              <NavigationMenuLink
                href={`${ROUTES.catalog}?category=${category}`}
                className="hover:text-foreground/80 text-foreground/60 transition-colors"
              >
                {category[0].toUpperCase() + category.slice(1)}
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  ) : (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={href}
        className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors"
      >
        {title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
