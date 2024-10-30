import React from 'react'
import { getProducts } from '../../data/data.js'
import { useState, useEffect } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({saludo}) => {

    const temas = {color:"black", fontSize: "20px", fontFamily: "fantasy" }

    const [products, setProducts] = useState ([])
    const {idCategory} = useParams()

    console.log(idCategory) 

    useEffect( ()=> {
      getProducts() 
          .then((dataProducts)=> { 
            if(idCategory){
              const productsFilter = dataProducts.filter((product) => product.category === idCategory)
              setProducts(productsFilter)
            }else{
              setProducts(dataProducts) 
            } 
      })
      .catch((error)=> {
          console.error(error) 
       })
  }, [idCategory])

  return (
    <div className='saludo1'>
        <h1 style= {temas}>{saludo}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer