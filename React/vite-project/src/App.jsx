import { useState } from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Main from "./component/Main"
import { context } from "../createContext"

function App(){
  const [count,setCount] = useState(0)
return(
  <context.Provider value={count}>
    <h1>Counter : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <Header/>
    <Main />
    <Footer />
  </context.Provider>
)
}

export default App