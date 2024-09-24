import CartWidget from './CartWidget';
import './NavBar.css'; // Opcional: estilos para el NavBar

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">Herramientas Morelli</div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget counter={props.counter}/>
    </nav>
  );
};

export default NavBar;