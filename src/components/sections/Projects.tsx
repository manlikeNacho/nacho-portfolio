import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="py-12 sm:py-16">
      <Container>
        <SectionLabel number="04" label="Project logs" />

        <div className="flex flex-col">
          {projects.map((project) => (
            <a
              key={project.index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[32px_1fr] items-center gap-4 border-b border-foreground/16 py-5 no-underline sm:grid-cols-[56px_1fr_auto] sm:gap-6 sm:py-6"
            >
              <span className="font-heading text-sm font-semibold text-foreground/50">
                ({project.index})
              </span>
              <div>
                <h3 className="mb-2 font-display text-[clamp(18px,3vw,24px)] font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-2 max-w-[64ch] text-sm text-foreground/75">
                  {project.description}
                </p>
                <span className="text-xs text-foreground/60">{project.tech}</span>
              </div>
              <span className="hidden font-heading text-2xl transition-transform duration-200 group-hover:translate-x-1 sm:block">
                →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
