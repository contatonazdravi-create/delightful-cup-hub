import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { fetchProductByHandle, formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { AddToCartButton } from "@/components/AddToCartButton";
import { VariantPicker } from "@/components/ShopifyProductCard";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => {
    const coffeeName = params.handle.replace(/-/g, " ");
    const title = `${coffeeName} — Moravia Coffee`;
    const description = `Conheça ${coffeeName}: detalhes do café, formatos disponíveis e compra na Moravia Coffee.`;
    return ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    });
  },
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const [product, setProduct] = useState<ShopifyProduct | null | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<string>();
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    fetchProductByHandle(handle)
      .then((p) => {
        setProduct(p);
        setSelectedId(p?.node.variants.edges[0]?.node.id);
      })
      .catch(() => setProduct(null));
  }, [handle]);

  const variant = product?.node.variants.edges.map((e) => e.node).find((v) => v.id === selectedId);
  const images = product?.node.images.edges.map((e) => e.node) ?? [];

  return (
    <PageShell>
      <section className="py-16 max-w-6xl mx-auto px-6 lg:px-10">
        <Link to="/cafes" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft size={14} /> Voltar aos cafés
        </Link>
        {product === undefined ? (
          <div className="py-32 flex justify-center"><Loader2 className="animate-spin text-muted-foreground" /></div>
        ) : product === null ? (
          <p className="py-32 text-center text-muted-foreground">Café não encontrado.</p>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div>
              <div className="stamp-edge p-2 bg-card border border-border">
                <div className="aspect-square bg-secondary overflow-hidden">
                  {images[imgIdx] && <img src={images[imgIdx].url} alt={images[imgIdx].altText ?? product.node.title} className="w-full h-full object-cover" />}
                </div>
              </div>
              {images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {images.map((im, i) => (
                    <button key={im.url} onClick={() => setImgIdx(i)} className={`w-16 h-16 overflow-hidden border ${i === imgIdx ? "border-primary" : "border-border"}`}>
                      <img src={im.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Lote Moravia</p>
              <h1 className="text-4xl md:text-5xl">{product.node.title}</h1>
              <p className="text-2xl font-mono">
                {formatPrice(variant?.price.amount ?? product.node.priceRange.minVariantPrice.amount, variant?.price.currencyCode ?? product.node.priceRange.minVariantPrice.currencyCode)}
              </p>
              <VariantPicker product={product} selectedId={selectedId} onSelect={setSelectedId} />
              <AddToCartButton product={product} variant={variant} />
              {product.node.description && <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.node.description}</p>}
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}
