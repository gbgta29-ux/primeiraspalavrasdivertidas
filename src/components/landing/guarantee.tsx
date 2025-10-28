import { Card, CardContent } from "@/components/ui/card";
import { Lock, RefreshCw, ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full border-2 border-dashed border-primary/50 p-4">
              <Lock className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Compra 100% Segura</h3>
              <p className="text-muted-foreground">
                Seus dados estão protegidos em um ambiente seguro.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
             <div className="rounded-full border-2 border-dashed border-primary/50 p-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Acesso Imediato</h3>
              <p className="text-muted-foreground">
                Receba o material no seu e-mail após o pagamento.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
             <div className="rounded-full border-2 border-dashed border-primary/50 p-4">
              <RefreshCw className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Garantia de 7 Dias</h3>
              <p className="text-muted-foreground">
                Se não gostar, é só pedir seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
