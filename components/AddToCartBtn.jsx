import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCartBtn = ({ btnStyles, text, icon, id, description, name, currency, images, price }) => {
  const { addItem } = useShoppingCart();

  const bike = ({ id: id, currency: currency, name: name, description: description, images: images, price: price } = useShoppingCart());

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bike);
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
