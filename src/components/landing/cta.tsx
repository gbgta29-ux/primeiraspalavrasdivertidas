import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard, Download } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
            🎁 Acesse agora por apenas R$29,90
          </h2>
          <p className="text-lg text-muted-foreground">
            Material digital enviado imediatamente após o pagamento.
          </p>
        </div>
        <div className="w-full max-w-md space-y-4">
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-xl py-8 shadow-2xl transition-transform duration-200 hover:scale-105">
            <Link href="#">
              <CheckCircle2 className="mr-2 h-6 w-6" />
              QUERO AJUDAR MEU FILHO AGORA
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            👇 Clique no botão acima e comece ainda hoje
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground pt-4">
             <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Compra Segura</span>
             </div>
             <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Acesso Imediato</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
