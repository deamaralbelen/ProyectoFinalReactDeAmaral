import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';  
import { db } from "../../firebase/firebaseConfig";
import ItemList from './ItemList'; 
import '../../styles/ItemList.css';

const ItemListContainer = ({ mensaje }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos')); 
        const productosData = querySnapshot.docs.map(doc => ({
          id: doc.id,  
          ...doc.data() 
        }));
        setProductos(productosData);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setLoading(false);
      }
    };
    obtenerProductos();
  }, []);

  const filteredProducts = categoriaId
  ? productos.filter(product => product.categoria && product.categoria.toLowerCase() === categoriaId.toLowerCase())
  : productos;

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>{mensaje}</h2>
      {categoriaId ? (
        <p>Filtrando productos por categoría: {categoriaId}</p>
      ) : (
        <p>Mostrando todos los productos</p>
      )}
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;