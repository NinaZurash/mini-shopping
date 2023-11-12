import { CommandMenu } from "@/components/CommandMenu";
import { MainNav } from "@/components/header/MainNav";
import { MobileNav } from "@/components/header/MobileNav";
import SocialNavLink from "@/components/header/SocialNavLink";
import { Icons } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";

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
            <SocialNavLink
              href="https://github.com/NinaZurash"
              title="Github"
              Icon={Icons.gitHub}
            />
            <SocialNavLink
              href="https://www.linkedin.com/in/nino-zurashvili-8039ab265/"
              title="Linkedin"
              Icon={Icons.linkedIn}
            />
            <ModeToggle className="ml-2" />
          </nav>
        </div>
      </div>
    </header>
  );
}
