import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const bonuses = [
  {
    id: "bonus1-mockup",
    title: "BÔNUS 1 – Plano com 30 Dias de Atividades",
    description: "Um roteiro completo com atividades diárias pensadas para estimular a fala do seu filho de forma leve, divertida e progressiva.",
    value: "R$ 49,90",
    features: [
      "Cada dia tem uma ação simples pra aplicar.",
      "Ajuda mães ocupadas a manterem a constância.",
      "Desenvolvido com base em estratégias reais.",
    ],
  },
  {
    id: "bonus2-mockup",
    title: "BÔNUS 2 – PDF com 30 Jogos Interativos",
    description: "Brincadeiras criadas para desenvolver a linguagem de forma natural, usando sons, imagens e movimentos. Feito pra criança aprender sem nem perceber.",
    value: "R$ 59,90",
    features: [
      "Jogos como “cadê o som?” e “imite o bicho”.",
      "Pode jogar com irmãos ou sozinha com o adulto.",
      "Pode imprimir ou usar direto do celular.",
    ],
  },
  {
    id: "bonus3-mockup",
    title: "BÔNUS 3 – Mini Treinamento “Como Estimular Sem Pressionar”",
    description: "Um PDF simples e direto, feito para mães que querem ajudar seus filhos a falar sem cometer os erros mais comuns.",
    value: "R$ 49,90",
    features: [
      "Transforme o dia a dia em estímulos naturais.",
      "Aprenda a não cobrar e nem exigir.",
      "Crie um ambiente leve para seu filho.",
    ],
  },
];

export function Offer() {
  const mainProductImage = PlaceHolderImages.find((img) => img.id === "hero-mockup");

  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tudo que você recebe hoje</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um pacote completo para destravar a fala do seu filho e fortalecer o vínculo entre vocês.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 text-center">Material Principal</h3>
            <p className="text-center text-muted-foreground mb-4">
              📚 Livro digital com mais de 50 atividades.
            </p>
            {mainProductImage && (
              <Image
                src={mainProductImage.imageUrl}
                width={400}
                height={400}
                alt={mainProductImage.description}
                data-ai-hint={mainProductImage.imageHint}
                className="rounded-lg shadow-2xl"
              />
            )}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              🧠 Indicado para crianças de 1 a 3 anos, com ou sem atraso na fala.
            </p>
          </div>

          <div className="space-y-8">
            {bonuses.map((bonus) => {
              const bonusImage = PlaceHolderImages.find((img) => img.id === bonus.id);
              return (
                <Card key={bonus.title} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-background shadow-lg overflow-hidden">
                  {bonusImage && (
                    <Image
                      src={bonusImage.imageUrl}
                      width={150}
                      height={210}
                      alt={bonus.title}
                      data-ai-hint="ebook cover"
                      className="rounded-md object-cover flex-shrink-0 shadow-md"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold">{bonus.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Valor: <span className="line-through">{bonus.value}</span> - <span className="font-bold text-green-600">HOJE GRÁTIS</span>
                    </p>
                    <p className="mt-2 text-foreground">{bonus.description}</p>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {bonus.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
