import type { HTMLAttributes, ReactNode } from "react";

interface CornerMarkProps {
  className?: string;
}

export function CornerMark({ className = "text-foreground/55" }: CornerMarkProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-[11px] w-[11px] text-current ${className}`}
    >
      <span className="absolute left-[5px] top-0 h-full w-px bg-current" />
      <span className="absolute left-0 top-[5px] w-full h-px bg-current" />
    </span>
  );
}

export function CornerMarks({ className = "text-foreground/55" }: CornerMarkProps) {
  return (
    <>
      <CornerMark className={`-left-1.5 -top-1.5 ${className}`} />
      <CornerMark className={`-right-1.5 -top-1.5 ${className}`} />
      <CornerMark className={`-left-1.5 -bottom-1.5 ${className}`} />
      <CornerMark className={`-right-1.5 -bottom-1.5 ${className}`} />
    </>
  );
}

interface BlueprintProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  cornerClassName?: string;
}

export function Blueprint({
  children,
  className = "",
  cornerClassName,
  ...props
}: BlueprintProps) {
  return (
    <div className={`relative ${className}`} {...props}>
      <CornerMarks className={cornerClassName} />
      {children}
    </div>
  );
}
