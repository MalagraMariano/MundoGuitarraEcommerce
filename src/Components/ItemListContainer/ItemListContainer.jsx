import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProductsFromFirestore, getProductsByCategory } from '../../firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then(data => {
          setItems(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    } else {
      getProductsFromFirestore()
        .then(data => {
          setItems(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div className="loader"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>No hay productos en esta categoría</div>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
