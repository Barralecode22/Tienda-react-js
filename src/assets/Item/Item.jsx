import './Item.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className="Contenedor">
            <img src={img} alt={nombre} className="imgProduct" />
            <div>
                <h3>{nombre}</h3>
                <h4>{precio}</h4>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
