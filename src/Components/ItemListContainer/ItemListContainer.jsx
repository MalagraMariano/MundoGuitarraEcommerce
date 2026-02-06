import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/products';

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
      getProducts()
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
    return <div style={{ textAlign: 'center', padding: '40px' }}>Cargando productos...</div>;
  }

  if (items.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>No hay productos en esta categoría</div>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
