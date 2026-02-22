import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  WhyChoose,
  Advantages,
  Clients,
  ShipperApp,
  CarrierApp,
  HowToStart,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Advantages />
        <Clients />
        <ShipperApp />
        <CarrierApp />
        <HowToStart />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
