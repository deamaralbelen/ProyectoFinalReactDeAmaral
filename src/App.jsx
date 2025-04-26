import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Acá están nuestros productos" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer mensaje="Productos filtrados por categoría" />} />
        <Route path="/item/:productoId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contacto" element={<h2>Contacto</h2>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;