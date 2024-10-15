import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card.jsx";
import Filtro from "../filtro/Filtro.jsx";
import "./ItemListContainer.css";

const ItemListContainer = ({ productos }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();
    const categories = [...new Set(productos.map(product => product.category).filter(Boolean))];
    const filteredProducts = selectedCategory === "all"
        ? productos
        : productos.filter(product => product.category === selectedCategory);

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="item-list-container">
            <div className="filter-container">
                <Filtro
                    categories={categories}
                    onCategoryChange={setSelectedCategory}
                />
            </div>
            <h3>Productos:</h3>
            <div className="products-container">
                {filteredProducts.map((producto) => (
                    <Card
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        image={producto.image}
                        description={producto.description}
                        price={producto.price}
                        stock={producto.stock}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;