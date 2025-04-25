import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2> Tu carrito está vacío </h2>
        <Link to="/"> Volver a la tienda </Link>
      </div>
    );
  }

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <h2> Tu carrito de compras </h2>
      <div>
        {cart.map((product) => (
          <div key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
            <h3>{product.name}</h3>
            <p> Precio: ${product.price} </p>
            <p> Cantidad: {product.quantity} </p>
            <p> Total: ${product.price * product.quantity} </p>
            <button onClick={() => removeFromCart(product.id)}> Eliminar </button>
          </div>
        ))}
      </div>
      <div>
        <h3> Total de la compra: ${total} </h3>
        <Link to="/"> Volver a la tienda </Link>
      </div>
    </div>
  );
};

export default Cart;