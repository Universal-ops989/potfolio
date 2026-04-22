import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-surface-raised/35 py-20 sm:py-24 lg:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-accent opacity-70" aria-hidden />

      <div className="section-shell relative space-y-14 sm:space-y-16">
        <SectionHeading
          eyebrow="Case studies"
          title="Strategic narratives behind the work"
          id="case-studies-heading"
          description="Deeper context on how problems were framed, how systems evolved, and how outcomes translated into business-critical experience quality."
        />

        <div className="space-y-16 sm:space-y-20">
          {caseStudies.map((study, index) => (
            <article
              key={study.number}
              className="relative grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-12"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-7">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-indigo/15 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative space-y-5">
                    <p className="font-display text-5xl font-semibold leading-none tracking-tight text-white/10 sm:text-6xl">
                      {study.number}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.6rem]">
                        {study.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan/90">
                        {study.label}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2" aria-label="Impact highlights">
                      {study.impacts.map((impact) => (
                        <li
                          key={impact}
                          className="inline-flex items-start gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-ink-muted"
                        >
                          <span
                            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.65)]"
                            aria-hidden
                          />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="divider-fade lg:hidden" aria-hidden />

                <div className="grid gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-subtle">
                      Overview
                    </h4>
                    <p className="text-base leading-relaxed text-ink-muted sm:text-[17px]">
                      {study.overview}
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-subtle">
                        Challenge
                      </h4>
                      <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-subtle">
                        Solution
                      </h4>
                      <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel rounded-3xl p-6 sm:p-7">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan/90">
                      Outcome
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-ink sm:text-[17px]">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {index < caseStudies.length - 1 ? (
                  <div className="hidden lg:block" aria-hidden>
                    <div className="divider-fade" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
