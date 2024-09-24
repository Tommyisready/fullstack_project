import { useToast } from "@/components/ui/use-toast";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCartBtn = ({ btnStyles, text, icon, id, description, name, currency, images, price }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  // Crée l'objet bike directement avec les props passées
  const bike = {
    id: id, // ID du produit
    currency: currency, // Devise
    name: name, // Nom du produit
    description: description, // Description du produit
    images: images, // Images (si disponibles)
    price: price, // Prix (en centimes)
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bike); // Ajoute le produit au panier
        toast({
          title: `${name} has been added to the cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
