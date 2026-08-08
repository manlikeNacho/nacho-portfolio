import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="lg:w-1/3">
          <SectionHeading eyebrow="About" title="A bit about me" />
        </div>

        <div className="flex flex-col gap-5 lg:w-2/3">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-muted sm:text-base"
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-4 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Location
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {profile.location}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Role
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {profile.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Email
              </dt>
              <dd className="mt-1 truncate text-sm font-medium text-foreground">
                {profile.email}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
