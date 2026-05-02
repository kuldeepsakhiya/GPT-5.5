import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Narrative } from "@/components/sections/narrative";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <UseCases />
      <Stats />
      <Narrative />
      <Cta />
    </main>
  );
}