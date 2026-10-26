import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useEffect, useState } from "react";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { ShopifyProductCard } from "@/components/ShopifyProductCard";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Moravia Coffee" },
      { name: "description", content: "Produtos Moravia Coffee além do café: itens para a trilha, a estrada e a casa." },
      { property: "og:title", content: "Produtos — Moravia Coffee" },
      { property: "og:description", content: "Itens Moravia para a trilha, a estrada e a casa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  const [products, setProducts] = useState<ShopifyProduct[] | null>(null);
  useEffect(() => {
    fetchProducts(20).then(setProducts).catch(() => setProducts([]));
  }, []);
  return (
    <PageShell>
      <PageHero
        eyebrow="Loja"
        title="Produtos Moravia."
        subtitle="Além do café: itens para a trilha, a estrada e a casa. A seleção chega em breve."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {products === null ? (
            <p className="font-mono text-sm text-muted-foreground">Carregando loja…</p>
          ) : products.length === 0 ? (
            <p className="font-mono text-sm text-muted-foreground">Nenhum produto por aqui ainda — em breve você compra direto pelo site.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => <ShopifyProductCard key={p.node.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
