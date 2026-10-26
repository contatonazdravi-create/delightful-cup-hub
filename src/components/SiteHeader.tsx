import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import logoAsset from "@/assets/moravia-logo-bandeira.png.asset.json";
const logo = logoAsset.url;

const links = [
  { to: "/", label: "Início" },
  { to: "/historia", label: "Quem somos" },
  { to: "/cafes", label: "Cafés" },
] as const;

const linksAfter = [
  { to: "/workshops", label: "Workshops" },
  { to: "/atacado", label: "Atacado" },
  { to: "/contato", label: "Contato" },
] as const;

const lojaLinks = [
  { to: "/cafes", label: "Cafés" },
  { to: "/produtos", label: "Produtos" },
] as const;

const linkClass = "text-sm tracking-wide text-foreground/75 hover:text-primary transition-colors";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lojaOpen, setLojaOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Moravia Coffee" className="h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg text-foreground">Moravia</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Coffee</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setLojaOpen(true)}
            onMouseLeave={() => setLojaOpen(false)}
          >
            <button
              type="button"
              className={`${linkClass} inline-flex items-center gap-1`}
              onClick={() => setLojaOpen((v) => !v)}
              aria-expanded={lojaOpen}
              aria-haspopup="true"
            >
              Loja <ChevronDown size={14} className={`transition-transform ${lojaOpen ? "rotate-180" : ""}`} />
            </button>
            {lojaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="min-w-40 rounded-md border border-border bg-background shadow-soft py-2">
                  {lojaLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-5 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-secondary/50 transition-colors"
                      onClick={() => setLojaOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {linksAfter.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <CartDrawer />
        </nav>

        <div className="lg:hidden flex items-center gap-1">
        <CartDrawer />
        <button
          className="p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            <div className="border-t border-border/60 pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Loja</p>
              <div className="flex flex-col gap-4 pl-4">
                {lojaLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground/80"
                    activeProps={{ className: "text-primary font-medium" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {linksAfter.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
