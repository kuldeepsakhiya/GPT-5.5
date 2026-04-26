import { Capabilities } from "@/components/sections/capabilities";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Narrative } from "@/components/sections/narrative";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Capabilities />
      <Stats />
      <Narrative />
      <Cta />
      <Footer />
    </main>
  );
}
