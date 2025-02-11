import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>MovieDiner</h1>

      <nav>
        <ul>
          <li>Entradas</li>
          <li>Peliculas</li>
          <li>Comida</li>
          <li>Bebidas</li>
          <li>Golosinas</li>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}

export default NavBar
