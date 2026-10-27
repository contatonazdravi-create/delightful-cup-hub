import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Compass, Flame, GraduationCap, MapPin, Package } from "lucide-react";
import heroImg from "@/assets/hero.webp.asset.json";
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
    title: "Em grãos ou moído.",
    desc: "A gente prefere moer na hora, mas nem todo dia dá. Por isso, você encontra o mesmo lote em grãos ou moído.",
  },
  {
    img: roadKit,
    icon: MapPin,
    title: "Drip coffee.",
    desc: "Para a mala que já está cheia. Não precisa de moedor nem de coador, só de água quente e uma caneca.",
  },
  {
    img: campCoffee,
    icon: Flame,
    title: "Lotes.",
    desc: "A seleção muda de tempos em tempos. Cada lote tem um rótulo em formato de selo postal, com uma foto que a gente tirou.",
  },
];

const pillars = [
  {
    icon: Coffee,
    title: "Cafés",
    desc: "Os lotes da seleção atual, em grãos, moído ou drip.",
    to: "/cafes" as const,
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    desc: "Café provado junto rende mais conversa. Encontros para provar, comparar e preparar.",
    to: "/workshops" as const,
  },
  {
    icon: Package,
    title: "Atacado",
    desc: "Para quem serve café a outras pessoas. Com a nossa marca ou com a sua.",
    to: "/atacado" as const,
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="home-hero relative overflow-hidden bg-secondary">
        <img
          src={heroImg.url}
          alt="Embalagem Moravia Coffee na boca de uma caverna, com cachoeira e mata ao fundo"
          className="home-hero-image"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="home-hero-copy text-foreground">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.06]">
              Doce e<br />frutado
            </h1>
            <p className="mt-5 font-mono text-sm lg:text-base leading-relaxed max-w-72 text-foreground/80">
              Notas frutadas, caramelo e limão siciliano.
            </p>
            <div className="mt-7 lg:mt-9">
              <Button asChild size="lg" className="h-12 rounded-none px-5 group">
              <Link
                to="/cafes"
              >
                Conheça nossos cafés
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              </Button>
            </div>
        </div>
      </section>

      {/* CURADORIA */}
      <section className="py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Curadoria</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
            O que nos faz escolher um café.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Primeiro, a xícara. Depois, de onde vem: quem produziu, a região, o processo.
            Nossa seleção reúne cafés com perfis diferentes, para você encontrar o que gosta e experimentar outros.
          </p>
        </div>
      </section>

      {/* MODO TRAMPÓVÉ */}
      <section className="py-28 topo border-y border-border/60 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
                Café que vai junto.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Nem sempre dá para levar tudo na mala. Por isso, além dos cafés em grãos e moídos, também temos o drip: para preparar um café onde você estiver.
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
                    alt={m.title}
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
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-5">Quem somos</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            Somos Jan e Tomas.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Dois irmãos que levam café para todo lugar e acham que ele fica melhor com companhia.
            A gente seleciona os cafés e escreve o que você lê aqui.
          </p>
          <Link
            to="/historia"
            className="mt-10 inline-flex items-center gap-2 text-primary border-b border-primary/40 pb-1 hover:border-primary"
          >
            Conheça nossa história <ArrowRight size={16} />
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
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/80 mb-3">Encontros</p>
              <h3 className="font-display text-3xl">Workshops de café especial</h3>
              <p className="mt-2 text-cream/85">Da primeira prova aos ajustes de preparo.</p>
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
          <h2 className="font-display text-4xl md:text-5xl text-balance">Qual café vai com você?</h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">
            Conta como você costuma preparar. A gente conversa sobre os lotes e ajuda a escolher.
            Para workshops e pedidos de atacado, pode chamar por aqui também.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Fale com a gente
            </Link>
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
