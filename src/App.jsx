import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContadorContainer from './components/ejemplos/ContadorContainer'
import './App.css'

function App() {


  return (
  <div className='background-page'>
    <NavBar />
    <ItemListContainer saludo={"Cursos Disponibles"} />
    <ItemListContainer saludo={"Guias Disponibles"} />
    <ItemListContainer saludo={"Asesorías Disponibles"} />
    <ContadorContainer />
  </div>
  )
}

export default App
