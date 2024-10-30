import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    const styleButton = { color:"white", fontSize: "20px", backgroundColor: "#F19030", margin: "20px",}

    const styetittle = { color: "black", fontSize: "30px", fontFamily: "fantasy", possition: "center"}

  return (
    <nav className="navbar">
    <div>
        <CartWidget />
    </div>
    <Link to="/" className="brand primary-font-color">
      <h3 className='navbar-title' style= { styetittle } >Venta de cursos</h3>
    </Link>
    <div className='navbar-button'>
      <button style= { styleButton } >
        <Link to="/category/Guias">Guias</Link>
      </button>
      <button style= { styleButton } >
        <Link to="/category/cursos">Cursos</Link>
      </button>
      <button style= { styleButton } >
        <Link to="/category/Asesorias">Asesorías</Link>
      </button>
    </div>
</nav>
  )
}

export default NavBar