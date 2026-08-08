import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CornerMarks } from "@/components/ui/Blueprint";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 font-heading text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

  const variants = {
    primary: "bg-foreground text-background",
    secondary: "border border-foreground/25 text-foreground hover:bg-foreground/5",
    ghost: "text-foreground/75 hover:text-foreground",
  };

  const showCorners = variant !== "ghost";

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {showCorners ? (
        <CornerMarks
          className={variant === "primary" ? "text-background" : "text-foreground/55"}
        />
      ) : null}
      {children}
    </a>
  );
}
