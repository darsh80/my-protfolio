"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Nav");
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={t("switchLocale")}
      className="flex h-10 items-center gap-1.5 rounded-full border border-black/10 px-4 text-sm text-neutral-600 transition-all hover:border-violet-500/50 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:border-white/10 dark:text-neutral-300 dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
    >
      <Languages className="h-4 w-4" />
      {nextLocale === "en" ? "EN" : "ع"}
    </button>
  );
}