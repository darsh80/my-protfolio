"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-neutral-600 transition-all hover:border-violet-500/50 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:border-white/10 dark:text-neutral-300 dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}