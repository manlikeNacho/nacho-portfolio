"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between sm:h-[68px]">
        <a href="#top" aria-label={profile.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <Button href={`mailto:${profile.email}`}>Email me</Button>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center border border-foreground/25 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <nav className="border-t border-foreground/15 bg-background px-5 py-4 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Email me
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
