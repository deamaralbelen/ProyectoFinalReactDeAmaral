import React from 'react';
import { useCart } from '../../contexts/useCart';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="back-to-store-link">Volver a la tienda</Link>
      </div>
    );
  }

  const total = cart.reduce((acc, product) => acc + product.precio * product.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Tu carrito de compras</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div>
              <p className="item-name">{product.nombre}</p>
              <p>Precio: ${product.precio}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Total: ${product.precio * product.quantity}</p>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total de la compra: ${total}</h3>
      </div>

      <div className="cart-buttons">
        <button className="clear-cart-btn" onClick={clearCart}>Vaciar carrito</button>
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>Finalizar compra</button>
        <Link to="/" className="back-to-store-link">Volver a la tienda</Link>
      </div>
    </div>
  );
};

export default Cart;