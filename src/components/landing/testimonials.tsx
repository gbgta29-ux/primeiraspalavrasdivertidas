import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Patrícia, mãe do Lucas",
    avatarId: "testimonial-patricia",
    text: "Meu filho começou a dizer novas palavras em duas semanas! As atividades são simples, divertidas e o mais importante: funcionam. Estou muito feliz!",
  },
  {
    name: "Amanda, mãe da Sofia",
    avatarId: "testimonial-amanda",
    text: "Simples de aplicar, e minha filha adora as atividades! Finalmente algo que funciona sem estresse e sem pressão. Recomendo demais!",
  },
];

const Rating = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
    </div>
)

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Mães que já viram a diferença</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Resultados reais de quem já está usando e amando nosso material.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={testimonial.name} className="bg-card shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <Rating />
                  <blockquote className="text-lg text-foreground/90">
                      &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4">
                    {avatarImage && (
                        <Avatar className="h-14 w-14 border-2 border-accent">
                            <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">Mãe Verificada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
