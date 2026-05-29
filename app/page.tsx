import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Process } from "@/components/Process";
import { ProductBooking } from "@/components/ProductBooking";
import { Services } from "@/components/Services";
export default function Home() {
  return (
    <>
      <Header />
      <main id="contenuto">
        <Hero />
        <Metrics />
        <Process />
        <Services />
        <Clients />
        <ProductBooking />
        <About />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
