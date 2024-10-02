import './App.css';
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState(' ');

  const agregarInput = val => {
    setInput(input + val)
  };

  const vaciarInput = () => {
    setInput('')
  };

  const CalcularResultado = () =>{
    try {
      if(input){
        setInput(evaluate(input))
      }else{
        alert("Porfavor ingrese valores para realizar los calculos")
      }
    } catch (error) {
      alert("ERROR: "+error)
    } 
  };

  return (
    <div className="App">
      <div className='logo-contenedor sixtyfour-convergence-logo'>
        <h1>Angel Calculator</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla 
        input={input}
        />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>  
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={vaciarInput}>C</BotonClear>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={CalcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
