import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../../contexts/CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart(); 

  if (!product) {
    return <p> Producto no encontrado </p>;
  }

  const handleAdd = (quantity) => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    console.log(`Agregaste ${quantity} unidades de ${product.name}`);
  };

  return (
    <div>
      <h2> Detalle del producto </h2>
      <img src={product.image} alt={product.name} width="300px" />
      <h3>{product.name}</h3>
      <p> Precio: $ {product.price} </p>
      <p> Descripción: {product.description} </p>

      <ItemCount stock={10} initial={1} onAdd={handleAdd} />

      <br />
      <Link to="/catalogo"> Volver al catálogo </Link>
    </div>
  );
};

export default ItemDetail;