import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    const styleButton = { color:"white", fontSize: "20px", backgroundColor: "#F19030", margin: "20px",}

    const styetittle = { color: "black", fontSize: "30px", fontFamily: "fantasy", possition: "center"}

  return (
    <nav className="navbar">
    <div>
        <CartWidget />
    </div>
    <h3 className='navbar-title' style= { styetittle } >Venta de cursos</h3>
    <div className='navbar-button'>
        <button style= { styleButton } >Guias</button>
        <button style= { styleButton } >Cursos</button>
        <button style= { styleButton } >Asesorías</button>
       
    </div>
    
</nav>
  )
}

export default NavBar