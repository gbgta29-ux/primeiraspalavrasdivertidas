import { Benefits } from "@/components/landing/benefits";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Guarantee } from "@/components/landing/guarantee";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { Testimonials } from "@/components/landing/testimonials";

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
