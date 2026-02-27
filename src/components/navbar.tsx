"use client";

import { useLang } from "@/hooks/use-lang";
import { LangSwitch } from "./lang-switch";

export function Navbar() {
  const { t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
        <a href="#" className="font-semibold text-sm tracking-tight">
          DRP
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">
            {t("navHow")}
          </a>
          <a href="#demo" className="hover:text-foreground transition-colors">
            {t("navDemo")}
          </a>
          <a href="#privacy" className="hover:text-foreground transition-colors">
            {t("navPrivacy")}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="#install"
            className="rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          >
            {t("navInstall")}
          </a>
        </div>
      </div>
    </nav>
  );
}
