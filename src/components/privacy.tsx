"use client";

import { useLang } from "@/hooks/use-lang";
import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="12" y1="15" x2="12" y2="18"/></svg>
    ),
    title: "privCard1Title",
    desc: "privCard1Desc",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="8" y1="7" x2="16" y2="7" strokeWidth="0"/><path d="M18 8l2-2m0 0l-2-2"/></svg>
    ),
    title: "privCard2Title",
    desc: "privCard2Desc",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    ),
    title: "privCard3Title",
    desc: "privCard3Desc",
  },
] as const;

export function Privacy() {
  const { t } = useLang();

  return (
    <section id="privacy" className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
        >
          {t("privTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-card p-6 space-y-4"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-foreground/60">
                {card.icon}
              </div>
              <h3 className="font-semibold">
                {t(card.title as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(card.desc as Parameters<typeof t>[0])}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
