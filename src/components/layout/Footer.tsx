import { Container } from "@/components/ui/Container";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/15">
      <Container className="py-8">
        <p className="text-xs text-foreground/55">
          © {year} {profile.name}. Built with intent.
        </p>
      </Container>
    </footer>
  );
}
