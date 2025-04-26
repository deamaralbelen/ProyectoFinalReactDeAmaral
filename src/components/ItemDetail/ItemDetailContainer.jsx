import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from "../../firebase/firebaseConfig"; 
import ItemDetail from './ItemDetail'; 
import '../../styles/ItemDetail.css';

const ItemDetailContainer = () => {
  const { productoId } = useParams();

  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const obtenerProducto = async () => {
      setLoading(true); 
      try {
        const docRef = doc(db, 'productos', productoId);
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() }); 
        } else {
          console.log('No existe este producto');
          setProduct(null); // importante: setea null explícitamente
        }
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setLoading(false);
      }
    };

    obtenerProducto(); 
  }, [productoId]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>😢 Producto no encontrado</h2>
        <p>El producto que estás buscando no existe o fue eliminado.</p>
        <button 
          style={{ 
            backgroundColor: '#A9C9D8', 
            color: '#000', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginTop: '1rem' 
          }}
          onClick={() => window.location.href = '/'}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <ItemDetail product={product} /> 
  );
};

export default ItemDetailContainer;