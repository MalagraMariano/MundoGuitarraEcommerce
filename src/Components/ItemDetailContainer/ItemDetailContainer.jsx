import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../data/products';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${item.name}`);
    alert(`Se agregaron ${quantity} unidades de ${item.name} al carrito`);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Cargando producto...</div>;
  }

  return <ItemDetail item={item} onAddToCart={handleAddToCart} />;
};

export default ItemDetailContainer;
