import React from 'react'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from '../../db/db.js'
import { Link } from 'react-router-dom'

const Checkout = () => { 
    const [dataForm, setDataForm] =  useState({
        fullname: "",
        phone: "",
        email: "",

    })
    const [idOrder, setIdOrder] = useState(null) 
    const { cart, totalPrice, deleteCart } = useContext(cartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } ) 
    }

    const handleSubmitForm = (event) => { 
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            products: [ ...cart ],
            date: Timestamp.fromDate( new Date()),
            total: totalPrice()
        }

        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => { 
        const orderRef = collection(db, "orders" ) 
        addDoc(orderRef, newOrder)
            .then((response)=> {
                setIdOrder(response.id) 
            })  
            .finally(()=>{
                deleteCart()
            })
    } 

  return ( 
    <div>
        {
            idOrder === null ? (
                <form onSubmit={handleSubmitForm} >
                    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder='Nombre' />
        
                    <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder='Teléfono' />
        
                    <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder='Email' />
        
                    <button type='submit' > Terminar compra </button>
                </form>
            ) : (
                <div>
                    <h2>Orden generada correctamente 😊  </h2>
                    <p>Guarde su número de orden: {idOrder} </p>
                    <Link to="/" >Volver al inicio</Link>
                </div>
            )
        }
    </div>
  )
}

export default Checkout