import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Mais de 50 atividades práticas e divertidas para estimular a fala",
  "Guia de aplicação com passo a passo para cada brincadeira",
  "Plano de 30 dias de estímulo, fácil de seguir",
  "Cartões visuais com palavras e imagens simples",
  "Frases prontas pra usar nas atividades",
  "Explicações leves sobre atraso de fala, sem termos técnicos",
];

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-mockup");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl/none">
                Seu filho ainda não fala?
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
                Descubra como estimular as primeiras palavrinhas com apenas 10
                minutos por dia. Ideal para crianças de 1 a 3 anos.
              </p>
               <p className="text-sm text-muted-foreground md:text-base">
                Livro digital com mais de 50 atividades para desenvolver a fala de forma natural, sem pressão e com carinho.
              </p>
            </div>
            
          </div>
          <div className="flex items-center justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                width={550}
                height={550}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full"
                priority
              />
            )}
          </div>
        </div>

        <div className="mt-12 lg:mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              O que você vai encontrar no livro digital:
            </h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center">
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg py-8 shadow-2xl transition-transform duration-200 hover:scale-105">
                <Link href="#cta">
                  <CheckCircle2 className="mr-2 h-6 w-6" />
                  QUERO AJUDAR MEU FILHO
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
