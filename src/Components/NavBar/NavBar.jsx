import CardWidget from '../CardWidget/CardWidget'
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>MovieDiner</h1>

      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><NavLink to="/Categorias/3">Comidas</NavLink></li>
          <li><NavLink to="/Categorias/2">Bebidas</NavLink></li>
          <li><NavLink to="/Categorias/4">Golosinas</NavLink></li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  )
}

export default NavBar;
