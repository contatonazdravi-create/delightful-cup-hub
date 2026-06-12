import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MessageCircle } from "lucide-react";
import pantanoAsset from "@/assets/cafe-pantano.png.asset.json";
import chocolateAsset from "@/assets/cafe-chocolate-caramelo.png.asset.json";

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

const formats = ["250g", "100g", "Drip Coffee"] as const;

const coffees = [
  {
    image: pantanoAsset.url,
    label: "Pêssego e Doce de Leite",
    region: "Cerrado Mineiro · MG",
    producer: "Wagner Ferrero",
    process: "Natural",
    variety: "Catuaí Vermelho",
    roast: "Média",
    notes: ["Doce de leite", "Rapadura", "Pêssego"],
    description:
      "Um café doce e envolvente, do Cerrado Mineiro. Notas que lembram um café da tarde de infância — rapadura, doce de leite e a delicadeza do pêssego no final.",
  },
  {
    image: chocolateAsset.url,
    label: "Chocolate e Caramelo",
    region: "Alta Mogiana Paulista · SP",
    producer: "Paulo Toledo",
    process: "Natural",
    variety: "Blend",
    roast: "Média",
    notes: ["Chocolate", "Caramelo", "Castanhas"],
    description:
      "Equilíbrio clássico e confortável. Um blend natural da Alta Mogiana, com corpo cremoso e doçura que remete a chocolate ao leite e caramelo.",
  },
];

function Cafes() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Lotes selecionados"
        title="Cafés que carregam uma travessia."
        subtitle="Curadoria grão a grão dos melhores produtores brasileiros. Disponíveis em 250g, 100g e Drip Coffee."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          {coffees.map((c) => (
            <article
              key={c.label}
              className="group rounded-md bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/40 overflow-hidden">
                <img
                  src={c.image}
                  alt={`Embalagem do café ${c.label}`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{c.process} · {c.variety}</p>
                <h2 className="font-display text-4xl mt-2">{c.label}</h2>
                <p className="text-muted-foreground mt-1">{c.region}</p>

                <p className="mt-6 text-foreground/80 leading-relaxed">{c.description}</p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm border-t border-border/60 pt-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Produtor</dt>
                    <dd className="mt-1">{c.producer}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Torra</dt>
                    <dd className="mt-1">{c.roast}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Notas sensoriais</p>
                  <div className="flex flex-wrap gap-2">
                    {c.notes.map((n) => (
                      <span key={n} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Disponível em</p>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/5567984323134?text=${encodeURIComponent(`Olá! Tenho interesse no café "${c.label}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 text-sm px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all self-start"
                >
                  <MessageCircle size={16} /> Pedir pelo WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
