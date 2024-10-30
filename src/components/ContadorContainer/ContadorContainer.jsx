import React from 'react'
import { useState, useEffect } from "react"
import Banner from "../banner"

const ContadorContainer = () => {
  const [ contador, setContador ] = useState(0)
  const [toggle, setToggle ] = useState(true)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const alternarToggle = () => {
    setToggle (!toggle) //con esto puedo agregar y ocultar caracteristicas 
  }

  useEffect ( () => {
    console.log("primer useEffect")
  }, []) //Anclarlo con el array de objetos... para que considere el stock.
  
  return (
    <>
      <div>
          <p>Contador: {contador} </p>
          <button onClick={ aumentarContador }> + </button>
      </div>
      <div>
          <p>Valor toggle: {toggle.toString()} </p>
          <button onClick={ alternarToggle }> Alternar </button>
      </div>
      {
        toggle === true && <Banner />
      }
    </>  
    
  )
}

export default ContadorContainer

