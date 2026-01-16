import CarWidget from "../CarWidget/CarWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/MundoGuitarraLogo.png" alt="Mundo Guitarra" />
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Guitarras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bajos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ukelele</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pedales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teclados</a>
                    </li>
                </ul>
            </div>
            <CarWidget />
        </nav>
    );
}
export default NavBar;