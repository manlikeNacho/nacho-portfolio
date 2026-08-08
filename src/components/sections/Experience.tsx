"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Blueprint } from "@/components/ui/Blueprint";
import { experience } from "@/data/portfolio";

export function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="experience" className="py-12 sm:py-16">
      <Container>
        <SectionLabel number="05" label="Experience" />

        <div className="grid gap-4">
          {experience.map((job, index) => {
            const active = hovered === index;

            return (
              <Blueprint
                key={`${job.company}-${job.dates}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                cornerClassName={active ? "text-background" : "text-foreground/55"}
                className={`cursor-pointer border p-6 transition-all duration-250 ease-out sm:p-6 ${
                  active
                    ? "scale-[1.015] border-foreground bg-foreground text-background shadow-xl sm:p-7"
                    : "border-foreground/22 bg-transparent text-foreground"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3
                      className={`font-display font-extrabold tracking-tight transition-[font-size] duration-250 ${
                        active ? "text-[22px]" : "text-xl"
                      }`}
                    >
                      {job.role}
                    </h3>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold"
                    >
                      {job.company}
                    </a>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 text-[11px] tracking-wide ${
                      active ? "bg-background text-foreground" : "bg-foreground/10 text-foreground/80"
                    }`}
                  >
                    {job.dates}
                  </span>
                </div>
                <p className="mt-3 text-sm opacity-85">{job.summary}</p>
              </Blueprint>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
