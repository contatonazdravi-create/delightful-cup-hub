import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoAsset from "@/assets/moravia-logo-bandeira.png.asset.json";
const logo = logoAsset.url;

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-coffee-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Moravia Coffee" className="h-16 w-auto mb-6" />
          <p className="text-cream/70 max-w-sm leading-relaxed">
            Café especial, dentro e fora de casa. Uma seleção para a rotina e para o que você ainda vai explorar.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm uppercase tracking-[0.25em] text-cream/60 mb-5">Navegar</h4>
          <ul className="space-y-3 text-cream/85">
            <li><Link to="/historia" className="hover:text-primary transition-colors">Quem somos</Link></li>
            <li><Link to="/cafes" className="hover:text-primary transition-colors">Cafés</Link></li>
            <li><Link to="/workshops" className="hover:text-primary transition-colors">Workshops</Link></li>
            <li><Link to="/atacado" className="hover:text-primary transition-colors">Atacado</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-sm uppercase tracking-[0.25em] text-cream/60 mb-5">Contato</h4>
          <ul className="space-y-3 text-cream/85">
            <li className="flex items-center gap-3"><MessageCircle size={16} /> (67) 98432-3134</li>
            <li className="flex items-center gap-3"><Instagram size={16} /> @moraviacoffee</li>
            <li className="flex items-center gap-3"><Mail size={16} /> contato.nazdravi@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Moravia Coffee. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
