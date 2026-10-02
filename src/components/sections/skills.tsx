"use client";

import { useTranslations } from "next-intl";
import { Code2, Database, Wrench, Layers3, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeamCard } from "@/components/effects/beam-card";
import { Reveal } from "../animation/reveal";

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "shadcn/ui",
];

const stateAndData = [
  "REST APIs",
  "React Query",
  "Zustand",
  "NextAuth",
  "Fetch API",
  "Axios",
];

const tools = ["Git", "GitHub", "Figma", "Vercel", "npm"];

export function Skills() {
  const t = useTranslations("Skills");

  const groups = [
    {
      icon: Code2,
      title: t("frontend"),
      items: frontend,
    },
    {
      icon: Database,
      title: "State & Data",
      items: stateAndData,
    },
    {
      icon: Wrench,
      title: t("tools"),
      items: tools,
    },
  ];

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 rounded-full bg-black/10 dark:bg-white/10 md:block" />
          {/* Mobile Line */}
          <div className="absolute bottom-0 left-3 top-0 w-[2px] rounded-full bg-black/10 dark:bg-white/10 md:hidden" />
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {groups.map((group, gi) => {
              const isLeft = gi % 2 === 0;

              return (
                <div
                  key={group.title}
                  className="relative md:flex md:items-center"
                >
                  {/* ========================= */}
                  {/* LEFT SIDE */}
                  {/* ========================= */}

                  {isLeft ? (
                    <>
                      <div className="w-full ps-10 md:w-1/2 md:pe-10 md:ps-0">
                        <Reveal delay={gi * 0.15}>
                          <BeamCard className="p-5 sm:p-6 md:p-8">
                            {/* Header */}
                            <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
                              <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                                  <group.icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                                </div>

                                <div className="min-w-0">
                                  <h3 className="truncate text-lg font-bold sm:text-xl">
                                    {group.title}
                                  </h3>

                                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {group.items.length} Skills
                                  </p>
                                </div>
                              </div>

                              <span className="hidden shrink-0 rounded-lg border border-black/10 bg-black/[0.02] px-3 py-1.5 text-xs font-medium text-neutral-500 sm:block dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400">
                                01
                              </span>
                            </div>

                            {/* Skills */}
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                              {group.items.map((skill) => (
                                <div
                                  key={skill}
                                  className="flex min-h-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] px-2 py-2 text-center text-xs text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-neutral-950 hover:shadow-md sm:text-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:border-violet-500/50 dark:hover:bg-white/[0.06] dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </BeamCard>
                        </Reveal>
                      </div>

                      {/* Empty Right */}
                      <div className="hidden w-1/2 md:block" />
                    </>
                  ) : (
                    <>
                      {/* Empty Left */}
                      <div className="hidden w-1/2 md:block" />

                      {/* RIGHT SIDE */}
                      <div className="w-full ps-10 md:w-1/2 md:ps-10">
                        <Reveal delay={gi * 0.15}>
                          <BeamCard className="p-5 sm:p-6 md:p-8">
                            {/* Header */}
                            <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
                              <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                                  <group.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                </div>

                                <div className="min-w-0">
                                  <h3 className="truncate text-lg font-bold sm:text-xl">
                                    {group.title}
                                  </h3>

                                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {group.items.length} Skills
                                  </p>
                                </div>
                              </div>

                              <span className="hidden shrink-0 rounded-lg border border-black/10 bg-black/[0.02] px-3 py-1.5 text-xs font-medium text-neutral-500 sm:block dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400">
                                02
                              </span>
                            </div>

                            {/* Skills */}
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                              {group.items.map((skill) => (
                                <div
                                  key={skill}
                                  className="flex min-h-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] px-2 py-2 text-center text-xs text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-neutral-950 hover:shadow-md sm:text-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:border-cyan-500/50 dark:hover:bg-white/[0.06] dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </BeamCard>
                        </Reveal>
                      </div>
                    </>
                  )}

                  {/* Timeline Point */}
                  <div className="absolute left-3 top-8 z-30 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-black/10 bg-black/5 md:left-1/2 md:top-1/2 md:h-6 md:w-6 dark:border-white/10 dark:bg-white/10">
                    <div className="h-1.5 w-1.5 rounded-full bg-black/20 md:h-2 md:w-2 dark:bg-white/20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
      </div>
    </section>
  );
}
