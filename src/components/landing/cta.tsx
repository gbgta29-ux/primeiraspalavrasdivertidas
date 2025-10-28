import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard, Download, Zap } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground">
            Oferta Especial
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl/tight">
            Acesse agora por apenas R$29,90
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Material digital enviado imediatamente após o pagamento.
          </p>
        </div>
        <div className="w-full max-w-md space-y-6">
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-xl py-8 shadow-2xl transition-transform duration-200 hover:scale-105">
            <Link href="https://pay.kirvano.com/7636b679-3abd-45cb-adf5-4557e81426f1">
              <Zap className="mr-2 h-6 w-6" />
              QUERO AJUDAR MEU FILHO AGORA
            </Link>
          </Button>
          <div className="flex justify-center items-center gap-6 text-sm text-primary-foreground/80 pt-4">
             <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <span>Compra Segura</span>
             </div>
             <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span>Acesso Imediato</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
