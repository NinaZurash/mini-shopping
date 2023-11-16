import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  target?: "_blank" | "_self";
};

export default function SocialNavLink({ href, title, Icon, target = "_blank" }: Props) {
  return (
    <Link to={href} target={target} rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-9 px-0",
        )}
      >
        <Icon className="h-4 w-4" />
        <span className="sr-only">{title}</span>
      </div>
    </Link>
  );
}
