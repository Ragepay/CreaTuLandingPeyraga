import Card from "./Card/Card.jsx";
import { useState, useEffect } from "react";


const ItemListContainer = (props) => {

    const [nombre, setNombre] = useState('');

    useEffect(() => {
        const nombreIngresado = prompt("Ingrese su nombre:");
        if (nombreIngresado) {
            setNombre(nombreIngresado);
        }
    }, []);


    return (
        <div className="item-list-container">
            <h1>!Bienvenido a la tienda, {nombre} !</h1>
            <div>
                <p>Aqui van todos los Productos.</p>
                {/* Lista de Productos */}</div>

            <div>
                <h3>Ejemplo de producto.</h3>
                <Card title="Play Station 4" image="https://nextgames.com.ar/img/Public/1040/62236-producto-61ffvkc3d3l-ac-sl1500.jpg"
                    description="Disponible en 500 GB y 1 TB." price="500" onAddToCart={props.onClickMas}
                    onRestToCart={props.onClickMenos} />

            </div>
        </div>
    );
};

export default ItemListContainer;