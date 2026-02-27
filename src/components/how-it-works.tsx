"use client";

import { useLang } from "@/hooks/use-lang";
import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    ),
    title: "howStep1Title",
    desc: "howStep1Desc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    title: "howStep2Title",
    desc: "howStep2Desc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "howStep3Title",
    desc: "howStep3Desc",
  },
] as const;

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
        >
          {t("howTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-muted text-foreground/70">
                {step.icon}
              </div>
              <div className="text-xs font-mono text-muted-foreground/50">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold">
                {t(step.title as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(step.desc as Parameters<typeof t>[0])}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
