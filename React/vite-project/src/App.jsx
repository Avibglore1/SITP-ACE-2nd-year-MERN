import { useState } from "react"
import React from "react";

const Sum = React.memo(()=>{
   let sum = 0
    for(let i=0;i<1000;i++){
      sum += i
    }
    console.log("Sum rendered")
    return(
      <>
        <p>Sum is {sum}</p>
      </>
    )
}) 
 



function App(){
  const [count,setCount] = useState(0);

  console.log("App rendered")
  return(
    <div className="main">
      <h1>Heading</h1>
      <h2>Counter : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Sum/>
    </div>
  )
}

export default App