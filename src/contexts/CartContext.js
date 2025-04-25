import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from '../utils/localStorage'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => loadCartFromLocalStorage()); 

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (productWithQuantity) => {
    const existingProduct = cart.find(item => item.id === productWithQuantity.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === productWithQuantity.id
          ? { ...item, quantity: item.quantity + productWithQuantity.quantity }
          : item
      ));
    } else {
      setCart([...cart, productWithQuantity]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;