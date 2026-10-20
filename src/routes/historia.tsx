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
      { property: "og:description", content: "Coragem antes de café: de onde vem a Moravia." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Historia,
});

const leftovers = [
  { title: "O azul da porcelana", desc: "A cor que virou marca e continua em tudo que a gente faz." },
  { title: "O ofício", desc: "Fazer devagar, em pequeno, com nome e sobrenome de quem produziu." },
  { title: "A mania de partir", desc: "Procurar origem nova em vez de repetir a lista de sempre." },
];

function Historia() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Raiz"
        title="Coragem antes de café."
        subtitle="A família Trachta veio da Morávia para recomeçar no Brasil. Ficou o gosto por partir e a mania de fazer bem feito."
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
              Jan Antonin Bata tinha feito a mesma travessia em escala industrial e virou referência de uma
              geração que parte sem garantia nenhuma.
            </p>
            <p>
              Essa história não fica na vitrine. Ela aparece de outro jeito: na insistência de provar lote por
              lote, na teima de encontrar um produtor novo, na vontade de levar café bom para lugares que não
              foram feitos para ele.
            </p>
            <p>
              O azul que vem da <em>porcelana da Morávia</em> continua no logo. O resto é estrada.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 py-2 font-display text-2xl text-foreground italic">
              “Quem atravessou um oceano não tem medo de uma boa xícara.”
            </blockquote>

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
