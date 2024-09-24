import './Card.css'; // Asegúrate de crear este archivo para los estilos

const Card = ({ title, image, description, price, onAddToCart, onRestToCart }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <button className="card-button" onClick={onAddToCart}>
                    + Carrito
                </button>
                <button className="card-button" onClick={onRestToCart}>
                    - Carrito
                </button>
            </div>
        </div>
    );
};

export default Card;