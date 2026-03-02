import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Mi Carrito</h1>
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <Link to="/" className="continue-shopping-btn">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Resumen de compra</h2>
          <div className="summary-items">
            <p>Subtotal: <span>${getTotalPrice().toFixed(2)}</span></p>
            <p>Envío: <span>Gratis</span></p>
            <p className="total">Total: <span>${getTotalPrice().toFixed(2)}</span></p>
          </div>
          <Link to="/checkout" className="checkout-btn">
            Ir al Checkout
          </Link>
          <button onClick={clearCart} className="clear-cart-btn">
            Vaciar Carrito
          </button>
          <Link to="/" className="continue-shopping-btn">
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
