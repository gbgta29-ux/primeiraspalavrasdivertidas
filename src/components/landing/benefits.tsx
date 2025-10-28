import { Baby, Heart, MessageSquareText, ShieldCheck, Smartphone } from "lucide-react";

const benefits = [
  { icon: <MessageSquareText className="h-8 w-8 text-primary" />, text: "Ajuda crianças com atraso na fala a se comunicarem melhor." },
  { icon: <Baby className="h-8 w-8 text-primary" />, text: "Desenvolve linguagem brincando — sem telas, sem forçar." },
  { icon: <Heart className="h-8 w-8 text-primary" />, text: "Aumenta o vínculo entre mãe e filho durante as atividades." },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, text: "Recomendado por pedagogos e especialistas em linguagem infantil." },
  { icon: <Smartphone className="h-8 w-8 text-primary" />, text: "Pode ser usado no celular ou impresso." },
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-card border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">Uma jornada de palavras e carinho</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Nosso material foi cuidadosamente criado para transformar a comunicação do seu filho de forma leve e eficaz.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 rounded-lg bg-background p-6">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-4">{item.icon}</div>
              <p className="text-lg font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
