import { Loader2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";

type Variant = ShopifyProduct["node"]["variants"]["edges"][number]["node"];

export function AddToCartButton({ product, variant }: { product: ShopifyProduct; variant?: Variant }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const disabled = isLoading || !variant || !variant.availableForSale;

  const onClick = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Na mochila!", { description: `${product.node.title} · ${variant.title}`, position: "top-center" });
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center gap-2 text-sm px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-60"
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingBag size={16} />}
      {variant && !variant.availableForSale ? "Esgotado" : "Adicionar à sacola"}
    </button>
  );
}
