import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, RefreshCw, ShieldCheck, Zap } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 text-center md:px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full border-2 border-dashed border-primary-foreground/50 p-4">
              <Lock className="h-10 w-10 text-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Compra 100% Segura</h3>
              <p className="text-primary-foreground/80">
                Seus dados estão protegidos em um ambiente seguro.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
             <div className="rounded-full border-2 border-dashed border-primary-foreground/50 p-4">
              <ShieldCheck className="h-10 w-10 text-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Acesso Imediato</h3>
              <p className="text-primary-foreground/80">
                Receba o material no seu e-mail após o pagamento.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
             <div className="rounded-full border-2 border-dashed border-primary-foreground/50 p-4">
              <RefreshCw className="h-10 w-10 text-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Garantia de 7 Dias</h3>
              <p className="text-primary-foreground/80">
                Se não gostar, é só pedir seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">
              Acesse agora por apenas R$29,90
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Material digital enviado imediatamente após o pagamento.
            </p>
          </div>
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-xl py-8 shadow-2xl transition-transform duration-200 hover:scale-105">
            <Link href="https://pay.kirvano.com/7636b679-3abd-45cb-adf5-4557e81426f1">
              <Zap className="mr-2 h-6 w-6" />
              ADQUIRIR AGORA
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
