import React from 'react'
import { Link } from "react-router-dom"
import "./itemlistcontainer.css"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) => {
  return (
    <div className='item'>
        <img src={product.image} className='item-img' width={300} alt="" />
        <h2 className='text-itemone'>{product.name}</h2> 
        <p className='text-itemtwo'>Descripción: {product.description} </p>
        <p className='text-itemtwo'>precio: ${product.price} </p>
        <Link to={"/detail/" + product.id} className="button-detail"> Ver detalles </Link>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
    </div>
  )
}

export default Item