import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import raizTable from "@/assets/raiz-table.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Raízes — Moravia Coffee" },
      {
        name: "description",
        content:
          "A travessia da Morávia ao Brasil que inspira a curadoria de cafés especiais da Moravia Coffee.",
      },
      { property: "og:title", content: "Raízes — Moravia Coffee" },
      { property: "og:description", content: "Raízes tchecas, café brasileiro e o gosto pela vida ao ar livre." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Historia,
});

const leftovers = [
  { title: "O azul da porcelana", desc: "Uma referência às nossas raízes, presente no logo da Moravia." },
  { title: "O café brasileiro", desc: "Regiões, produtores e perfis que dão forma à nossa seleção." },
  { title: "A vida ao ar livre", desc: "Trilha, estrada e acampamento. Lugares onde o café também faz parte da rotina." },
];

function Historia() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Raiz"
        title="De onde vem a Moravia."
        subtitle="Raízes tchecas, café brasileiro e o gosto pela vida ao ar livre. Uma história que aparece no nome e nas escolhas da marca."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <img
                src={raizTable}
                alt="Documento de viagem antigo, xícara de porcelana azul e bússola sobre uma mesa de madeira"
                className="rounded-md shadow-deep w-full"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Papel de viagem, porcelana e um café
              </p>
            </div>
          </div>

          <article className="lg:col-span-3 space-y-8 text-lg text-foreground/85 leading-relaxed">
            <p>
              Nosso bisavô, <strong>Jindrich Trachta</strong>, atravessou o Atlântico para recomeçar no Brasil.
              Sua história de mudança e recomeço é uma das inspirações da Moravia.
              Jan Antonin Bata também faz parte desse contexto de travessias entre a Morávia e o Brasil.
            </p>
            <p>
              A referência à cultura trampové aproxima essa história da nossa vida hoje:
              sair para caminhar, acampar e passar tempo ao ar livre. O café acompanha esses momentos,
              mas também está na mesa de casa, antes de qualquer viagem.
            </p>
            <p>
              O azul da <em>porcelana da Morávia</em> permanece no logo.
              A bandeira e as paisagens dos rótulos trazem o olhar para fora. São referências que convivem
              com o que mais importa na nossa seleção: o café que você vai preparar.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              {leftovers.map((l) => (
                <div key={l.title}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    O que ficou
                  </p>
                  <h3 className="mt-2 font-display text-xl">{l.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">Curadoria</p>
              <p className="mt-2 font-display text-2xl text-primary">Tomas Trachta</p>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
