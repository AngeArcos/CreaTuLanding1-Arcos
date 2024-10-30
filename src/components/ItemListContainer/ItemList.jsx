import React from 'react'
import Item from './Item'
import ContadorContainer from '../ContadorContainer/ContadorContainer'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({products}) => {
  return (
    <div>
        {
            products.map( (product) => (
                <div>
                    <Item product={product} key={product.id} />
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
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