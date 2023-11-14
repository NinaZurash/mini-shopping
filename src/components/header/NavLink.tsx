import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/utils/routes";

type Props = {
  title: string;
  href: string;
};

type DropDownProps = {
  title: string;
  href: string;
  categoryArray: Props[];
};

export default function NavLink({ title, href }: Props) {
  return (
    <Link to={href} className="hover:text-foreground/80 text-foreground/60 transition-colors">
      {title}
    </Link>
  );
}

export function NavLinkDropDown({ title, categoryArray }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {categoryArray.map((category: Props) => (
          <DropdownMenuItem key={category.href}>
            <Link
              to={`${ROUTES.catalog}?category=${category.href}`}
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              {category.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
