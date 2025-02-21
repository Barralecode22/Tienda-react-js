import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className="Contenedor">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default ItemDetail;
