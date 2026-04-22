import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-surface-raised/35 py-20 sm:py-24 lg:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-indigo/[0.03] to-transparent" aria-hidden />

      <div className="section-shell relative space-y-12 sm:space-y-14">
        <SectionHeading
          eyebrow="Experience"
          title="Leadership across high-stakes product surfaces"
          id="experience-heading"
          description="A trajectory shaped by scale, performance accountability, and the craft details that compound into trustworthy enterprise UX."
        />

        <ol className="grid gap-6 lg:grid-cols-3">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <article className="glass-panel-strong flex h-full flex-col rounded-3xl p-6 sm:p-7 transition duration-300 hover:border-accent-cyan/20 hover:shadow-glow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-muted">{job.role}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                    {job.period}
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/80"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
