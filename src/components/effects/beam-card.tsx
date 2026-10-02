import type { ReactNode } from "react";

type BeamCardProps = { children: ReactNode; className?: string };

export function BeamCard({ children, className = "" }: BeamCardProps) {
  return (
    <div className={`card-beam rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03] ${className}`}>
      {children}
    </div>
  );
}