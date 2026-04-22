"use client";

import Image from "next/image";
import { useState } from "react";
import { featuredProjects } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

function ProjectImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/[0.05] via-surface-card to-surface px-6 text-center sm:min-h-[280px] lg:min-h-0">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
          Visual
        </span>
        <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
          Image preview is unavailable. Add{" "}
          <span className="font-mono text-xs text-ink">{src}</span> to restore the
          hero visual.
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 55vw"
      className="object-cover object-center transition duration-700 ease-out will-change-transform group-hover:scale-[1.045]"
      onError={() => setFailed(true)}
    />
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24 lg:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-raised/30 via-transparent to-surface" aria-hidden />

      <div className="section-shell relative space-y-12 sm:space-y-16">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects with visual proof"
          id="projects-heading"
          description="A broader set of builds — from platforms and performance programs to design systems, analytics instrumentation, and accessibility at scale — each paired with strong visuals and outcomes recruiters can scan quickly."
        />

        <div className="space-y-10 lg:space-y-14">
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 === 1;
            const isSpotlight = index === 0;

            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-surface-card to-surface shadow-card backdrop-blur-xl transition duration-500 hover:border-accent-cyan/25 hover:shadow-glow ${
                  isSpotlight ? "lg:shadow-glow lg:ring-1 lg:ring-white/[0.06]" : ""
                }`}
              >
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    isSpotlight ? "lg:min-h-[min(52vh,560px)]" : "lg:min-h-[440px]"
                  }`}
                >
                  <div
                    className={`relative h-full min-h-[280px] w-full overflow-hidden border-b border-white/[0.06] bg-surface-raised/60 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:border-b-0 lg:border-white/[0.06] ${
                      isSpotlight ? "lg:min-h-[min(52vh,560px)]" : "lg:min-h-[440px]"
                    } ${
                      reverse ? "lg:order-2 lg:border-l lg:border-r-0" : "lg:border-r"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-surface/90 via-transparent to-accent-cyan/10 opacity-90 mix-blend-screen" aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-95" aria-hidden />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 20%, rgba(129,140,248,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.2), transparent 40%)",
                      }}
                      aria-hidden
                    />
                    <ProjectImage
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      priority={index < 2}
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-between gap-8 p-7 sm:p-9 lg:p-10 ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                          {project.impact}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                          {project.description}
                        </p>
                      </div>

                      <ul
                        className="flex flex-wrap gap-2"
                        aria-label={`Technologies for ${project.title}`}
                      >
                        {project.tech.map((tag) => (
                          <li key={tag}>
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-muted">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a className="btn-primary sm:flex-1" href={project.liveDemoUrl}>
                        Live Demo
                      </a>
                      <a className="btn-secondary sm:flex-1" href={project.caseStudyHref}>
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
