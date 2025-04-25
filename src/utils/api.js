import sambaPink from '../assets/sambaPink.jpg';
import campusBrown from '../assets/campusBrown.jpg';
import campusBlack from '../assets/campusBlack.jpg';
import nikeGrey from '../assets/nikeGrey.jpg';
import vansKnu from '../assets/vansKnu.jpg';

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Adidas Samba Pink', price: 1650, category: 'Adidas', image: sambaPink },
        { id: 2, name: 'Adidas Campus Brown', price: 1300, category: 'Adidas', image: campusBrown },
        { id: 3, name: 'Adidas Campus Black', price: 1300, category: 'Adidas', image: campusBlack },
        { id: 4, name: 'Nike Dunk SB Grey', price: 1450, category: 'Nike', image: nikeGrey },
        { id: 5, name: 'Vans KNU Skull Negro', price: 1600, category: 'Vans', image: vansKnu },
      ];
      resolve(products);
    }, 2000);
  });
};