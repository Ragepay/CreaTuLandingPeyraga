import './Card.css'; // Asegúrate de crear este archivo para los estilos
import { Link } from 'react-router-dom';

const Card = ({ title, image, description, price, onAddToCart, onRestToCart, stock }) => {
    return (
        <Link to="" >
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <p className="card-price">${price}</p>
                    <p className="card-price">Stock:{stock}</p>
                    <button className="card-button" onClick={onRestToCart}>
                        - Carrito
                    </button>
                    <button className="card-button" onClick={onAddToCart}>
                        + Carrito
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default Card;