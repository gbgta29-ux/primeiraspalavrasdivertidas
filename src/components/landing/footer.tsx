import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} First Words Fun. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
