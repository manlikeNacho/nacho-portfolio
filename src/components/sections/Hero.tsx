import { ArrowUpRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile, socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-grid"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center"
      >
        <div className="h-80 w-80 rounded-full bg-accent/25 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
      </div>

      <Container className="relative flex flex-col gap-8 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:py-32">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Available for new opportunities
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hi, I&apos;m {profile.name} —{" "}
            <span className="text-gradient">{profile.role}</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="#projects">
              View my work
              <ArrowUpRight className="size-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
            {profile.resumeUrl ? (
              <Button href={profile.resumeUrl} variant="secondary">
                Resume
                <Download className="size-4" />
              </Button>
            ) : null}
          </div>

          <div className="flex items-center gap-3 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs shrink-0 sm:max-w-sm lg:mx-0">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/40 to-accent-secondary/30 blur-2xl" />
          <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-surface-elevated">
            <div className="flex h-full w-full items-center justify-center text-6xl font-semibold text-gradient">
              {profile.name.charAt(0)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
