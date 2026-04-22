import { ctaContent, siteConfig } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24 lg:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />

      <div className="section-shell relative">
        <div className="glass-panel-strong relative overflow-hidden rounded-[32px] p-8 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-accent-indigo/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-end">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan/90">
                {ctaContent.eyebrow}
              </p>
              <h2
                id="cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {ctaContent.headline}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {ctaContent.body}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <a className="btn-primary justify-center" href={`mailto:${siteConfig.email}`}>
                Email Jesse
              </a>
              <a
                className="btn-secondary justify-center"
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
