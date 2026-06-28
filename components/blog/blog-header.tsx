import { cn } from "@/lib/utils";

type BlogHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function BlogHeader({
  eyebrow,
  title,
  description,
  className,
}: BlogHeaderProps) {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full bg-white/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10 backdrop-blur-sm">
          {eyebrow}
        </div>
        <h1 className="mt-5 text-5xl font-normal leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
