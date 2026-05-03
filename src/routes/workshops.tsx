import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Moravia Coffee" },
      { name: "description", content: "Workshops de café especial para o público geral, cafeterias e empresas." },
      { property: "og:title", content: "Workshops Moravia Coffee" },
      { property: "og:description", content: "Aprenda métodos de preparo e a diferença do café especial." },
    ],
  }),
  component: Workshops,
});

function Workshops() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Aprenda"
        title="Workshops de café especial."
        subtitle="Do primeiro coado em casa ao treinamento técnico para baristas — compartilhamos o que torna o café especial, especial."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
          {/* Público geral */}
          <article className="rounded-md overflow-hidden border border-border bg-card flex flex-col">
            <div className="relative h-72">
              <img src={workshop} alt="Workshop público geral" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/80 to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest">
                <Users size={14} /> Público geral
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <h2 className="font-display text-3xl">Do comum ao especial</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Para quem ama café e quer entender o que está na xícara. Uma imersão acessível e deliciosa.
              </p>
              <ul className="mt-6 space-y-3 text-foreground/85">
                <li className="flex gap-3"><span className="text-primary">—</span> Diferença entre café comum e especial</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Origens, variedades e processos</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Métodos de preparo: V60, prensa francesa, AeroPress</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Análise sensorial guiada</li>
              </ul>
              <a
                href={`https://wa.me/5567984323134?text=${encodeURIComponent("Olá! Quero saber sobre o workshop para público geral.")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-primary group self-start"
              >
                Reservar vaga <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>

          {/* Profissional */}
          <article className="rounded-md overflow-hidden border border-border bg-card flex flex-col">
            <div className="relative h-72 bg-coffee-deep">
              <img src={workshop} alt="Workshop profissional" className="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/90 to-coffee-deep/40" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream text-coffee-deep text-xs uppercase tracking-widest">
                <Briefcase size={14} /> Cafeterias & empresas
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <h2 className="font-display text-3xl">Treinamento profissional</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Para cafeterias, restaurantes e equipes corporativas que querem elevar a experiência do café.
              </p>
              <ul className="mt-6 space-y-3 text-foreground/85">
                <li className="flex gap-3"><span className="text-primary">—</span> Operação técnica de métodos de preparo</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Calibração de moagem e extração</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Padrão de atendimento e storytelling</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Conteúdo customizado por demanda</li>
              </ul>
              <a
                href={`https://wa.me/5567984323134?text=${encodeURIComponent("Olá! Quero um workshop para minha equipe/cafeteria.")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-primary group self-start"
              >
                Solicitar proposta <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
