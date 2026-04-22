import { approachItems } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Approach() {
  return (
    <section
      className="relative border-t border-white/[0.06] bg-surface-raised/40 py-20 sm:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-accent opacity-60" aria-hidden />

      <div className="section-shell relative space-y-12 sm:space-y-14">
        <SectionHeading
          eyebrow="How I work"
          title="A disciplined frontend practice"
          id="approach-heading"
          description="Three pillars shape how I partner with teams: performance as product, accessibility as default, and systems that stay coherent as scope grows."
        />

        <ol className="grid gap-6 lg:grid-cols-3">
          {approachItems.map((item, index) => (
            <li key={item.title}>
              <article className="glass-panel group relative h-full overflow-hidden rounded-3xl p-6 sm:p-7 transition duration-300 hover:border-accent-cyan/20 hover:shadow-glow">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-indigo/10 blur-2xl transition duration-500 group-hover:bg-accent-cyan/10"
                  aria-hidden
                />
                <div className="relative flex h-full flex-col gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] font-display text-sm font-semibold text-accent-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
