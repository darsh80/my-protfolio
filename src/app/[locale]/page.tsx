import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { GlowOrbs } from "@/components/effects/glow-orbs";
import { Spotlight } from "@/components/effects/spotlight";
import { ContentBeam } from "@/components/effects/content-beam";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <GlowOrbs />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-screen" />
      <Spotlight />
      <Navbar />
      <main className="relative">
        <Hero />
        <ContentBeam>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </ContentBeam>
        
      </main>
      <Footer />
    </>
  );
}