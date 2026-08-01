
import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [a,setA] = useState("");
  const [b,setB] = useState("");
  const [result,setResult] = useState("");

  const sum = async() =>{
    const result = await axios.get(`http://localhost:3000/sum/${a}/${b}`);
    const data = result.data.sum;
    setResult(data);
    setA("");
    setB("");
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <label htmlFor="">Enter input value:</label>
      <input type="number" value={a} onChange={e=>setA(Number(e.target.value))} /><br /><br />
      <label htmlFor="">Enter second input value:</label>
      <input type="number" value={b} onChange={e=>setB(Number(e.target.value))} /><br/> <br />
      <p>Result: {result}</p>
      <div style={{marginTop: "80px", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px"}}>
          <button onClick={sum}>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
      </div>
    </div>
  )
}

export default App
