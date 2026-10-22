import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, Coffee, Compass, Flame, GraduationCap, MapPin, Package } from "lucide-react";
import heroTrampove from "@/assets/hero-trampove.jpg";
import trailMug from "@/assets/trail-mug.jpg";
import roadKit from "@/assets/road-kit.jpg";
import campCoffee from "@/assets/camp-coffee.jpg";
import workshop from "@/assets/workshop.jpg";
import wholesale from "@/assets/wholesale.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moravia Coffee — Café especial para quem vai além do mapa" },
      {
        name: "description",
        content:
          "Cafés especiais selecionados um a um e torrados para a trilha, a estrada e o acampamento. Disponíveis em 250g, 100g e Drip Coffee.",
      },
      { property: "og:title", content: "Moravia Coffee" },
      { property: "og:description", content: "Onde o mapa acaba, o café continua." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const modes = [
  {
    img: trailMug,
    icon: Compass,
    title: "Na trilha",
    desc: "Drip Coffee e 100g: saquinho, água quente e xícara. Nada para moer, nada para lavar.",
  },
  {
    img: roadKit,
    icon: MapPin,
    title: "Na estrada",
    desc: "250g para moer na primeira parada. Moedor manual, prensa francesa e a paisagem fazendo o resto.",
  },
  {
    img: campCoffee,
    icon: Flame,
    title: "No acampamento",
    desc: "Fogareiro aceso e café coado no escuro. A pausa que faz a viagem valer a pena.",
  },
];

const pillars = [
  {
    icon: Coffee,
    title: "Cafés",
    desc: "Dois lotes no ar, de produtores parceiros. Cada um com origem, processo e caráter próprios.",
    to: "/cafes" as const,
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    desc: "Métodos, sensorial e cultura do café — para quem curte e para quem trabalha com isso.",
    to: "/workshops" as const,
  },
  {
    icon: Package,
    title: "Atacado",
    desc: "Café e embalagem com a sua marca, para cafeterias, empresas e eventos.",
    to: "/atacado" as const,
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroTrampove}
          alt="Mapa antigo com a rota entre a Morávia e o Brasil e uma xícara de porcelana sobre o trajeto"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 w-full">
          <div className="max-w-3xl text-cream text-shadow-hero">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/90 mb-6">
              Exploração & café especial
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.02] text-balance">
              Onde o mapa acaba, <em className="text-ember not-italic">o café continua</em>.
            </h1>
            <p className="mt-8 text-lg text-cream/90 max-w-xl leading-relaxed">
              Lotes escolhidos um a um e torrados para aguentar trilha, estrada e acampamento. Tudo isso existe
              porque um dia alguém teve coragem de partir.
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/60 bg-cream/5 text-cream hover:bg-cream/15 transition-all"
              >
                Nossa raiz
              </Link>
            </div>
            <p className="mt-12 font-mono text-[11px] tracking-[0.28em] text-cream/70">
              SELEÇÃO 2026 · 2 LOTES · 3 FORMATOS
            </p>
          </div>
        </div>
      </section>

      {/* CURADORIA */}
      <section className="py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Curadoria</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
            Grãos selecionados, não produzidos em série.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Curadoria é ir além do comum. Cada lote é escolhido a dedo para levar até você o melhor do café
            especial.
          </p>
        </div>
      </section>

      {/* MODO TRAMPÓVÉ */}
      <section className="py-28 topo border-y border-border/60 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Modo trampové</p>
              <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
                Café que vai junto.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Pensamos no formato conforme o lugar onde você vai estar. Água quente, um ponto para sentar e o
              resto é a viagem.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {modes.map((m) => (
              <article
                key={m.title}
                className="group rounded-md overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all flex flex-col"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Café ${m.title.toLowerCase()}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={1280}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <m.icon className="text-ember" size={24} />
                  <h3 className="font-display text-2xl mt-5">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
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

      {/* RAIZ — inspiração de plano de fundo */}
      <section className="py-28 topo bg-secondary/40 border-y border-border/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-5">Raiz</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            De onde vem a coragem.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Nosso bisavô, Jindrich Trachta, deixou a Morávia pelo Brasil. Jan Antonin Bata fez a mesma travessia
            em escala maior. Não é vitrine de sobrenome: é o que nos faz procurar o grão certo onde ninguém está
            olhando.
          </p>
          <Link
            to="/historia"
            className="mt-10 inline-flex items-center gap-2 text-primary border-b border-primary/40 pb-1 hover:border-primary"
          >
            Ler sobre nossa raiz <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* WORKSHOP + ATACADO */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <Link to="/workshops" className="group relative h-96 rounded-md overflow-hidden">
            <img
              src={workshop}
              alt="Workshop de café"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep via-coffee-deep/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10 text-cream">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/80 mb-3">Aprenda</p>
              <h3 className="font-display text-3xl">Workshops de café especial</h3>
              <p className="mt-2 text-cream/85">Para o público geral e para profissionais.</p>
            </div>
          </Link>
          <Link to="/atacado" className="group relative h-96 rounded-md overflow-hidden">
            <img
              src={wholesale}
              alt="Atacado e embalagens personalizadas"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep via-coffee-deep/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-10 text-cream">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/80 mb-3">B2B</p>
              <h3 className="font-display text-3xl">Atacado & embalagens personalizadas</h3>
              <p className="mt-2 text-cream/85">Cafeterias, empresas e eventos.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center bg-coffee-deep text-cream rounded-md p-16 md:p-20 shadow-deep">
          <h2 className="font-display text-4xl md:text-5xl text-balance">Vamos tomar um café?</h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">
            Chama no WhatsApp ou no Instagram para conhecer os lotes, agendar um workshop ou pedir orçamento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5567984323134"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/moraviacoffee"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-all"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
