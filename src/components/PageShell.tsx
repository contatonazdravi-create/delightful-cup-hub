import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground text-balance max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
