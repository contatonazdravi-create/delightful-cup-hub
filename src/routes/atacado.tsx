import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Package, Building2, PartyPopper, Sparkles } from "lucide-react";
import wholesale from "@/assets/wholesale.jpg";

export const Route = createFileRoute("/atacado")({
  head: () => ({
    meta: [
      { title: "Atacado e embalagens personalizadas — Moravia Coffee" },
      { name: "description", content: "Cafés especiais no atacado para cafeterias, empresas e eventos. Embalagens personalizadas." },
      { property: "og:title", content: "Atacado — Moravia Coffee" },
      { property: "og:description", content: "Cafés e embalagens personalizadas para o seu negócio." },
    ],
  }),
  component: Atacado,
});

function Atacado() {
  return (
    <PageShell>
      <PageHero
        eyebrow="B2B & personalização"
        title="Café especial com a sua marca."
        subtitle="Atendemos cafeterias, empresas, eventos e profissionais com lotes em atacado e embalagens totalmente personalizadas."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={wholesale} alt="Embalagens personalizadas Moravia" className="rounded-md shadow-deep w-full" loading="lazy" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
              Sua marca, nosso ofício.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Criamos embalagens personalizadas para cafeterias, eventos corporativos, presentes profissionais e ocasiões especiais. Do design ao grão, cuidamos de cada detalhe.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Building2, title: "Cafeterias", desc: "Lotes recorrentes com perfil sensorial alinhado ao seu cardápio." },
                { icon: Package, title: "Empresas", desc: "Café para o escritório com a identidade da sua marca." },
                { icon: PartyPopper, title: "Eventos", desc: "Edições limitadas para casamentos, lançamentos e brindes." },
                { icon: Sparkles, title: "Profissionais", desc: "Embalagens autorais para presentear clientes e parceiros." },
              ].map((b) => (
                <div key={b.title} className="p-5 rounded-md bg-secondary/60 border border-border">
                  <b.icon className="text-primary" size={22} />
                  <h3 className="mt-3 font-display text-xl">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 bg-coffee-deep text-cream rounded-md p-14 md:p-16 shadow-deep">
          <p className="text-xs uppercase tracking-[0.4em] text-cream/60">Como funciona</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Um processo simples e cuidadoso.</h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Briefing", d: "Conversamos sobre seu projeto, volume e perfil de café desejado." },
              { n: "02", t: "Curadoria", d: "Selecionamos os lotes ideais e desenhamos a embalagem com você." },
              { n: "03", t: "Entrega", d: "Torra fresca, embalagem pronta e logística alinhada com seu calendário." },
            ].map((s) => (
              <li key={s.n}>
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="mt-3 font-display text-xl">{s.t}</div>
                <p className="mt-2 text-cream/70 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <a
            href={`https://wa.me/5567984323134?text=${encodeURIComponent("Olá! Quero um orçamento de atacado / embalagem personalizada.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </PageShell>
  );
}
