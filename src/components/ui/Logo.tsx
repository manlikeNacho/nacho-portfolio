import Image from "next/image";
import logoDark from "@/app/nacho-logo-dark.svg";
import logoLight from "@/app/nacho-logo.svg";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <span className="inline-flex items-center">
      <Image
        src={logoDark}
        alt="Nacho"
        priority
        className={`brand-mark-dark ${className}`}
      />
      <Image
        src={logoLight}
        alt="Nacho"
        priority
        className={`brand-mark-light ${className}`}
      />
    </span>
  );
}
