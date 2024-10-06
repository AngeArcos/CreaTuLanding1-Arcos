import React from 'react'
import { useState } from "react"

const ContadorContainer = () => {

    const [ contador, setContador ] = useState(0)
    const [ disminuir, setDisminuir] = useState(0)

    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setDisminuir(disminuir - 1)
    }


  return (
    <div>
        <p>Contador: {contador} </p>
        <p>Disminuir: {disminuir} </p>
        <button onClick={ disminuirContador }>-</button>
        <button onClick={ aumentarContador }>+</button>
    </div>
  )
}

export default ContadorContainer