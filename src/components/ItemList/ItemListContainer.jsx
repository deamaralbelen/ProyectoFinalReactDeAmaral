import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'; 
import { getProducts } from '../utils/api';

const ItemListContainer = ({ mensaje }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = categoriaId
    ? productos.filter(product => product.category.toLowerCase() === categoriaId.toLowerCase())
    : productos;

  if (loading) {
    return <p> Cargando productos... </p>;
  }

  return (
    <div>
      <h2>{mensaje}</h2>
      {categoriaId ? (
        <p> Filtrando productos por categoría: {categoriaId} </p>
      ) : (
        <p> Mostrando todos los productos </p>
      )}
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;