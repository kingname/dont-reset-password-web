"use client";

import { useLang } from "@/hooks/use-lang";
import { Button } from "@/components/ui/button";
import { PasswordMockup } from "./password-mockup";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              {t("heroTitle").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif-italic text-amber-accent">
                {t("heroTitle").split(" ").slice(-1)}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t("heroSubtitle")}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
                asChild
              >
                <a href="https://github.com/kingname/dont-reset-password" target="_blank" rel="noopener noreferrer">
                  {t("heroCta")}
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/60">{t("heroUsers")}</p>
          </motion.div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <PasswordMockup />
          </motion.div>
        </div>
      </div>

      {/* Subtle background decoration — single warm dot, not AI gradient soup */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-amber-accent/[0.04] blur-3xl -z-10" />
    </section>
  );
}
