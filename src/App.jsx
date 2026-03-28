import { useState } from 'react'
<<<<<<< HEAD

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     ></div>
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl" ><button  onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}>olive</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl" > <button onClick = {() => setColor("teal")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "teal"}}>teal</button> </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl " > <button onClick = {() => setColor("maroon")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "maroon"}}>maroon</button> </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl" > <button onClick = {() => setColor("navy")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "navy"}}>navy</button> </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl" > <button onClick = {() => setColor("gray")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>gray</button> </div>
       
      </div>
=======
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
>>>>>>> 065f44a1b6f0958510ab64b01b8c7be283abd819
    </>
  )
}

export default App
