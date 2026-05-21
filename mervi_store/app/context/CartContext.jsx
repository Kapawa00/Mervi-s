"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (product, qty) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.slug === product.slug);

      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, { ...product, qty }];
    });

    triggerPopup();
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    triggerPopup();
  };

  const removeFromCart = (slug) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
  };

  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        removeFromCart,
        totalItems,
        totalPrice,
        showPopup
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);