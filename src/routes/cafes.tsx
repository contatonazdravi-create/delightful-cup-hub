import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/cafes")({
  head: () => ({
    meta: [
      { title: "Cafés — Moravia Coffee" },
      { name: "description", content: "Lotes selecionados de cafés especiais brasileiros, com curadoria Moravia." },
      { property: "og:title", content: "Cafés especiais — Moravia Coffee" },
      { property: "og:description", content: "Conheça nossos lotes e perfis sensoriais." },
    ],
  }),
  component: Cafes,
});

const coffees = [
  {
    name: "Bata",
    region: "Cerrado Mineiro · MG",
    process: "Natural",
    notes: ["Chocolate ao leite", "Caramelo", "Avelã"],
    score: 86,
    description: "Encorpado e doce, uma homenagem ao espírito empreendedor de Jan Antonin Bata.",
  },
  {
    name: "Trachta",
    region: "Mantiqueira · MG",
    process: "Cereja descascado",
    notes: ["Frutas amarelas", "Mel", "Final cítrico"],
    score: 87,
    description: "Equilíbrio e complexidade — nosso lote autoral, em homenagem ao bisavô Jindřich.",
  },
  {
    name: "Morávia",
    region: "Sul de Minas · MG",
    process: "Lavado",
    notes: ["Chocolate amargo", "Nozes", "Açúcar mascavo"],
    score: 85,
    description: "Tradicional e confortável. Perfeito para coados do dia a dia.",
  },
  {
    name: "Travessia",
    region: "Chapada Diamantina · BA",
    process: "Fermentação anaeróbica",
    notes: ["Frutas vermelhas", "Vinho", "Floral"],
    score: 89,
    description: "Edição limitada. Um lote experimental que cruza fronteiras sensoriais.",
  },
];

function Cafes() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Lotes selecionados"
        title="Cafés que carregam uma travessia."
        subtitle="Curadoria grão a grão dos melhores produtores brasileiros. Cada lote tem nome, origem e história."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {coffees.map((c) => (
            <article key={c.name} className="group p-10 rounded-md bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{c.process}</p>
                  <h2 className="font-display text-4xl mt-2">{c.name}</h2>
                  <p className="text-muted-foreground mt-1">{c.region}</p>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-primary">{c.score}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">SCA</div>
                </div>
              </div>

              <p className="mt-6 text-foreground/80 leading-relaxed">{c.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {c.notes.map((n) => (
                  <span key={n} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                    {n}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/5567984323134?text=${encodeURIComponent(`Olá! Tenho interesse no café ${c.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <MessageCircle size={16} /> Pedir pelo WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
