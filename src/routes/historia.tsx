import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import history from "@/assets/moravia-history.png";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "História — Moravia Coffee" },
      { name: "description", content: "Da Morávia ao Brasil: a herança tcheca por trás da Moravia Coffee." },
      { property: "og:title", content: "História — Moravia Coffee" },
      { property: "og:description", content: "Inspirados em Jan Antonin Bata e Jindřich Trachta." },
    ],
  }),
  component: Historia,
});

function Historia() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nossa raiz"
        title="Uma ponte entre a Morávia e o Brasil."
        subtitle="Inspirados na rica herança dos imigrantes tchecos, notadamente Jan Antonin Bata e Jindřich Trachta — nosso bisavô."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <img src={history} alt="Imigrantes tchecos" className="rounded-md shadow-deep w-full sticky top-28" loading="lazy" />
          </div>
          <article className="lg:col-span-3 space-y-8 text-lg text-foreground/85 leading-relaxed">
            <p>
              Nossa marca é uma ponte entre as <strong>terras tchecas</strong> e o <strong>Brasil</strong>, refletida nos cafés especiais que trazemos. Cada lote é uma homenagem aos que atravessaram oceanos para construir um novo lar — sem nunca esquecer de onde vieram.
            </p>
            <p>
              Queremos manter viva a <em>perseverança e a paixão</em> que inspiraram nossos bisavôs, honrando as raízes que nos conectam. A delicadeza do azul porcelana da Morávia, o aroma da terra fértil, o ofício transmitido de geração em geração.
            </p>
            <p>
              Como curadores apaixonados, selecionamos os <strong>melhores grãos dos melhores produtores</strong>, proporcionando uma experiência única a cada xícara. Cada café conta uma travessia.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 py-2 font-display text-2xl text-foreground italic">
              “Levamos para a xícara o cuidado de quem entende o café como ofício e como memória.”
            </blockquote>

            <div className="pt-8 border-t border-border">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Curadoria</p>
              <p className="mt-2 font-display text-2xl text-primary">Tomas Trachta</p>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
