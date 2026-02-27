"use client";

import { useLang } from "@/hooks/use-lang";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      onViewportEnter={() => {
        animate(count, target, { duration: 1.8, ease: "easeOut" });
      }}
      viewport={{ once: true }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

export function Community() {
  const { t } = useLang();

  const stats = [
    { value: 30, suffix: "+", label: t("commStat1Label") },
    { value: 150, suffix: "+", label: t("commStat2Label") },
    { value: 500, suffix: "+", label: t("commStat3Label") },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("commTitle")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("commSubtitle")}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-amber-accent">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <span className="rounded-full border border-border px-4 py-2 bg-card">
            {t("commHow1")}
          </span>
          <span className="text-muted-foreground/30">→</span>
          <span className="rounded-full border border-amber-accent/40 px-4 py-2 bg-amber-accent/5 text-foreground font-medium">
            {t("commHow2")}
          </span>
          <span className="text-muted-foreground/30">→</span>
          <span className="rounded-full border border-border px-4 py-2 bg-card">
            {t("commHow3")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
