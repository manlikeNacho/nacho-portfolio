import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="stack" className="py-12 sm:py-16">
      <Container>
        <SectionLabel number="03" label="Toolkit" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <span className="mb-3 block font-heading text-sm font-semibold uppercase tracking-[0.04em]">
                {group.label}
              </span>
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
