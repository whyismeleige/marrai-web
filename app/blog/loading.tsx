export default function BlogLoading() {
  return (
    <main className="min-h-[100svh] bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_42%,#E7EFE4_100%)] text-[#101828]">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <div className="h-10 w-28 rounded-full bg-white/55 ring-1 ring-slate-900/10" />
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="h-8 w-32 rounded-full bg-white/55 ring-1 ring-slate-900/10" />
          <div className="mt-5 h-16 max-w-2xl rounded-3xl bg-white/55 ring-1 ring-slate-900/10 sm:h-24" />
          <div className="mt-5 h-6 max-w-xl rounded-full bg-white/45" />
        </section>
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-64 rounded-[1.75rem] border border-slate-900/10 bg-white/62 shadow-[0_14px_38px_rgba(15,23,42,0.04)]"
            />
          ))}
        </section>
      </div>
    </main>
  );
}
