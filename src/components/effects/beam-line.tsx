export function BeamLine({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative h-px w-full overflow-hidden bg-black/10 dark:bg-white/10 ${className}`}>
      <span className="beam" />
    </div>
  );
}