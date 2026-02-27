"use client";

import { useState } from "react";
import { useLang } from "@/hooks/use-lang";
import { siteRules } from "@/lib/rules-data";
import { motion, AnimatePresence } from "framer-motion";

export function LiveDemo() {
  const { t } = useLang();
  const [selected, setSelected] = useState<string | null>(null);
  const site = siteRules.find((s) => s.domain === selected);

  return (
    <section id="demo" className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("demoTitle")}
          </h2>
          <p className="text-muted-foreground">{t("demoSubtitle")}</p>
        </motion.div>

        {/* Site pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {siteRules.map((site) => (
            <button
              key={site.domain}
              onClick={() =>
                setSelected((prev) =>
                  prev === site.domain ? null : site.domain
                )
              }
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
                selected === site.domain
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground border-border hover:border-foreground/30"
              }`}
            >
              {site.displayName}
            </button>
          ))}
        </div>

        {/* Demo card */}
        <div className="max-w-md mx-auto">
          {/* Mockup password input */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="space-y-3">
              <label className="text-xs text-muted-foreground font-medium">
                Password
              </label>
              <div className="h-10 w-full rounded-lg border border-border bg-background px-3 flex items-center">
                <span className="text-sm tracking-widest text-muted-foreground">
                  ••••••••
                </span>
              </div>

              <AnimatePresence mode="wait">
                {site && (
                  <motion.div
                    key={site.domain}
                    initial={{ opacity: 0, y: -6, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -6, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-lg border border-amber-accent/30 bg-amber-accent/[0.03] overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-amber-accent/10">
                      <span className="text-xs">🔑</span>
                      <span className="text-[11px] font-semibold text-foreground/60">
                        {site.domain}
                      </span>
                    </div>
                    <div className="px-3 py-2 space-y-1">
                      {site.rules.min_length && (
                        <RuleLine type="req">
                          At least {site.rules.min_length} characters
                        </RuleLine>
                      )}
                      {site.rules.max_length && (
                        <RuleLine type="warn">
                          Max {site.rules.max_length} characters
                        </RuleLine>
                      )}
                      {site.rules.require_uppercase && (
                        <RuleLine type="req">Uppercase letter required</RuleLine>
                      )}
                      {site.rules.require_lowercase && (
                        <RuleLine type="req">Lowercase letter required</RuleLine>
                      )}
                      {site.rules.require_number && (
                        <RuleLine type="req">Number required</RuleLine>
                      )}
                      {site.rules.require_special && (
                        <RuleLine type="req">
                          Special character required
                          {site.rules.allowed_special_chars &&
                            ` (${site.rules.allowed_special_chars})`}
                        </RuleLine>
                      )}
                      {site.rules.no_spaces && (
                        <RuleLine type="warn">No spaces</RuleLine>
                      )}
                      {site.rules.notes && (
                        <RuleLine type="info">{site.rules.notes}</RuleLine>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RuleLine({
  type,
  children,
}: {
  type: "req" | "warn" | "info";
  children: React.ReactNode;
}) {
  const color =
    type === "req"
      ? "text-emerald-600"
      : type === "warn"
      ? "text-amber-600"
      : "text-blue-600";
  const icon = type === "req" ? "✓" : type === "warn" ? "⚠" : "ℹ";

  return (
    <div className="flex items-start gap-1.5 text-[12px]">
      <span className={`shrink-0 ${color}`}>{icon}</span>
      <span className="text-foreground/70">{children}</span>
    </div>
  );
}
