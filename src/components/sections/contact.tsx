"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeamCard } from "@/components/effects/beam-card";
import { Reveal } from "../animation/reveal";
import { Mail, Check, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons";

export function Contact() {
  const t = useTranslations("Contact");

  const socials = [
    {
      icon: GithubIcon,
      href: "https://github.com/dashboard",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/mostafa-ahmed-abdelazem/",
      label: "LinkedIn",
    },
    {
      icon: WhatsappIcon,
      href: "https://wa.me/201066062148",
      label: "WhatsApp",
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <Reveal>
          <BeamCard className="relative overflow-hidden p-8 sm:p-10">

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/15" />

            <div className="relative">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                  <ArrowUpRight className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>

                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {t("workTogether")}
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                {t("buildTitle")}
                <br />
                <span className="text-neutral-500 dark:text-neutral-400">
                  {t("buildSubtitle")}
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                {t("buildDescription")}
              </p>

              {/* Services */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10">
                    <Check className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                  </div>

                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {t("services.web")}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10">
                    <Check className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  </div>

                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {t("services.landing")}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/10">
                    <Check className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
                  </div>

                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {t("services.ecommerce")}
                  </span>
                </div>

              </div>
            </div>
          </BeamCard>
        </Reveal>

        {/* RIGHT SIDE */}
        <div className="text-center">
          <SectionHeading
            label={t("label")}
            title={t("title")}
          />

          <Reveal delay={0.1}>
            <p className="mb-10 text-lg text-neutral-500 dark:text-neutral-400">
              {t("subtitle")}
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ma6701242@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-violet-600 px-10 py-4 font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all hover:-translate-y-1 hover:bg-violet-700 hover:shadow-[0_0_55px_rgba(139,92,246,0.5)] dark:shadow-[0_0_30px_rgba(139,92,246,0.5)] dark:hover:shadow-[0_0_55px_rgba(139,92,246,0.8)]"
            >
              <Mail className="me-2 inline h-5 w-5" />
              {t("email")}
            </a>

            <div className="mt-12 flex justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:text-neutral-950 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] dark:border-white/10 dark:text-neutral-400 dark:hover:text-white dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}