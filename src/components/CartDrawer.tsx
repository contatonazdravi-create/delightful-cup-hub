import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "BRL";

  useEffect(() => {
    if (open) syncCart();
  }, [open, syncCart]);

  const checkout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button aria-label="Abrir sacola" className="relative p-2 text-foreground hover:text-primary transition-colors">
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-clay text-cream text-[11px] font-mono flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>Sua sacola</SheetTitle>
          <SheetDescription className="font-mono text-xs">
            {totalItems === 0 ? "Sacola vazia" : `${totalItems} ${totalItems === 1 ? "item" : "itens"}`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mb-4" />
              <p>Nada na mochila ainda.</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
                {items.map((item) => {
                  const img = item.product.node.images?.edges?.[0]?.node;
                  return (
                    <div key={item.variantId} className="flex gap-4 p-2">
                      <div className="w-16 h-16 bg-secondary rounded-sm overflow-hidden shrink-0">
                        {img && <img src={img.url} alt={item.product.node.title} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{item.product.node.title}</h4>
                        <p className="text-xs font-mono text-muted-foreground">
                          {item.selectedOptions.map((o) => o.value).join(" · ")}
                        </p>
                        <p className="font-semibold">{formatPrice(item.price.amount, item.price.currencyCode)}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button aria-label="Remover" onClick={() => removeItem(item.variantId)} className="p-1 text-muted-foreground hover:text-destructive">
                          <Trash2 size={14} />
                        </button>
                        <div className="flex items-center gap-1 border border-border rounded-full">
                          <button aria-label="Diminuir" className="p-1.5" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-sm font-mono">{item.quantity}</span>
                          <button aria-label="Aumentar" className="p-1.5" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="shrink-0 space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm uppercase">Total</span>
                  <span className="text-xl font-bold">{formatPrice(total.toString(), currency)}</span>
                </div>
                <button
                  onClick={checkout}
                  disabled={isLoading || isSyncing}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                >
                  {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ExternalLink size={16} /> Finalizar compra</>}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
