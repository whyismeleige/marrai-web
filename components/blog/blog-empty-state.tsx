type BlogEmptyStateProps = {
  title: string;
  description?: string;
};

export function BlogEmptyState({ title, description }: BlogEmptyStateProps) {
  return (
    <div className="rounded-[2rem] border border-slate-900/10 bg-white/72 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-sm">
      <h2 className="text-2xl font-normal tracking-[-0.035em] text-slate-950">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
