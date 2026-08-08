import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-5 sm:px-[clamp(20px,5vw,72px)] ${className}`}
    >
      {children}
    </div>
  );
}
