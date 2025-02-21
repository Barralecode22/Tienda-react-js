import React, { useEffect, useState } from 'react';
import { getUnProducto } from "../asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
            .catch(error => console.error("Error obteniendo el producto:", error));
    }, [idItem]);

    return (
        <div>
            {producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;
