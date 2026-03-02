import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../../contexts/CartContext';
import { getProductById } from '../../firebase';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);

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
    if (item) {
      addToCart(item, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Cargando producto...</div>;
  }

  return <ItemDetail item={item} onAddToCart={handleAddToCart} isAdded={added} />;
};

export default ItemDetailContainer;
