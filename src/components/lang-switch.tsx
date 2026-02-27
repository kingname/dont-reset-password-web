"use client";

import { useLang } from "@/hooks/use-lang";

export function LangSwitch() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="relative rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}
