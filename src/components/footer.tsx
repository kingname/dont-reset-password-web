"use client";

import { useLang } from "@/hooks/use-lang";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">{t("footerMadeWith")}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t("footerGithub")}
            </a>
            <Separator orientation="vertical" className="h-3" />
            <a href="#" className="hover:text-foreground transition-colors">
              {t("footerPrivacy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
