import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = ({ onClickMas, onClickMenos, productos }) => {
    const { id } = useParams();

    const product = productos.find(product => product.id === id); // Asegúrate de que ambos sean strings

    if (!product) return <p>Producto no encontrado.</p>;

    return (
        <div className="detail-container">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="detail-image" />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button className="card-button" onClick={onClickMenos}>
                - Carrito
            </button>
            <button className="card-button" onClick={onClickMas}>
                + Carrito
            </button>
        </div>
    );
};

export default Detail;
