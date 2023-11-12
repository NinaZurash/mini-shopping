import { Link, useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";

type Props = {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function MobileLink({ href, onOpenChange, className, children, ...props }: Props) {
  const navigate = useNavigate();

  return (
    <Link
      to={href}
      onClick={() => {
        navigate(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
