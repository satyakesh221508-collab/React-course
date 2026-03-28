import { useState } from 'react'

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
    </>
  )
}

export default App
