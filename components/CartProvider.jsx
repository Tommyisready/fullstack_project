"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider mode="payment" cartMode="client-only" stripe="" successUrl="succes" cancelUrl="error" language="en" currency="Euro" billingAddressCollection={true} shouldPersist={true}>
      {children}
    </CProvider>
  );
};

export default CartProvider;