"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "motion/react";
import { ArrowLeft, Code2, Sigma, Send, Terminal } from "lucide-react";
import { BeamLine } from "@/components/effects/beam-line";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const techStack = [
  {
    name: "React",
    className: "text-[#61DAFB]",
  },
  {
    name: "TypeScript",
    className: "text-[#3178C6]",
  },
  {
    name: "Tailwind",
    className: "text-[#38BDF8]",
  },
  {
    name: "Next.js",
    className: "text-black dark:text-white",
  },
];

export function Hero() {
  const t = useTranslations("Home");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const text = "Front-End Developer";

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, displayText.length + 1));

        if (displayText.length + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(text.slice(0, displayText.length - 1));

        if (displayText.length === 1) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);
  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 min-h-screen px-6 pt-28 pb-16 md:px-10 lg:pt-32"
    >
      <div className="grid w-full grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-16">
        {/* Right Side - Text */}
        <div className="order-2 text-center lg:order-1 lg:text-right">
          {/* Status Badge */}
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-gradient-to-l from-emerald-500/10 to-emerald-500/5 px-5 py-2.5 backdrop-blur-sm dark:from-emerald-500/20 dark:to-emerald-500/10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {t("status")}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={item} className="mb-8">
            <p className="mb-3 text-xl font-medium text-slate-500 dark:text-slate-400 md:text-2xl">
              {t("greeting")} 👋
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              <span className="relative inline-block">
                <span className="bg-gradient-to-l from-violet-600 via-cyan-500 to-violet-600 bg-[length:200%_auto] bg-clip-text pb-2 text-transparent animate-gradient">
                  {t("name")}
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Role Badge */}
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500">
              <Code2 className="h-4 w-4 text-white" />
            </div>

            <span className="font-bold text-slate-800 dark:text-white">
              {displayText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0 lg:ml-auto md:text-xl"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-end"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-l from-violet-600 to-cyan-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">{t("cta.projects")}</span>

              <ArrowLeft className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-2" />

              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:text-violet-400"
            >
              <span>{t("cta.contact")}</span>

              <Send className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-2 lg:justify-end"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              >
                {tech.name === "React" && (
                  <Code2
                    className={`h-5 w-5 ${tech.className} transition-transform duration-500 group-hover:rotate-180`}
                  />
                )}

                {tech.name === "TypeScript" && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#3178C6] text-[10px] font-bold text-white">
                    TS
                  </div>
                )}

                {tech.name === "Tailwind" && (
                  <div className="flex h-5 w-5 items-center justify-center">
                    <span className="text-lg font-black text-[#38BDF8]">≋</span>
                  </div>
                )}

                {tech.name === "Next.js" && (
                  <Terminal className={`h-5 w-5 ${tech.className}`} />
                )}

                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Left Side - Image */}
        <motion.div
          variants={item}
          className="order-1 relative flex justify-center lg:order-2 lg:justify-start"
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-[280px] w-[280px] animate-spin rounded-full border-2 border-dashed border-violet-500/30 md:h-[450px] md:w-[450px]"
              style={{ animationDuration: "30s" }}
            />
          </div>

          {/* Inner Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-[230px] w-[230px] animate-spin rounded-full border-2 border-cyan-500/20 md:h-[380px] md:w-[380px]"
              style={{
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            />
          </div>

          {/* Profile Image */}
          <div className="relative z-10">
            {/* Glow */}
            <div className="absolute -inset-3 animate-pulse rounded-full bg-gradient-to-br from-violet-600 via-cyan-500 to-violet-600 opacity-75 blur-sm" />

            {/* Gradient Border */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-600 via-cyan-500 to-violet-600" />

            {/* Image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-800 md:h-80 md:w-80">
              <img
                src="/projects/darsh.jpeg"
                alt={t("name")}
                className="h-full w-full object-cover"
              />
            </div>

            {/* React Badge */}
            <div
              className="absolute -right-4 -top-4 animate-bounce rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800"
              style={{ animationDuration: "3s" }}
            >
              <Code2 className="h-8 w-8 text-[#61DAFB]" />
            </div>

            {/* Vue / Code Badge */}
            <div
              className="absolute -left-6 top-1/4 animate-bounce rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800"
              style={{
                animationDuration: "2.5s",
                animationDelay: "0.5s",
              }}
            >
              <Terminal className="h-8 w-8 text-emerald-500" />
            </div>

            {/* Figma Badge */}
            <div
              className="absolute -bottom-4 -right-4 animate-bounce rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800"
              style={{
                animationDuration: "3.5s",
                animationDelay: "1s",
              }}
            >
              <Sigma className="h-8 w-8 text-orange-500" />
            </div>

            {/* Code Badge */}
            <div
              className="absolute -bottom-6 -left-6 animate-bounce rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800"
              style={{
                animationDuration: "2s",
                animationDelay: "1.5s",
              }}
            >
              <Code2 className="h-8 w-8 text-violet-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Beam */}
      <div className="mx-auto mt-16 w-full max-w-xl lg:hidden">
        <BeamLine />
      </div>
    </motion.section>
  );
}
