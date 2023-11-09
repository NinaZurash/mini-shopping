import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <Button>Welcome!</Button>
      <ModeToggle className="absolute right-8 top-4" />
    </main>
  );
}
