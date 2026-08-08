interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <>
      <span className="mb-3 block font-heading text-sm font-semibold uppercase tracking-[0.08em] text-foreground/65">
        {number} · {label}
      </span>
      <hr className="mb-6 h-px border-0 bg-foreground/16" />
    </>
  );
}
