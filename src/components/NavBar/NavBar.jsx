import CartWidget from '../CartWidget';
import './NavBar.css'; // Opcional: estilos para el NavBar

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">Tienda Peyraga</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget counter={props.counter}/>
    </nav>
  );
};

export default NavBar;