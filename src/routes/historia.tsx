import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import nosImg from "@/assets/nos.png.asset.json";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Quem somos — Moravia Coffee" },
      {
        name: "description",
        content:
           "Conheça Jan e Tomas, os irmãos por trás da Moravia Coffee, e a história que conecta a Morávia a Batayporã.",
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
                src={nosImg.url}
                alt="Jan e Tomas de costas, sentados diante da água ao pôr do sol, com a cidade ao fundo"
                className="rounded-md shadow-deep w-full"
                loading="lazy"
                width={1217}
                height={1654}
              />
            </div>
          </div>

          <article className="lg:col-span-3 space-y-8 text-lg text-foreground/85 leading-relaxed">
            <p>
              A Moravia é a marca de dois irmãos, Jan e Tomas. Começou como um jeito de compartilhar o que a gente
              gosta.
            </p>
            <p>
              Em toda viagem, o moedor vai na mala. Quando não cabe, vai o drip. Em lugar novo, o café é uma das
              primeiras coisas que a gente procura. E quase sempre é por ele que a conversa começa.
            </p>
            <p>
              Os cafés escolhidos para a Moravia são os que a gente escolhe para levar junto. Cafés que gostamos de
              preparar, dividir e descobrir. Agora, queremos compartilhar isso com mais gente.
            </p>
            <p>
              O nome vem da Morávia, região da atual República Tcheca de onde veio nosso bisavô, Jindřich Trachta. Ele
              atravessou o Atlântico e recomeçou a vida no Brasil. Sua trajetória faz parte da história que nos trouxe
              até aqui.
            </p>
            <p>
              Essa história faz parte da Moravia. Mas a marca também é sobre o que fazemos hoje: escolher cafés,
              conhecer novos lugares e compartilhar as coisas que gostamos.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
