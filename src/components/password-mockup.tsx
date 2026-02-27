"use client";

import { motion } from "framer-motion";

type Rule = {
  text: string;
  type: "requirement" | "warning";
};

const mockRules: Rule[] = [
  { text: "At least 8 characters", type: "requirement" },
  { text: "Must include uppercase letter", type: "requirement" },
  { text: "Must include a number", type: "requirement" },
  { text: "Must include special character (!@#$%)", type: "requirement" },
  { text: "Max 32 characters", type: "warning" },
];

export function PasswordMockup() {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Browser chrome */}
      <div className="rounded-xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
        {/* URL bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 bg-background rounded-md px-3 py-1 text-[11px] text-muted-foreground font-mono">
            chase.com/login
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <div className="h-2 w-20 rounded bg-muted" />
            <div className="h-8 w-full rounded-md border border-border bg-muted/30 px-3 flex items-center">
              <span className="text-xs text-muted-foreground">user@email.com</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="h-2 w-16 rounded bg-muted" />
            <div className="h-8 w-full rounded-md border border-foreground/20 bg-background px-3 flex items-center ring-2 ring-amber-accent/30">
              <span className="text-xs tracking-widest text-foreground">••••••••</span>
              <span className="ml-auto w-1.5 h-4 bg-foreground animate-pulse" />
            </div>
          </div>

          {/* Tooltip card - the product itself */}
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            className="rounded-lg border border-amber-accent/30 bg-card shadow-lg shadow-amber-accent/5 overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-accent/5 border-b border-amber-accent/10">
              <span className="text-xs">🔑</span>
              <span className="text-[10px] font-semibold text-foreground/70">
                chase.com
              </span>
            </div>
            <div className="px-3 py-2 space-y-0.5">
              {mockRules.map((rule, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                  className="text-[11px] flex items-center gap-1.5"
                >
                  <span
                    className={
                      rule.type === "requirement"
                        ? "text-emerald-600"
                        : "text-amber-600"
                    }
                  >
                    {rule.type === "requirement" ? "✓" : "⚠"}
                  </span>
                  <span className="text-foreground/70">{rule.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="h-8 w-full rounded-md bg-foreground flex items-center justify-center">
            <span className="text-[11px] font-medium text-background">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
