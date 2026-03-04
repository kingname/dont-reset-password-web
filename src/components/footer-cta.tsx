"use client";

import { useLang } from "@/hooks/use-lang";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FooterCTA() {
  const { t } = useLang();

  return (
    <section id="install" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("ctaTitle")}
          </h2>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-base font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
            asChild
          >
            <a href="https://github.com/kingname/dont-reset-password" target="_blank" rel="noopener noreferrer">
              {t("ctaButton")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
