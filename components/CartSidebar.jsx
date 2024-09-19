"use client";
import CartItem from "./CartItem";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "./ui/scroll-area";

const CartSidebar = () => {
  const { cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">My Shopping Cart({cartCount})</SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
