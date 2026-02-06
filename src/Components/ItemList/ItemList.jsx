import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <div className="items-grid">
        {items.map((item) => (
          <Link 
            key={item.id} 
            to={`/item/${item.id}`} 
            className="item-card-link"
          >
            <div className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-description">{item.description}</p>
                <div className="item-footer">
                  <span className="item-price">${item.price}</span>
                  <span className="item-stock">Stock: {item.stock}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
