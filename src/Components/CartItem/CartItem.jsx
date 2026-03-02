import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ product }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    // Validar que no supere el stock disponible
    if (newQuantity > 0 && newQuantity <= product.stock) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const subtotal = product.price * product.quantity;

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="item-details">
        <Link to={`/item/${product.id}`} className="item-name">
          {product.name}
        </Link>
        <p className="item-category">{product.category}</p>
        <p className="item-price">${product.price.toFixed(2)}</p>
      </div>

      <div className="item-quantity">
        <button 
          className="qty-btn"
          onClick={() => handleQuantityChange(product.quantity - 1)}
        >
          −
        </button>
        <input 
          type="number" 
          value={product.quantity} 
          readOnly 
          className="qty-input"
        />
        <button 
          className="qty-btn"
          onClick={() => handleQuantityChange(product.quantity + 1)}
          disabled={product.quantity >= product.stock}
          title={product.quantity >= product.stock ? `Stock máximo: ${product.stock}` : ''}
        >
          +
        </button>
        <span className="qty-stock">Stock: {product.stock}</span>
      </div>

      <div className="item-subtotal">
        <p className="subtotal-label">Subtotal:</p>
        <p className="subtotal-price">${subtotal.toFixed(2)}</p>
      </div>

      <button 
        className="remove-btn"
        onClick={handleRemove}
        title="Eliminar del carrito"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
