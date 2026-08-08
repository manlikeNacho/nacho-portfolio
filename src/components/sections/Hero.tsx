import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { LocalClock } from "@/components/ui/LocalClock";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden py-16 sm:py-[clamp(40px,6vw,72px)]"
    >
      <Parallax strength={60}>
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/75">
              <span className="size-[7px] rounded-full bg-foreground" />
              Available for new projects
            </span>
            <LocalClock timeZone={profile.timezone} location={profile.location} />
          </div>

          <span className="mb-4 block font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground/60">
            {profile.role}
          </span>

          <h1 className="font-display text-[clamp(56px,11vw,240px)] font-black uppercase leading-[0.85] tracking-tight text-foreground">
            <span className="block">{profile.heroName[0]}</span>
            <span className="block">{profile.heroName[1]}</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-foreground/85">
            {profile.heroBio}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#work">View work</Button>
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
              variant="ghost"
            >
              LinkedIn
            </Button>
          </div>
        </Container>
      </Parallax>
    </section>
  );
}
