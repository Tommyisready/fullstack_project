"use client";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  // Appelle useShoppingCart directement dans le composant
  const { redirectToCheckout } = useShoppingCart();

  // handleCheckout devrait venir après l'appel du hook
  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log("Checkout error:", res);
      }
    } catch (error) {
      console.log("Error during checkout:", error);
    }
  };

  return (
    <button className="btn btn-primary w-full" onClick={handleCheckout}>
      Proceed to checkout
    </button>
  );
};

export default CheckoutBtn;
