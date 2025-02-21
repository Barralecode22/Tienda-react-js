import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemList.css';

const ItemList = ({ productos }) => {
    return (
        <div className="ItemsProducts">
            {productos.length > 0 ? (
                productos.map(producto => (
                    <ItemDetail key={producto.id} {...producto} />
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ItemList;
