import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">
            <h1>{props.mensaje}</h1>
            <div>{/* Lista de Productos */}</div>
        </div>
    );
};

export default ItemListContainer;