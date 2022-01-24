// ESTADO - EVENTOS 
// hook 
import { useState } from "react";
// variables de estado
// indican el estado de la aplicacion
// cuando se modifican, se modifica lo que ve el usuario
// son variables globales

const App = () => {

  // cuando hay variables de estado, las debemos declarar como tales 
  // cuando se modifica una variable cualquiera, el dom no cambia
  // cuando se modifica una variable de estado el dom si cambia

  // puedo tener muchos estados por componente
  // los estados pueden ser un dato de cualquier tipo

  // SI QUIERO QUE ALGO CAMBIE EN LA UI, NECESITO UNA VARIABLE DE ESTADO
  const [ contador, setContador ] = useState(0)
  const [nombre, setNombre ] = useState("Oliver")


  const handleClickBotonMas = () => {
    setContador(contador + 1)
    setNombre("Gabi")
  }

  const handleClickBotonMenos = () => {
    setContador(contador - 1)
    setNombre("Oliver")
  }

  return (
    <div>
    <p>El gato de Gri se llama {nombre}</p>
    <p>Contador: <span>{contador}</span></p>
      <button 
          onClick={handleClickBotonMas} 
        >
          +1
        </button>
      <button
        onClick={handleClickBotonMenos}
      >-1</button>
    </div>
  )
}

export default App
