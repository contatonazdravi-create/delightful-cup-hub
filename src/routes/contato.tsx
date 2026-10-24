import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Moravia Coffee" },
      { name: "description", content: "Fale com a Moravia Coffee pelo WhatsApp, Instagram ou e-mail." },
      { property: "og:title", content: "Contato — Moravia Coffee" },
      { property: "og:description", content: "Converse sobre cafés, workshops e pedidos de atacado com a Moravia Coffee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contato,
});

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "(67) 98432-3134", href: "https://wa.me/5567984323134" },
  { icon: Instagram, label: "Instagram", value: "@moraviacoffee", href: "https://instagram.com/moraviacoffee" },
  { icon: Mail, label: "E-mail", value: "contato.nazdravi@gmail.com", href: "mailto:contato.nazdravi@gmail.com" },
  { icon: MapPin, label: "Curadoria", value: "Tomas Trachta", href: "#" },
];

function Contato() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vamos conversar"
        title="Fale com a Moravia."
        subtitle="Uma dúvida sobre os cafés, uma turma de workshop ou um projeto para a sua marca. Escolha o canal e conta pra gente."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-6">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group min-w-0 p-6 md:p-10 rounded-md bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all flex items-start gap-3 md:gap-5"
            >
              <div className="shrink-0 p-3 rounded-md bg-primary/10 text-primary">
                <c.icon size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                <p className="mt-2 font-display text-xl md:text-2xl [overflow-wrap:anywhere] text-foreground group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

      </section>
    </PageShell>
  );
}
