import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import type { SocialLink } from "@/types/portfolio";

type IconProps = SVGProps<SVGSVGElement>;

function GithubGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function DevtoGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.83 11.5c0-.6-.35-.9-1.06-.9h-.63v3.5h.64c.7 0 1.05-.32 1.05-.96V11.5ZM24 4.4v15.2c0 1.62-1.32 2.4-2.94 2.4H2.94C1.32 22 0 21.22 0 19.6V4.4C0 2.78 1.32 2 2.94 2h18.12C22.68 2 24 2.78 24 4.4ZM9.4 11.6c0-1.53-.93-2.75-2.85-2.75H4.36v6.8h2.2c1.9 0 2.84-1.2 2.84-2.75v-1.3Zm4.62-1.4c0-.4-.3-.75-.75-.75H10.9v6.8h2.3c.46 0 .77-.36.77-.76 0-.4-.3-.76-.77-.76h-1.34v-1.44h1.15c.44 0 .74-.34.74-.74s-.3-.74-.74-.74h-1.15V10.9h1.34c.46 0 .76-.35.76-.7Zm5.98-.32c-.02-.4-.35-.68-.73-.68-.35 0-.6.22-.72.62l-1.03 3.66-1.02-3.66c-.11-.4-.37-.62-.72-.62-.4 0-.72.3-.72.7 0 .1.02.2.05.3l1.62 5.16c.15.47.5.75.99.75.5 0 .84-.28.99-.75l1.62-5.16c.03-.1.05-.2.05-.3.02-.02.02-.04.02-.06Z" />
    </svg>
  );
}

const icons = {
  github: GithubGlyph,
  linkedin: LinkedinGlyph,
  devto: DevtoGlyph,
  mail: Mail,
};

interface SocialIconProps {
  icon: SocialLink["icon"];
  className?: string;
}

export function SocialIcon({ icon, className = "size-4" }: SocialIconProps) {
  const Icon = icons[icon];
  return <Icon className={className} strokeWidth={1.75} />;
}
