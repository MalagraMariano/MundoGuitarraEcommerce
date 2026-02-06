import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onAddToCart }) => {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(count);
    setCount(1);
  };

  return (
    <div className="item-count">
      <div className="quantity-control">
        <button 
          className="qty-btn minus-btn" 
          onClick={handleMinus}
          disabled={count <= 1}
        >
          −
        </button>
        <input 
          type="number" 
          value={count} 
          readOnly 
          className="qty-input"
        />
        <button 
          className="qty-btn plus-btn" 
          onClick={handlePlus}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        {stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
      </button>
    </div>
  );
};

export default ItemCount;
