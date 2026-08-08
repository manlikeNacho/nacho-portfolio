"use client";

import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

function readTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">(readTheme);

  useLayoutEffect(() => {
    // Re-applies the attribute after React's dev Strict Mode remount clears it; a no-op in production.
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
      className={`inline-flex size-10 items-center justify-center border border-foreground/25 text-foreground transition-colors hover:bg-foreground/5 ${className}`}
    >
      {/* Both icons always render; CSS (tied to the data-theme attribute) picks which
          one shows. Swapping the icon via JSX instead would swap child component types
          between server and client renders, which suppressHydrationWarning cannot cover. */}
      <Sun className="theme-icon-sun size-4" strokeWidth={1.5} />
      <Moon className="theme-icon-moon size-4" strokeWidth={1.5} />
    </button>
  );
}
