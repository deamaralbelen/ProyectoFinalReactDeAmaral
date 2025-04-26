import React, { createContext, useState, useEffect } from 'react';
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
      const updatedCart = cart.map(item =>
        item.id === productWithQuantity.id
          ? { ...item, quantity: item.quantity + productWithQuantity.quantity }
          : item
      );
      setCart(updatedCart);
      console.log('Carrito actualizado después de sumar cantidad:', updatedCart);
    } else {
      const updatedCart = [...cart, productWithQuantity];
      setCart(updatedCart);
      console.log('Carrito actualizado después de agregar nuevo producto:', updatedCart);
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

export default CartContext;