import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap } from "lucide-react";

const bonuses = [
  {
    id: "bonus1-mockup",
    title: "BÔNUS 1 – Plano com 30 Dias de Atividades",
    description: "Um roteiro completo com atividades diárias pensadas para estimular a fala do seu filho de forma leve, divertida e progressiva.",
    value: "R$ 49,90",
  },
  {
    id: "bonus2-mockup",
    title: "BÔNUS 2 – PDF com 30 Jogos Interativos",
    description: "Brincadeiras criadas para desenvolver a linguagem de forma natural, usando sons, imagens e movimentos.",
    value: "R$ 59,90",
  },
  {
    id: "bonus3-mockup",
    title: "BÔNUS 3 – Mini Treinamento “Como Estimular Sem Pressionar”",
    description: "Um PDF simples e direto, feito para mães que querem ajudar seus filhos a falar sem cometer os erros mais comuns.",
    value: "R$ 49,90",
  },
];

export function Offer() {
  const mainProductImage = PlaceHolderImages.find((img) => img.id === "hero-mockup");

  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-card border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">Tudo que você recebe hoje</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Um pacote completo para destravar a fala do seu filho e fortalecer o vínculo entre vocês.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <Card className="flex flex-col lg:col-span-1 shadow-lg">
             <CardHeader>
              <h3 className="text-2xl font-bold">Material Principal</h3>
              <CardDescription>
                📚 Livro digital com mais de 50 atividades.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
                {mainProductImage && (
                <Image
                    src={mainProductImage.imageUrl}
                    width={400}
                    height={400}
                    alt={mainProductImage.description}
                    data-ai-hint={mainProductImage.imageHint}
                    className="rounded-lg"
                />
                )}
                <p className="mt-4 text-center text-sm text-muted-foreground">
                🧠 Indicado para crianças de 1 a 3 anos, com ou sem atraso na fala.
                </p>
            </CardContent>
          </Card>


          <div className="grid gap-8 lg:col-span-2">
            {bonuses.map((bonus) => {
              const bonusImage = PlaceHolderImages.find((img) => img.id === bonus.id);
              return (
                <Card key={bonus.title} className="flex flex-col sm:flex-row items-center gap-6 p-6 shadow-md">
                  {bonusImage && (
                    <Image
                      src={bonusImage.imageUrl}
                      width={120}
                      height={180}
                      alt={bonus.title}
                      data-ai-hint="ebook cover"
                      className="rounded-md object-cover flex-shrink-0 shadow-sm"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{bonus.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Valor: <span className="line-through">{bonus.value}</span> - <span className="font-bold text-accent">HOJE GRÁTIS</span>
                    </p>
                    <p className="mt-2 text-foreground/80 text-sm">{bonus.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-xl py-8 shadow-2xl transition-transform duration-200 hover:scale-105">
            <Link href="https://pay.kirvano.com/7636b679-3abd-45cb-adf5-4557e81426f1">
              <Zap className="mr-2 h-6 w-6" />
              QUERO AJUDAR MEU FILHO AGORA
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
