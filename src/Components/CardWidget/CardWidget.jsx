import React from "react";
import "./CardWidget.css"

const CardWidget = () => {

    const imgCarrito = "./src/assets/carrito-de-compras (1).png"
    
  return (
    <div className="iconCarrito">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras" />
    </div>
  )
}

export default CardWidget
