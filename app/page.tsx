import Script from "next/script";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Particles } from "@/components/Particles";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Script id="loading-gate" strategy="beforeInteractive">
        {`document.documentElement.classList.add("is-loading")`}
      </Script>
      <Loader />
      <div className="site-shell">
        <Particles />
        <Header />
        <div className="relative z-10">
          <main id="contenuto">
            <Hero />
            <Services />
            <Clients />
            <About />
            <CtaBand />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
