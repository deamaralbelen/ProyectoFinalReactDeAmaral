import React, { useState } from 'react'; 
import { useCart } from '../../contexts/useCart';
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../../styles/Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    nombre: '',
    email: '',
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.nombre || !buyer.email) {
      alert('Por favor complete todos los campos');
      return;
    }

    setLoading(true);

    try {
      const order = {
        buyer,
        items: cart.map((product) => ({
          id: product.id,
          nombre: product.nombre,  
          precio: product.precio,  
          quantity: product.quantity,
        })),
        total: cart.reduce((acc, product) => acc + product.precio * product.quantity, 0),
        date: new Date(),
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);

      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Creando tu orden...</p>;
  }

  if (orderId) {
    return (
      <div className="order-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Formulario de Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={buyer.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;