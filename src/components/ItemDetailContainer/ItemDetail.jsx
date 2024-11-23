import React from 'react'
import "./itemdetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({products}) => {

  const[showItemCount, setShowItemCount] = useState(true)

  const { addProductInCart } = useContext(cartContext)

  const addProduct = (count) => { 
    const productCart = { ...products, quantity: count } 
    addProductInCart(productCart)
    setShowItemCount(false)
  }

  return (
  <div className='item-detail'>
    <img src={products.image} width={300} alt="" />
    <div className='text-detail-container'>
        <h2 className='title-detail'>{products.name}</h2> 
        <p className='text-detail'>{products.description} </p>
        <p className='text-detail'>precio: ${products.price} </p>
        {
          showItemCount === true ?
          (<ItemCount stock={products.stock} addProduct={addProduct} alt="" />)
          :
          (<Link to="/cart"> Terminar mi compra </Link>)
        }
    </div>
  </div>
  )
}

export default ItemDetail