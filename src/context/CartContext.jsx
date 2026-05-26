import { useState } from "react";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!product?.id) return;

    setCart((currentCart) => {
      const exists = currentCart.find((item) => item.id === product.id);

      if (exists) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
};
