import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative z-10 border-t border-black/5 py-8 text-center text-sm text-neutral-500 dark:border-white/5">
      <p>© {new Date().getFullYear()} — {t("rights")}</p>
      <p className="mt-1">{t("made")}</p>
    </footer>
  );
}