import type { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-[clamp(20px,5vw,72px)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
