"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ContentBeam({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // التقدم بيبدأ لما أول الكونتنت يوصل نص الشاشة
  // وينتهي لما آخر الكونتنت يوصل نص الشاشة
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const headTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const fillScale = useTransform(progress, [0, 1], [0.001, 1]);

  return (
    <div ref={ref} className="relative">
      {/* الخط — من بداية أول قسم لنهاية آخر قسم بالظبط */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 bg-black/[0.03] blur-3xl dark:bg-white/[0.06]" />

        <div className="relative mx-auto h-full w-[3px] rounded-full bg-black/10 dark:bg-white/15">
          {/* التوهج الضبابي للجزء المضيء */}
          <motion.div
            className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-violet-500 via-cyan-500 to-fuchsia-500 opacity-50 blur-md dark:from-white/50 dark:via-white dark:to-white/50"
            style={{ scaleY: fillScale }}
          />
          {/* الجزء الحاد اللي عدّيت عليه */}
          <motion.div
            className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-violet-500 via-cyan-500 to-fuchsia-500 dark:from-white/60 dark:via-white dark:to-white/60"
            style={{ scaleY: fillScale }}
          />
          {/* هالة رأس النور */}
          <motion.div
            className="absolute left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl dark:bg-white/25"
            style={{ top: headTop }}
          />
          {/* رأس النور */}
          <motion.div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 shadow-[0_0_20px_8px_rgba(139,92,246,0.5)] dark:bg-white dark:shadow-[0_0_24px_10px_rgba(255,255,255,0.9),0_0_70px_28px_rgba(255,255,255,0.35)]"
            style={{ top: headTop }}
          />
        </div>
      </div>

      {children}
    </div>
  );
}