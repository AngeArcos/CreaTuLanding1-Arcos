import React from 'react'
import "./itemdetail.css"

const ItemDetail = ({products}) => {
  return (
    <div className='item-detail'>
    <img src={products.image} width={300} alt="" />
    <div className='text-detail-container'>
        <h2 className='title-detail'>{products.name}</h2> 
        <p className='text-detail'>{products.description} </p>
        <p className='text-detail'>precio: ${products.price} </p>
    </div>
</div>
  )
}

export default ItemDetail