import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Narrative } from "@/components/sections/narrative";
import { Navbar } from "@/components/sections/navbar";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Stats />
        <Narrative />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
