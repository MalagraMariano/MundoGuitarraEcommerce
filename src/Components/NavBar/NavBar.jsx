import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../CarWidget/CarWidget";
import './NavBar.css';

const NavBar = () => {
    const categories = [
        { id: 'guitarras', name: 'Guitarras' },
        { id: 'bajos', name: 'Bajos' },
        { id: 'ukelele', name: 'Ukelele' },
        { id: 'pedales', name: 'Pedales' },
        { id: 'teclados', name: 'Teclados' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="/MundoGuitarraLogo.png" alt="Mundo Guitarra" />
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map((category) => (
                        <li key={category.id} className="nav-item">
                            <NavLink 
                                to={`/category/${category.id}`}
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <CarWidget />
        </nav>
    );
}
export default NavBar;