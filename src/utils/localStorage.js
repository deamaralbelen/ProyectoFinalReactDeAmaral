// src/utils/localStorage.js

export const saveCartToLocalStorage = (cart) => {


    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const loadCartFromLocalStorage = () => {


    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  };