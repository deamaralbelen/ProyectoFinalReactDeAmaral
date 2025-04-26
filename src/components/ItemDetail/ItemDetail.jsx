import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../../contexts/useCart';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../../styles/ItemDetail.css';
import '../../styles/AddedToCart.css'; 

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false); 

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAdd = (quantity) => {
    console.log('Producto antes de agregar cantidad:', product);
    const productWithQuantity = { ...product, quantity };
    console.log('Producto agregado al carrito:', productWithQuantity);
    addToCart(productWithQuantity);

    toast.success(`Agregaste ${quantity} unidades de ${product.nombre} al carrito!`, {
      position: "top-center",
      autoClose: 2500, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);

    console.log(`Agregaste ${quantity} unidades de ${product.nombre}`);
  };

  return (
    <div className="item-detail-container">
      <h2>Detalle del producto</h2>
      <h3>{product.nombre}</h3>
      <p><strong>Precio:</strong> $ {product.precio}</p>
      <p><strong>Descripción:</strong> {product.descripcion}</p>
      <p><strong>Stock disponible:</strong> {product.stock}</p>

      {product.stock > 0 ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p className="no-stock">Este producto no tiene stock disponible</p>
      )}

      {addedToCart && (
        <div className="added-to-cart">
          <strong>¡Producto agregado!</strong> a tu carrito.
        </div>
      )}

      <br />
      <Link to="/">Volver al catálogo</Link>
    </div>
  );
};

export default ItemDetail;