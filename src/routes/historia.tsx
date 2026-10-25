import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import raizTable from "@/assets/raiz-table.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Quem somos — Moravia Coffee" },
      {
        name: "description",
        content:
           "Conheça Jan e Tomáš, os irmãos por trás da Moravia Coffee, e a história que conecta a Morávia a Batayporã.",
      },
      { property: "og:title", content: "Quem somos — Moravia Coffee" },
      { property: "og:description", content: "Dois irmãos, café na mala e uma história da Morávia ao Brasil." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Historia,
});

function Historia() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quem somos"
        title="De onde vem a Moravia."
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
            </div>
          </div>

          <article className="lg:col-span-3 space-y-8 text-lg text-foreground/85 leading-relaxed">
            <p>
              Moravia é a marca de dois irmãos, Jan e Tomáš. Começou como um jeito de dividir o que a gente gosta
            </p>
            <p>
              Em toda viagem, o moedor vai na mala. Quando não cabe, vai o drip. Em lugar novo, o café é a primeira coisa que a gente procura, e quase sempre é por ele que a conversa começa. Os lotes da Moravia são os que a gente levaria junto, e que você também pode levar.
            </p>
            <p>
              O nome vem da Morávia, região da atual República Tcheca de onde veio o nosso bisavô, Jindřich Trachta. Ele atravessou o Atlântico e recomeçou no Brasil, em uma história de coragem que também passa por Jan Antonín Baťa, outro morávio que fundou cidades brasileiras, incluindo Batayporã, onde fica nossa sede.
            </p>

            <p>
              Queremos manter viva a perseverança e paixão que os inspiraram, homenageando as raízes que nos conectam.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
