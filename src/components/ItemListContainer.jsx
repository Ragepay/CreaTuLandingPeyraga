import Card from "./Card.jsx";

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">
            <h1>{props.mensaje}</h1>
            <div>
                <p>Aqui van todos los Productos.</p>
                {/* Lista de Productos */}</div>

            <div>
                <h3>Ejemplo de producto.</h3>
                <Card title="Play Station 4" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FArchivo%3APlayStation_Studios_logo.svg&psig=AOvVaw1qFbWRXPawSzHXj8K2o7sl&ust=1727226427643000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiWwP-x2ogDFQAAAAAdAAAAABAE"
                description="Play station 4, de 2 Terabytes" price="500" onAddToCart={props.onClickMas}
                onRestToCart={props.onClickMenos}/>
            </div>
        </div>
    );
};

export default ItemListContainer;