import React from 'react'

const ItemListContainer = ({saludo}) => {

    const temas = {color:"black", fontSize: "20px", fontFamily: "fantasy" }

  return (
    <div className='saludo1'>
        <h1 style= {temas}>{saludo}</h1>
    </div>
  )
}

export default ItemListContainer