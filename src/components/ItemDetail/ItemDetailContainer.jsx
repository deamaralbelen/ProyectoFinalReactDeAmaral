import React, { useState, useEffect, useMemo } from 'react'; 
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; 

import sambaPink from '../assets/sambaPink.jpg';
import campusBrown from '../assets/campusBrown.jpg';
import campusBlack from '../assets/campusBlack.jpg';
import nikeGrey from '../assets/nikeGrey.jpg';
import vansKnu from '../assets/vansKnu.jpg';

const ItemDetailContainer = () => {
  const { productoId } = useParams(); 

  const allProducts = useMemo(() => [
    { id: 1, name: 'Adidas Samba Pink', price: 1650, image: sambaPink, description: 'Zapatillas Adidas Samba en color rosado.' },
    { id: 2, name: 'Adidas Campus Brown', price: 1300, image: campusBrown, description: 'Zapatillas Adidas Campus en color marrón.' },
    { id: 3, name: 'Adidas Campus Black', price: 1300, image: campusBlack, description: 'Zapatillas Adidas Campus en color negro.' },
    { id: 4, name: 'Nike Dunk SB Grey', price: 1450, image: nikeGrey, description: 'Zapatillas Nike Dunk SB en color gris.' },
    { id: 5, name: 'Vans KNU Skull Negro', price: 1600, image: vansKnu, description: 'Zapatillas Vans KNU Skull en color negro.' },
  ], []); 

  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const selectedProduct = allProducts.find(p => p.id === parseInt(productoId)); 
      setProduct(selectedProduct); 
      setLoading(false); 
    }, 2000); 
  }, [productoId, allProducts]); 

  if (loading) {
    return <p> Cargando detalles del producto... </p>;
  }

  return (
    <ItemDetail product={product} />
  );
};

export default ItemDetailContainer;