"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { LocalClock } from "@/components/ui/LocalClock";
import { profile } from "@/data/portfolio";

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const dx = (event.clientX - window.innerWidth / 2) * 0.015;
      const dy = (event.clientY - window.innerHeight * 0.3) * 0.015;
      setOffset({ x: dx, y: dy });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 py-16 sm:px-[clamp(20px,5vw,72px)] sm:py-[clamp(40px,6vw,72px)]"
    >
      <div
        className="mx-auto max-w-[1200px]"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
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

        <h1 className="font-display text-[clamp(56px,10vw,152px)] font-black uppercase leading-[0.85] tracking-tight text-foreground">
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
      </div>
    </section>
  );
}
