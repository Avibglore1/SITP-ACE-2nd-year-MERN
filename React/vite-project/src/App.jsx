import { useState } from "react"
import "./App.css"
function App(){
  const [num,setNum] = useState("");
  const [text,setText] = useState("");

  
    function checkNumber(){
    if(num%2==0) setText("Even")
    else setText("Odd")
    setNum("")
  }

  
  
  return (
    <div>
      <input type="text" value={num} onChange={(e)=>Number(setNum(e.target.value))} /> 
      <p>{text}</p>
      <button onClick={checkNumber}>Check Number</button>
    </div>
  )
}

export default App