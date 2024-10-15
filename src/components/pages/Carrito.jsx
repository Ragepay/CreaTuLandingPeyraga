import React, { useState } from 'react';
import './Carrito.css'; // Asegúrate de tener un archivo CSS para estilos

const Carrito = ({ productos }) => {
    const [productosCart, setProductos] = useState([...productos]);

    const eliminarProducto = (id) => {
        const nuevosProductos = productosCart.filter(producto => producto.id !== id);
        setProductos(nuevosProductos);
    };

    const aumentarCantidad = (id) => {
        const nuevosProductos = productosCart.map(producto => 
            producto.id === id ? { ...producto, quantity: producto.quantity + 1 } : producto
        );
        setProductos(nuevosProductos);
    };

    const totalCarrito = () => {
        return productosCart.reduce((total, producto) => total + (producto.price * producto.quantity), 0);
    };

    const disminuirCantidad = (id) => {
        const nuevosProductos = productosCart.map(producto => {
            if (producto.id === id && producto.quantity > 1) {
                return { ...producto, quantity: producto.quantity - 1 };
            }
            return producto;
        });
        setProductos(nuevosProductos);
    };

    return (
        <div className="carrito-container">
            <h1 className="carrito-title">Carrito de Compras</h1>
            <div className="productos-list">
                {productosCart.map((producto) => (
                    <div key={producto.id} className="producto-item">
                        <h2>{producto.title}</h2>
                        <p>Precio: ${producto.price}</p>
                        <div className="cantidad-container">
                            <button onClick={() => disminuirCantidad(producto.id)} className="cantidad-button">-</button>
                            <span>{producto.quantity}</span>
                            <button onClick={() => aumentarCantidad(producto.id)} className="cantidad-button">+</button>
                        </div>
                        <button onClick={() => eliminarProducto(producto.id)} className="eliminar-button">Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="total">
                <h3>Total: ${totalCarrito()}</h3>
            </div>
            <button className="finalizar-button">Finalizar Compra</button>
        </div>
    );
};

export default Carrito;
