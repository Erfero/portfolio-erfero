"use client";

import { useLocale } from "@/lib/locale-context";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full border border-border p-1 font-mono text-xs">
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
