import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ItemList.css';

const Item = ({ id, nombre, precio, stock, descripcion }) => {
  return (
    <div className="product-card">
      <h3>{nombre}</h3>
      <p><strong>Precio:</strong> $ {precio}</p>
      <p><strong>Stock disponible:</strong> {stock}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;