"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Lang } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";
import type { MessageKey } from "@/lib/i18n";

type LangContextType = {
  lang: Lang;
  toggle: () => void;
  t: (key: MessageKey) => string;
};

export const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
  t: (key) => key,
});

export function useLang() {
  return useContext(LangContext);
}

export function useLangState() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("drp-lang") as Lang | null;
    if (saved === "zh" || saved === "en") {
      setLang(saved);
    } else if (navigator.language.startsWith("zh")) {
      setLang("zh");
    }
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("drp-lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: MessageKey) => translate(lang, key),
    [lang]
  );

  return { lang, toggle, t };
}
