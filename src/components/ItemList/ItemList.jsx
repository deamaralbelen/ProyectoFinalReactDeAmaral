import React from 'react';
import Item from './Item';
import '../../styles/ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Item 
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          precio={product.precio}
          stock={product.stock}
          descripcion={product.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemList;