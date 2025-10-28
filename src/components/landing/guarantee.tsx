import { Card, CardContent } from "@/components/ui/card";
import { Lock, RefreshCw, ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="bg-card shadow-xl border-2 border-dashed border-primary/50">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-3 text-center">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Compra 100% Segura</h3>
                <p className="text-muted-foreground">
                  Seus dados estão protegidos em um ambiente seguro.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <ShieldCheck className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Acesso Imediato</h3>
                <p className="text-muted-foreground">
                  Receba o material no seu e-mail após o pagamento.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <RefreshCw className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Garantia de 7 Dias</h3>
                <p className="text-muted-foreground">
                  Se não gostar, é só pedir seu dinheiro de volta. Simples assim.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
