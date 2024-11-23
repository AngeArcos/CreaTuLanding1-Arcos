import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

    if(cart.length === 0) {
        return(
            <div>
                <h2>No hay productos en el carrito &#128546;</h2>
                <Link to="/" > Volver al inicio</Link>
            </div>
        )
    }

  return (
    <div>
        {
            cart.map((productCart)=> (
                <div key={productCart.id} style={{display: "flex", justifyContent: "space-around", padding: "5%" }} >
                    <img src={productCart.image} alt="" width={100} />
                    <p style={{fontWeight: "bold"}}>{productCart.name} </p>
                    <p>Precio c/u: {productCart.price} </p>
                    <p>Cantidad: {productCart.quantity} </p>
                    <p>Precio parcial: {productCart.quantity * productCart.price} </p>
                    <button onClick={ () => deleteProductById(productCart.id) } >Eliminar producto </button>
                </div>
            )) 
        }
        <p>Precio total: {totalPrice()} </p>
        <button onClick={deleteCart} >Vaciar Carrito</button>
    </div>
  )
}

export default Cart

// PENDIENTE: De repente me aparece un error en que aparezca el precio en un curso (el primero que se visualia en el menu general, de todas maneras cuando lo elimino si continúa sumando los restantes.)