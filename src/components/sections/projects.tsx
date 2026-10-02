"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, Rocket } from "lucide-react";

import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeamCard } from "@/components/effects/beam-card";
import { Reveal } from "../animation/reveal";

const projects = [
  {
    id: "p1",
    image: "/projects/Screenshot 2026-09-27 154437.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "REST API",
      "Zustand",
    ],
    github: "https://github.com/darsh80/e-commerce",
    live: "https://e-commerce-7zwn.vercel.app/",
  },
  {
    id: "p2",
    image: "/projects/Screenshot 2026-09-27 160504.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "React Query",
    ],
    github: "https://github.com/darsh80/social-media",
    live: "https://social-media-teal-iota.vercel.app/",
  },
  {
    id: "p3",
    image: "/projects/for-dinner.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Font Awesome",
    ],
    github: "https://github.com/darsh80/For-Dinner",
    live: "https://darsh80.github.io/For-Dinner/",
  },
  {
    id: "p4",
    image: "/projects/3adasa.png",
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "React Router",
    ],
    github: "https://github.com/darsh80/3adasa",
    live: "https://3adasa.vercel.app/",
  },
  {
  id: "p5",
  image: "/projects/quiz-app.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/Quiz-app",
  live: "https://darsh80.github.io/Quiz-app/",
},
{
  id: "p6",
  image: "/projects/cosmos-space-dashboard1.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
  ],
  github: "https://github.com/darsh80/Cosmos-Space-Dashboard",
  live: "https://darsh80.github.io/Cosmos-Space-Dashboard/",
},
{
  id: "p7",
  image: "/projects/personal-portfolio.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/Personal-Portfolio",
  live: "https://darsh80.github.io/Personal-Portfolio/",
},
{
  id: "p8",
  image: "/projects/create-a-crud.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/create-a-crud",
  live: "https://darsh80.github.io/create-a-crud/",
},
{
  id: "p9",
  image: "/projects/games-website.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/games-website",
  live: "https://games-website-omega-teal.vercel.app/",
},
{
  id: "p10",
  image: "/projects/manager.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/manager.management-of-your-funds",
  live: "https://manager-rho-three.vercel.app/",
},
{
  id: "p11",
  image: "/projects/your-dream-home.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/your-dream-home",
  live: "https://your-dream-home.vercel.app/",
},
{
  id: "p12",
  image: "/projects/the-ux-review.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Font Awesome",
  ],
  github: "https://github.com/darsh80/the-ux-review",
  live: "https://the-ux-review-zeta.vercel.app/",
},
{
  id: "p13",
  image: "/projects/dji-mavic-4pro.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
  ],
  github: "https://github.com/darsh80/DJI-Mavic-4pro",
  live: "https://dji-mavic-4pro.vercel.app/",
},
{
  id: "p14",
  image: "/projects/fitcore-gym.png",
  tags: [
    "HTML",
    "CSS",
  ],
  github: "https://github.com/darsh80/FitCore-Gym",
  live: "https://fitcore-gym-xi.vercel.app/",
},
{
  id: "p15",
  image: "/projects/bella-fashion.png",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce",
    "Responsive Design",
  ],
  github: "https://github.com/repos",
  live: "https://bella-fashion-five.vercel.app/en",
},
{
  id: "p16",
  image: "/projects/loved.png",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce",
    "Responsive Design",
  ],
  github: "https://github.com/repos",
  live: "https://nefert.vercel.app/en",
},
{
  id: "p17",
  image: "/projects/coffee.png",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
  ],
   github: "https://github.com/repos",
  live: "https://coffee-area-seven.vercel.app/",
},
{
  id: "p18",
  image: "/projects/nutriPlan.png",
  tags: [
    "React",
    "JavaScript",
    "REST API",
    "Nutrition App",
    "Responsive Design",
  ],
  github: "",
  live: "https://nutriplan-mu.vercel.app/",
},
];

export function Projects() {
  const t = useTranslations("Projects");

  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  function toggleProject(projectId: string) {
    setExpandedProjects((current) => {
      if (current.includes(projectId)) {
        return current.filter((id) => id !== projectId);
      }

      return [...current, projectId];
    });
  }

  return (
    <section
      id="projects"
      className="relative z-10 bg-background py-16 sm:py-20 md:py-24"
    >
      {/* Heading */}
      <div className="px-4 sm:px-6">
        <SectionHeading label={t("label")} title={t("title")} />
      </div>

      {/* Projects Cards */}
      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:gap-4">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.08}
            className="h-full"
          >
            <BeamCard className="group flex h-[520px] flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2">
              {/* Project Image */}
              {project.image && (
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(`items.${project.id}.title`)}
                    fill
                    className=" object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              )}

              {/* Content */}
              <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                {/* Links */}
                <div className="mb-4 flex shrink-0 justify-end gap-3">
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-400 transition-all hover:-translate-y-1 hover:border-neutral-950 hover:text-neutral-950 dark:border-white/10 dark:text-neutral-500 dark:hover:border-white dark:hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 text-xs font-medium text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-black/[0.06] hover:text-neutral-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:border-white/30 dark:hover:bg-white/[0.08] dark:hover:text-white"
                  >
                    <span>{t("clickHere")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="mb-2 shrink-0 text-lg font-semibold sm:text-xl">
                  {t(`items.${project.id}.title`)}
                </h3>

                {/* Description */}
                <div className="mb-5 min-h-0">
                  <div
                    className={`overflow-y-auto pe-2 text-sm leading-relaxed text-neutral-500 transition-all duration-300 dark:text-neutral-400 ${
                      expandedProjects.includes(project.id)
                        ? "max-h-32"
                        : "max-h-16"
                    }`}
                  >
                    <p>{t(`items.${project.id}.desc`)}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    className="mt-2 text-xs font-medium text-neutral-700 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  >
                    {expandedProjects.includes(project.id)
                      ? "إخفاء التفاصيل ↑"
                      : "قراءة المزيد ↓"}
                  </button>
                </div>

                {/* Technologies */}
                <div className="mt-auto flex flex-wrap content-start gap-2 overflow-y-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BeamCard>
          </Reveal>
        ))}
      </div>

      {/* Start Project Button */}
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-12 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:from-violet-500 hover:to-cyan-400"
        >
          <Rocket className="me-2 h-5 w-5" />
          {t("startProject")}
        </a>
      </div>
    </section>
  );
}