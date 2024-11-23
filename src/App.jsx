import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContadorContainer from './components/ContadorContainer/ContadorContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'


function App() {


  return (
  <div className='background-page'>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={ <ItemListContainer/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} > </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>
  )
}

export default App


//    <ItemListContainer saludo={"Guias Disponibles"} />
// <ItemListContainer saludo={"Asesorías Disponibles"} />
//<ContadorContainer />
// <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
