const CartWidget = (props) => {
    return (
      <div className="cart-widget">
        <span>🛒</span> {/* Icono del carrito */} 
        <span>{props.counter}</span> {/* Número de artículos en el carrito */}
      </div>
    );
  };
  
  export default CartWidget;