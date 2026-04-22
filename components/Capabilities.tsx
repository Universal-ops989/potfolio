import { capabilities } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Capabilities() {
  return (
    <section
      className="relative border-t border-white/[0.06] py-20 sm:py-24"
      aria-labelledby="capabilities-heading"
    >
      <div className="section-shell space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools and domains I operate in confidently"
          id="capabilities-heading"
          description="A practical stack spanning implementation craft, platform delivery, measurement, and governance — tuned for enterprise-grade web experiences."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map((skill) => (
            <li key={skill}>
              <span className="glass-panel flex min-h-[52px] items-center rounded-2xl px-4 py-3 text-sm font-medium text-ink-muted transition duration-300 hover:border-accent-cyan/20 hover:text-ink">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
