import { useEffect } from "react"

const Banner = () => {

    useEffect(()=> {
      return() => {
        console.log("Me estoy desmontando...") 
      }
    }, [])


    return(
    <div>

    </div>
    )
}

export default Banner