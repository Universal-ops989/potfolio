type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <header className={`space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan/90">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
