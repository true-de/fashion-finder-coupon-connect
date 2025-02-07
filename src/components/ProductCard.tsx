import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, ShoppingCart, Clipboard } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  store: string;
  couponCode?: string;
}

const ProductCard = ({ name, price, image, store, couponCode }: ProductCardProps) => {
  const handleCopyCode = () => {
    if (couponCode) {
      navigator.clipboard.writeText(couponCode);
      toast.success("Coupon code copied to clipboard!");
    }
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <span className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-sm font-semibold shadow">
          {store}
        </span>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          {couponCode && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleCopyCode}
            >
              <Clipboard className="h-4 w-4" />
              Copy Code
            </Button>
          )}
        </div>
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;