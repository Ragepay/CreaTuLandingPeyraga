import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; // Opcional: estilos para el NavBar
import { useContext } from 'react';
import { ProductContext } from '../Context/productsContext';

const NavBar = () => {
  // Contesto de productos, en donde utilizamos la variable count del carrito.
  const { count } = useContext(ProductContext);
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">Tienda Peyraga</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <CartWidget counter={count} />
    </nav>
  );
};

export default NavBar;