import React from 'react'
import { useState, useEffect } from "react"
import db from '../../db/db.js'
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] =useState({})

    const { idProduct } = useParams()

    const getProductById = () =>{
      const docRef = doc( db, "products", idProduct )
      getDoc(docRef)
        .then((dataDb)=> {
          const data = { id: dataDb.id, ...dataDb.data() }
          setProducts(data) 
        })
    }


    useEffect( ()=> {
      getProductById()
    }, [])
  

  return (
    <ItemDetail products={products} /> 
  )
}

export default ItemDetailContainer