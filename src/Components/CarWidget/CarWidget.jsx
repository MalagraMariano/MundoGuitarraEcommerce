import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../contexts/CartContext';
import './CarWidget.css';

const CarWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="car-widget-link">
      <div className="car-widget">
        <FaCartShopping size={25} />
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </div>
    </Link>
  );
}
export default CarWidget;