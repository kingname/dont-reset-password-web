"use client";

import { useLang } from "@/hooks/use-lang";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Step = {
  key: string;
  isError?: boolean;
  isAction?: boolean;
  isFinal?: boolean;
};

const stepDefs: Step[] = [
  { key: "painStep1", isAction: true },
  { key: "painStep2", isError: true },
  { key: "painStep3", isAction: true },
  { key: "painStep4", isAction: true },
  { key: "painStep5", isError: true },
  { key: "painStep6", isAction: true },
  { key: "painStep7", isError: true },
  { key: "painStep8" },
];

function Typewriter({ text, speed = 35 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

export function PainPoint() {
  const { t, lang } = useLang();
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= stepDefs.length) return;
    const delay = visibleCount === 0 ? 300 : 1200;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, started]);

  // reset on language change
  useEffect(() => {
    setVisibleCount(0);
    setStarted(false);
  }, [lang]);

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => {
            setStarted(true);
            setVisibleCount(1);
          }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
        >
          {t("painTitle")}
        </motion.h2>

        <div className="space-y-4 font-mono text-sm">
          {stepDefs.slice(0, visibleCount).map((step, i) => (
            <motion.div
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${
                step.isError
                  ? "text-red-400"
                  : step.isAction
                  ? "text-background/70"
                  : "text-background/40"
              }`}
            >
              <span className="shrink-0 w-5 text-right text-background/30 select-none">
                {i + 1}.
              </span>
              <span>
                {i === visibleCount - 1 ? (
                  <Typewriter
                    text={t(step.key as Parameters<typeof t>[0])}
                    speed={step.isError ? 25 : 40}
                  />
                ) : (
                  t(step.key as Parameters<typeof t>[0])
                )}
              </span>
            </motion.div>
          ))}

          {visibleCount >= stepDefs.length && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center text-xl sm:text-2xl font-bold mt-12 font-sans text-amber-accent"
            >
              {t("painPunch")}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
