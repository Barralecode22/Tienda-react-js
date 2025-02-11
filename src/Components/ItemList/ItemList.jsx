import React from 'react'
import { useState, useEffect } from 'react'
import "./ItemList.css"

const ItemList = () => {

  const [peliculas, setPeliculas] = userState([]);
  const [busqueda, setBusqueda] = useState("");

  const MI_KEY ="c9f04fa4";

  useEffect(() => {
    fetch (`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
    .then(respuesta=> respuesta.json())
    .then(data => {
      setPeliculas(data.Search);
    })
    .catch(error => console.log(error))
  }, [busqueda])

  return (
    <div>
      <form>
        <input type="text" name="busqueda" placeholder="Buscar..." />
      </form>
    </div>
  )
}

export default ItemList
