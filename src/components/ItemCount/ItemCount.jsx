import "./ItemCount.css"
import { useState } from "react" 

const ItemCount = ({ stock, addProduct })=> {
    const [count, setCount] = useState(1) 

    const handleClickSubtract = () => {
        if ( count > 1 ){
            setCount( count - 1 )
        }
    }
    
    const handleClickAdd = () => {
        if ( count < stock ){
            setCount( count + 1 )
        }
    }

    return(
        <div className="Counter">
            <div className="controls">
                <button className="Button" onClick={handleClickSubtract}> - </button>
                <h4 className="Number"> {count} </h4>
                <button className="Button" onClick={handleClickAdd}   > + </button>
            </div>
            <div> 
                <button className="Button-carro" onClick={ () => addProduct(count) } > 
                    Agregar al carrito
                </button>
            </div>
        </div>
    )

} 

export default ItemCount
