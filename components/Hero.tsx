import { heroMetrics, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:scroll-mt-28 lg:pb-28 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-radial-accent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid-fade"
        aria-hidden
      />

      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <div className="space-y-8 motion-safe-animate animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-muted shadow-glow-indigo backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <span>
                {siteConfig.role} · {siteConfig.location}
              </span>
            </div>

            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]"
              >
                Building premium digital experiences with{" "}
                <span className="bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
                  performance, accessibility, and scale
                </span>{" "}
                at the core.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                I create high-impact frontend systems for enterprise web platforms —
                blending product clarity, technical rigor, and measurable business outcomes
                across marketing, SaaS, and CMS-driven ecosystems.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a className="btn-primary" href={`mailto:${siteConfig.email}`}>
                Contact Me
              </a>
              <a
                className="btn-secondary"
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn-ghost" href={siteConfig.resumePath} download>
                Download Resume
              </a>
            </div>
          </div>

          <aside
            className="glass-panel-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 motion-safe-animate animate-fade-in"
            style={{ animationDelay: "120ms" }}
            aria-label="Selected impact metrics"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-accent-indigo/10 blur-3xl"
              aria-hidden
            />

            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                    Proof in the craft
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    Outcomes teams can feel
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                  Snapshot
                </span>
              </div>

              <div className="divider-fade" />

              <dl className="grid grid-cols-2 gap-4 sm:gap-5">
                {heroMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:border-accent-cyan/25 hover:shadow-glow"
                  >
                    <dt className="text-xs font-medium text-ink-subtle">{m.label}</dt>
                    <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-sm leading-relaxed text-ink-muted">
                Metrics reflect representative program outcomes across performance,
                engagement, and conversion initiatives — aligned to business-critical
                journeys.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
