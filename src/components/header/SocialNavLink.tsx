import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function SocialNavLink({ href, title, Icon }: Props) {
  return (
    <Link to={href} target="_blank" rel="noreferrer">
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
