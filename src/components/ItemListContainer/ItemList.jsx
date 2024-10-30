import React from 'react'
import Item from './Item'
import ContadorContainer from '../ContadorContainer/ContadorContainer'

const ItemList = ({products}) => {
  return (
    <div className="itemlist">
        {
            products.map( (product) => (
                <div>
                    <Item product={product} key={product.id} />
                </div>
            ))
        }
    </div>
  )
}

export default ItemList

//Como anclo los diferentes cursos a cada menú en el navbar. 
// No se como hacer que el contador se relacione con el stock que cada uno de los productos tiene
//Agregar al carrito