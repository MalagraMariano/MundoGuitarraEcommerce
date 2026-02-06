import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item, onAddToCart }) => {
  if (!item) {
    return <div className="item-detail-container">Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / {item.name}
      </div>
      <div className="item-detail">
        <div className="detail-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="detail-content">
          <h1>{item.name}</h1>
          <p className="detail-category">{item.category}</p>
          <p className="detail-description">{item.description}</p>
          
          <div className="detail-specs">
            <div className="spec">
              <span className="spec-label">Precio:</span>
              <span className="spec-value price">${item.price}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Stock Disponible:</span>
              <span className={`spec-value ${item.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {item.stock > 0 ? `${item.stock} unidades` : 'Sin stock'}
              </span>
            </div>
          </div>

          <ItemCount stock={item.stock} onAddToCart={onAddToCart} />

          <Link to="/" className="back-link">← Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
