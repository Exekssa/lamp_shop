import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (product) => {
    let updated = false;

    const updatedCartItems = cartItems.map((item) => {
      if (item.name === product.name) {
        item.amount++;
        updated = true;
      }
      return item;
    });

    if (!updated) {
      product.amount = 1;
      updatedCartItems.push(product);
    }
    
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== product.name);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decreaseFromCart = (product) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.name === product.name && item.amount > 0) {
        item.amount--;
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};