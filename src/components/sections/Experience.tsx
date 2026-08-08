import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="flex flex-col gap-8 border-l border-border pl-6 sm:gap-10 sm:pl-8">
          {experience.map((item) => (
            <li key={`${item.organization}-${item.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 size-3 rounded-full border-2 border-background bg-accent sm:-left-[37px]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {item.role} · <span className="text-muted">{item.organization}</span>
                </h3>
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
