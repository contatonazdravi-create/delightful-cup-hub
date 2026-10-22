import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ShopifyProduct } from "@/lib/shopify";
import { formatPrice } from "@/lib/shopify";
import { AddToCartButton } from "@/components/AddToCartButton";

export function VariantPicker({
  product,
  selectedId,
  onSelect,
}: {
  product: ShopifyProduct;
  selectedId?: string;
  onSelect: (id: string) => void;
}) {
  const variants = product.node.variants.edges.map((e) => e.node);
  if (variants.length <= 1) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((v) => (
        <button
          key={v.id}
          onClick={() => onSelect(v.id)}
          className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
            v.id === selectedId ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary"
          }`}
        >
          {v.title}
        </button>
      ))}
    </div>
  );
}

export function ShopifyProductCard({ product }: { product: ShopifyProduct }) {
  const variants = product.node.variants.edges.map((e) => e.node);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  const variant = variants.find((v) => v.id === selectedId);
  const img = product.node.images.edges[0]?.node;

  return (
    <article className="stamp-edge p-2 bg-card border border-border flex flex-col">
      <Link to="/product/$handle" params={{ handle: product.node.handle }} className="block aspect-[4/3] bg-secondary overflow-hidden">
        {img && <img src={img.url} alt={img.altText ?? product.node.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />}
      </Link>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <Link to="/product/$handle" params={{ handle: product.node.handle }}>
            <h3 className="text-2xl hover:text-primary transition-colors">{product.node.title}</h3>
          </Link>
          <p className="mt-1 font-mono text-primary">
            {formatPrice(variant?.price.amount ?? product.node.priceRange.minVariantPrice.amount, variant?.price.currencyCode ?? product.node.priceRange.minVariantPrice.currencyCode)}
          </p>
        </div>
        {product.node.description && <p className="text-sm text-muted-foreground line-clamp-3">{product.node.description}</p>}
        <VariantPicker product={product} selectedId={selectedId} onSelect={setSelectedId} />
        <div className="mt-auto">
          <AddToCartButton product={product} variant={variant} />
        </div>
      </div>
    </article>
  );
}
