import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface py-12">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{siteConfig.role}</p>
          <p className="mt-3 text-sm">
            <a className="link-subtle" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              className="link-subtle"
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a className="btn-ghost px-0 text-sm" href={siteConfig.resumePath} download>
            Download resume
          </a>
          <p className="text-xs text-ink-subtle">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
