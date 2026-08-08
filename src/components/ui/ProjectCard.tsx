import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface-elevated">
        <div className="flex h-full w-full items-center justify-center text-sm text-muted">
          {project.title}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-base font-semibold text-foreground sm:text-lg">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <SocialIcon icon="github" className="size-4" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
