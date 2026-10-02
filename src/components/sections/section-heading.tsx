"use client";

import { Reveal } from "../animation/reveal";

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 flex items-center gap-3 text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400">
        <span className="h-px w-10 bg-gradient-to-r from-violet-600 to-transparent dark:from-violet-500" />
        {label}
      </p>
      <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>
    </Reveal>
  );
}