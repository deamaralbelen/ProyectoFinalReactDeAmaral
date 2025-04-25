import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} width="500px" />
          <h3>{product.name}</h3>
          <p> Precio: $ {product.price} </p>
          <Link to={`/producto/${product.id}`}> Ver detalle </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;