import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
    {
        question: "O que exatamente eu vou receber?",
        answer: "Você vai receber o livro digital “Atividades de Linguagem em Casa” com mais de 50 brincadeiras pra estimular a fala do seu filho, além de bônus exclusivos: plano de 30 dias, cartões ilustrados, áudios de estímulo e muito mais."
    },
    {
        question: "Como vou receber o material?",
        answer: "Assim que o pagamento for aprovado, você recebe tudo por e-mail ou direto na página de confirmação. O material é 100% digital, em PDF, e pode ser acessado pelo celular, tablet ou computador."
    },
    {
        question: "É indicado pra qual idade?",
        answer: "O conteúdo é feito especialmente para crianças de 1 a 3 anos que ainda falam pouco ou estão começando a desenvolver a linguagem."
    },
    {
        question: "Preciso ser fonoaudióloga ou ter experiência?",
        answer: "NÃO! O material foi criado para mães e pais comuns. Tudo é explicado de forma simples, com passo a passo fácil de seguir. Não precisa ser especialista."
    },
    {
        question: "Quanto tempo por dia eu preciso?",
        answer: "Apenas 10 minutos por dia já são suficientes para aplicar as atividades com seu filho e começar a ver evolução no vocabulário e comunicação."
    },
    {
        question: "Tem garantia?",
        answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, é só pedir reembolso dentro desse prazo que devolvemos 100% do valor, sem perguntas."
    },
    {
        question: "Posso imprimir o material?",
        answer: "Pode sim! O conteúdo é em PDF, e você pode imprimir tudo, inclusive os cartões e atividades, se preferir usar no papel."
    }
];

export function Faq() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                            <HelpCircle className="mr-2 inline-block h-4 w-4" />
                            Dúvidas Frequentes
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">Ainda tem perguntas?</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            Encontre aqui as respostas para as dúvidas mais comuns.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
