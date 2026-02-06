import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Página No Encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido eliminada.</p>
        <Link to="/" className="back-home-btn">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
