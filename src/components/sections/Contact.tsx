import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionLabel number="06" label="Start a project" />

        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold uppercase tracking-tight">
          {profile.contactHeading}
        </h2>
        <p className="mt-3 max-w-[56ch] text-base text-foreground/85">
          {profile.contactBio}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          <Button
            href="https://github.com/manlikeNacho"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/emmanuel-iheanacho"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            LinkedIn
          </Button>
          <Button
            href="https://dev.to/iheanachoebere"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            Dev.to
          </Button>
        </div>
      </Container>
    </section>
  );
}
