import React from 'react'
import { useState, useEffect } from "react"
import { getProducts } from '../../data/data.js'
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] =useState({})

    const { idProduct } = useParams()

    useEffect( ()=> {
        getProducts()
            .then((dataProducts) => {
                const findProduct = dataProducts.find((productData) => productData.id === idProduct)
                setProducts(findProduct)
            })
    }, [])
  

  return (
    <ItemDetail products={products} /*key={product.id} *//> 
  )
}

export default ItemDetailContainer