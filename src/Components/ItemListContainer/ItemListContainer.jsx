import React, { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        funcionProductos(idCategoria)
            .then(respuesta => setProductos(respuesta));
    }, [idCategoria]);

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
