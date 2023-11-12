import { Link } from "react-router-dom";

type Props = {
  title: string;
  href: string;
};

export default function NavLink({ title, href }: Props) {
  return (
    <Link to={href} className="hover:text-foreground/80 text-foreground/60 transition-colors">
      {title}
    </Link>
  );
}
