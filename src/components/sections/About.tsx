import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Blueprint } from "@/components/ui/Blueprint";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <Parallax strength={40}>
        <Container>
          <SectionLabel number="02" label="About" />

          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-12 sm:gap-[clamp(24px,5vw,64px)]">
            <p className="text-lg leading-relaxed sm:col-span-7">
              {profile.aboutBio}
            </p>

            <Blueprint
              className="border border-foreground/22 p-6 sm:col-span-5"
              cornerClassName="text-foreground/55"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                At a glance
              </span>
              <div className="mt-3 grid gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-heading text-[28px] font-semibold leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-sm text-foreground/70">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Blueprint>
          </div>
        </Container>
      </Parallax>
    </section>
  );
}
