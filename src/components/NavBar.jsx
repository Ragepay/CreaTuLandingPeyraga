import CartWidget from './CartWidget';
import './NavBar.css'; // Opcional: estilos para el NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;