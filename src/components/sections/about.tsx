"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeamCard } from "@/components/effects/beam-card";
import { Reveal } from "../animation/reveal";

export function About() {
  const t = useTranslations("About");

  const stats = [
    { value: "1+", label: t("stats.years") },
    { value: "18+", label: t("stats.projects") },
    { value: "∞", label: t("stats.passion") },
  ];

  return (
    <section id="about" className="relative z-10 py-24">
      <div className="px-6 md:w-[calc(50%_-_3.5rem)]">
        <SectionHeading label={t("label")} title={t("title")} />

        <Reveal delay={0.1}>
          <p className="mb-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">{t("p1")}</p>
          <p className="leading-relaxed text-neutral-500 dark:text-neutral-400">{t("p2")}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.1}>
              <BeamCard className="flex flex-col items-center gap-1 p-4 text-center">
                <span className="text-gradient text-3xl font-bold">{stat.value}</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{stat.label}</span>
              </BeamCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}