"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Code, Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { BeamLine } from "@/components/effects/beam-line";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl dark:bg-[#0a0a14]/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-5 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500">
            <Code className="h-6 w-6 text-white" />
          </div>

          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {t("logo")}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="text-lg text-neutral-600 transition-colors duration-300 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              type="button"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-neutral-700 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle>
                  <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                    {t("logo")}
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-lg text-neutral-600 transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {scrolled && <BeamLine />}
    </motion.header>
  );
}
