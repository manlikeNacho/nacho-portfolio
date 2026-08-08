import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          >
            <div className="h-64 w-64 rounded-full bg-accent/20 blur-[100px] sm:h-80 sm:w-80" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title="Let's build something together"
              description="I'm currently open to new opportunities and collaborations. Send a message and I'll get back to you soon."
            />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {profile.email}
              </Button>
              <Button href="#top" variant="secondary">
                Back to top
                <ArrowUpRight className="size-4" />
              </Button>
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
        </div>
      </Container>
    </section>
  );
}
