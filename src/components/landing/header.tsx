import { Feather } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Feather className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">First Words Fun</span>
        </Link>
        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-sm">
            <Link href="#cta">
                Comprar Agora
            </Link>
        </Button>
      </div>
    </header>
  );
}
