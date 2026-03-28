import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [counter , setCounter] = useState(15)
  let [counter , setCounter] = useState(15)

  const maxValue = 20
  const minValue = 0
  function addValue(){
    if(counter<maxValue){
     console.log(counter)
    counter = counter + 1
    setCounter(counter)
    }
  }
   function removeValue(){
    if(counter>minValue){
     counter = counter - 1
     setCounter(counter)
    }
  }

  return (
    <>
     <h1>Special Counter App</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
