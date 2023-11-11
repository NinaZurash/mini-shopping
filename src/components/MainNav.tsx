import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = "/";

  return (
    <div className="mr-4 hidden md:flex">
      <a href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Name</span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <a
          href="/docs/components"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Components
        </a>
        <a
          href="/themes"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/themes") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Themes
        </a>
        <a
          href="/examples"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/examples") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Examples
        </a>
        <a
          href="/"
          className={cn(
            "text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block",
          )}
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
