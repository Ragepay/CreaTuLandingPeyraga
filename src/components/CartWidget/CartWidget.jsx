import { Link } from 'react-router-dom';

const CartWidget = (props) => {
  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <span>🛒</span> {/* Icono del carrito */}
        <span>{props.counter}</span> {/* Número de artículos en el carrito */}
      </Link>
    </div>
  );
};

export default CartWidget;