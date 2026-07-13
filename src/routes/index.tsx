import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, Coffee, GraduationCap, Package } from "lucide-react";
import logo from "@/assets/moravia-logo-light.png";
import beans from "@/assets/hero-beans.jpg";
import workshop from "@/assets/workshop.jpg";
import wholesale from "@/assets/wholesale.jpg";
import history from "@/assets/moravia-history.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moravia Coffee — Cafés especiais com alma tcheca" },
      { name: "description", content: "Cafés especiais selecionados grão a grão. Curadoria, workshops e atacado para cafeterias e empresas." },
      { property: "og:title", content: "Moravia Coffee" },
      { property: "og:description", content: "Cafés especiais com alma tcheca e raízes brasileiras." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={beans}
          alt="Grãos de café especial Moravia"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-7 text-cream">
            <p className="text-xs uppercase tracking-[0.45em] text-cream/70 mb-6">Curadoria de cafés especiais</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.02] text-balance">
              Uma ponte entre <em className="text-primary not-italic">terras tchecas</em> e o Brasil.
            </h1>
            <p className="mt-8 text-lg text-cream/80 max-w-xl leading-relaxed">
              Inspirados pela perseverança de nosso bisavô, selecionamos os melhores grãos para entregar uma experiência única em cada xícara.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/cafes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-deep group"
              >
                Conheça nossos cafés
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/historia"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-all"
              >
                Nossa história
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <img src={logo} alt="" className="w-72 opacity-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Manifesto</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
            Café não é só bebida — é <em className="text-primary not-italic">memória</em>, ofício e travessia.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada lote é escolhido com a mesma reverência que nossos bisavôs tinham pela terra.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Coffee, title: "Cafés", desc: "Lotes selecionados de produtores parceiros, torrefação na medida.", to: "/cafes" as const },
            { icon: GraduationCap, title: "Workshops", desc: "Para curiosos e profissionais — métodos, sensorial e cultura.", to: "/workshops" as const },
            { icon: Package, title: "Atacado", desc: "Cafés e embalagens personalizadas para cafeterias e empresas.", to: "/atacado" as const },
          ].map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group p-10 rounded-md bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all"
            >
              <p.icon className="text-primary" size={28} />
              <h3 className="font-display text-2xl mt-6">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* HISTORIA SPLIT */}
      <section className="py-28 bg-secondary/40 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={history} alt="Bisavôs imigrantes tchecos" className="rounded-md shadow-deep w-full" loading="lazy" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Nossa raiz</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Inspirados em Jan Antonin Bata e Jindřich Trachta.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nossa marca é uma ponte entre as terras tchecas e o Brasil — refletida nos cafés especiais que trazemos. Queremos manter viva a perseverança e paixão que inspiraram nosso bisavô.
            </p>
            <Link
              to="/historia"
              className="mt-8 inline-flex items-center gap-2 text-primary border-b border-primary/40 pb-1 hover:border-primary"
            >
              Ler a história completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WORKSHOP + WHOLESALE TEASER */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <Link to="/workshops" className="group relative h-96 rounded-md overflow-hidden">
            <img src={workshop} alt="Workshop de café" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep via-coffee-deep/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10 text-cream">
              <p className="text-xs uppercase tracking-[0.4em] text-cream/70 mb-3">Aprenda</p>
              <h3 className="font-display text-3xl">Workshops de café especial</h3>
              <p className="mt-2 text-cream/80">Para o público geral e para profissionais.</p>
            </div>
          </Link>
          <Link to="/atacado" className="group relative h-96 rounded-md overflow-hidden">
            <img src={wholesale} alt="Atacado e embalagens personalizadas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep via-coffee-deep/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10 text-cream">
              <p className="text-xs uppercase tracking-[0.4em] text-cream/70 mb-3">B2B</p>
              <h3 className="font-display text-3xl">Atacado & embalagens personalizadas</h3>
              <p className="mt-2 text-cream/80">Cafeterias, empresas e eventos.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center bg-coffee-deep text-cream rounded-md p-16 md:p-20 shadow-deep">
          <h2 className="font-display text-4xl md:text-5xl text-balance">Vamos tomar um café?</h2>
          <p className="mt-4 text-cream/75 max-w-xl mx-auto">Fale conosco no WhatsApp ou Instagram para conhecer nossos lotes, agendar um workshop ou pedir orçamento.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5567984323134" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">WhatsApp</a>
            <a href="https://instagram.com/moraviacoffee" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-all">Instagram</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
