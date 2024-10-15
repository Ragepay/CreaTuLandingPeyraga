import './Card.css'; // Asegúrate de crear este archivo para los estilos
import { Link } from 'react-router-dom';

const Card = ({ id, title, image, description, price, stock }) => {
    return (
        <div className="card">
            <Link to={`/detail/${id}`}>
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <p className="card-price">${price}</p>
                    <p className="card-stock">Stock: {stock}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
