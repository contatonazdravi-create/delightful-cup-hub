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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Atacado,
});

function Atacado() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Atacado e personalização"
        title="Café especial com a sua marca."
        subtitle="Para servir na cafeteria, levar ao escritório ou presentear. Conheça nossa seleção e converse com a gente sobre as opções de embalagem."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={wholesale} alt="Embalagens personalizadas Moravia" className="rounded-md shadow-deep w-full" loading="lazy" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
              Um café para o seu projeto.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              O ponto de partida é entender como o café vai chegar às pessoas.
              A partir daí, conversamos sobre perfil sensorial, quantidade e identidade da embalagem.
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
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/60">Do pedido à entrega</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Vamos combinar os detalhes.</h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Conversa", d: "Conte para quem é o café, a quantidade e a data que você tem em mente." },
              { n: "02", t: "Seleção", d: "Conversamos sobre os lotes disponíveis e as opções de personalização." },
              { n: "03", t: "Entrega", d: "Com café e embalagem definidos, alinhamos os prazos e o envio." },
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
