import { useParams, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <div className="success-icon">✓</div>
        <h1>¡Orden Confirmada!</h1>
        <p className="confirmation-message">
          Tu compra ha sido procesada exitosamente
        </p>
        
        <div className="order-details">
          <h2>Número de Orden</h2>
          <p className="order-id">{orderId}</p>
          <p className="copy-hint">Guarda este número para seguimiento</p>
        </div>

        <div className="next-steps">
          <h3>¿Qué sigue?</h3>
          <ul>
            <li>Recibirás un email de confirmación en los próximos minutos</li>
            <li>Tu pedido será preparado para envío dentro de 24-48 horas</li>
            <li>Podrás rastrear tu orden con el número de referencia anterior</li>
          </ul>
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/')} className="home-btn">
            Volver al inicio
          </button>
          <button onClick={() => navigate('/category/guitarras')} className="continue-btn">
            Continuar comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
