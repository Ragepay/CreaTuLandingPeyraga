import Card from "../Card/Card.jsx";
import "./ItemListContainer.css";



const ItemListContainer = ({ onClickMas, onClickMenos, productos }) => {
    const BBDD = [...productos]
    return (
        <div className="item-list-container">
            <div>
                <p>Aquí van los filtros</p>
            </div>
            <h3>Productos:</h3>
            <div className="products-contianer">
                {BBDD.map((producto) => (
                    <Card
                        key={producto.id} // Usar una key única
                        title={producto.title}
                        image={producto.image}
                        description={producto.description}
                        price={producto.price}
                        stock={producto.stock}
                        onAddToCart={onClickMas}
                        onRestToCart={onClickMenos}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;