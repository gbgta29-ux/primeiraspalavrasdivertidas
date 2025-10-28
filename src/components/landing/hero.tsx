import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Heart, PlayCircle } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Mais de 50 atividades práticas e divertidas" },
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Guia de aplicação com passo a passo" },
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Plano de 30 dias de estímulo, fácil de seguir" },
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Cartões visuais com palavras e imagens" },
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Frases prontas para usar nas atividades" },
  { icon: <Check className="h-5 w-5 text-accent" />, text: "Explicações leves sobre atraso de fala" },
];

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-mockup");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Seu filho ainda não fala?
            </h1>
            <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
              Descubra como estimular as primeiras palavrinhas com apenas 10
              minutos por dia. Ideal para crianças de 1 a 3 anos.
            </p>
          </div>

          {heroImage && (
            <div className="w-full max-w-2xl">
              <Image
                src={heroImage.imageUrl}
                width={800}
                height={800}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full"
                priority
              />
            </div>
          )}

          <div className="w-full max-w-4xl space-y-6 pt-8">
              <h3 className="text-2xl font-bold tracking-tight text-primary">O que você vai encontrar no livro digital:</h3>
              <ul className="grid gap-4 sm:grid-cols-2 text-left">
                  {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                      {feature.icon}
                      <span className="text-foreground/80">{feature.text}</span>
                  </li>
                  ))}
              </ul>
          </div>
          
          <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row justify-center pt-8">
             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg py-7 shadow-lg transition-transform duration-200 hover:scale-105">
              <Link href="#cta">
                <Heart className="mr-2 h-5 w-5" />
                QUERO AJUDAR MEU FILHO
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg py-7">
              <Link href="#">
                  <PlayCircle className="mr-2 h-5 w-5"/>
                  Ver uma amostra
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
