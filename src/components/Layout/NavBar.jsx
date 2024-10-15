import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; // Opcional: estilos para el NavBar

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">Tienda Peyraga</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <CartWidget counter={props.counter}/>
    </nav>
  );
};

export default NavBar;