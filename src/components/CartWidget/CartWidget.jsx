import React from 'react'
import logo from "../CartWidget/assets/logo.png"
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { PiShoppingCartBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import "../CartWidget/CartWidget.css"

const CartWidget = () => {

  const { totalQuantity } = useContext(cartContext)

  const total = totalQuantity()

  return (
    <div>
        <img style={{width: "180px"}} src={logo} alt="CartWidget" />
        <Link to="/Cart" className='Button-carro-compra'>
          <PiShoppingCartBold />
          <p className='Number-carro'> { total >= 1 && total } </p>
        </Link>
    </div>
  )
}

export default CartWidget