import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Patrícia, mãe do Lucas",
    avatarId: "testimonial-patricia",
    text: "Meu filho começou a dizer novas palavras em duas semanas! As atividades são simples e ele adora.",
  },
  {
    name: "Amanda, mãe da Sofia",
    avatarId: "testimonial-amanda",
    text: "Simples de aplicar, e meu filho adora as atividades! Finalmente algo que funciona sem estresse.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mães que já viram a diferença</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Resultados reais de quem já está usando nosso material.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={testimonial.name} className="bg-background shadow-lg border-transparent">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="relative mb-4">
                    <p className="relative rounded-lg bg-card p-6 text-lg italic text-foreground before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-card">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  {avatarImage && (
                     <Avatar className="h-16 w-16 mb-2 border-2 border-card">
                        <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
