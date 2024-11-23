import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

   // const styleButton = { color:"white", fontSize: "20px", backgroundColor: "#F19030", margin: "20px",} //lo cambie por className

    //const styetittle = { color: "black", fontSize: "30px", fontFamily: "fantasy", possition: "center"}

  return (
    <nav className="navbar">
    <Link to="/" >
      <h3 className='navbar-title' >Menu</h3>
      <h3 className='navbar-title' >Venta de cursos</h3>
    </Link>
    <div>
        <CartWidget />
    </div>
    <div className='navbar-button'>
      <button className='style-button'>
        <Link to="/category/Guias">Guias</Link>
      </button>
      <button className='style-button'>
        <Link to="/category/cursos">Cursos</Link>
      </button>
      <button className='style-button'>
        <Link to="/category/Asesorias">Asesorías</Link>
      </button>
    </div>
</nav>
  )
}

export default NavBar