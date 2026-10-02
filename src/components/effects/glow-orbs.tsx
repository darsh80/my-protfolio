export function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb absolute -top-32 start-[15%] h-96 w-96 rounded-full bg-violet-300/40 blur-[120px] dark:bg-violet-600/25" />
      <div className="orb orb-delay absolute top-1/3 end-[5%] h-80 w-80 rounded-full bg-cyan-300/40 blur-[110px] dark:bg-cyan-500/20" />
      <div className="orb absolute bottom-[-10%] start-[35%] h-72 w-72 rounded-full bg-fuchsia-300/40 blur-[120px] dark:bg-fuchsia-600/20" />
    </div>
  );
}