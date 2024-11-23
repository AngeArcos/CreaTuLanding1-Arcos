import React from 'react'
import { useState, useEffect } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection } from "firebase/firestore"
import db from '../../db/db.js'
import "./itemlistcontainer.css"

const ItemListContainer = () => {

  const temas = {color:"black", fontSize: "20px", fontFamily: "fantasy" }

  const [products, setProducts] = useState ([])
  const {idCategory} = useParams()

  const getProducts = () =>{
    const productsRef = collection (db, "products")

    getDocs(productsRef)
      .then((dataDb)=> { 
        const data = dataDb.docs.map((productDb)=> {
          return { id: productDb.id, ...productDb.data() } 
        })
        setProducts(data) 
      }) 
  }

  console.log(idCategory) 
  
  useEffect( ()=> {
    getProducts() 
}, [idCategory])

  return (
    <div className='itemlistcontainer'>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer