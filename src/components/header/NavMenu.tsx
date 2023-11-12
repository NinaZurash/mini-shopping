import { CommandMenu } from "@/components/CommandMenu";
import { MainNav } from "@/components/header/MainNav";
import { MobileNav } from "@/components/header/MobileNav";
import { Icons } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavMenu() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <a href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <ModeToggle className="ml-2" />
          </nav>
        </div>
      </div>
    </header>
  );
}
