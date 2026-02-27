"use client";

import { LangContext } from "@/hooks/use-lang";
import { useLangState } from "@/hooks/use-lang";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PainPoint } from "@/components/pain-point";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { Community } from "@/components/community";
import { Privacy } from "@/components/privacy";
import { FooterCTA } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  const langState = useLangState();

  return (
    <LangContext.Provider value={langState}>
      <Navbar />
      <main>
        <Hero />
        <PainPoint />
        <HowItWorks />
        <LiveDemo />
        <Community />
        <Privacy />
        <FooterCTA />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
