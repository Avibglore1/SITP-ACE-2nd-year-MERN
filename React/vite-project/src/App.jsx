import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [user,setUser] = useState([]);
  
  console.log("outside useEfect");
    useEffect(()=>{
      async function fetchData() {
        const resp = await fetch("https://api.github.com/users");
        const data = await resp.json();
        setUser(data);
        console.log("inside useEfect");
      }
      fetchData()
    }
    
    ,[])
    

  return (
    <>
    {
      user.map(u=>(
        <img src={u.avatar_url} key={u.id} alt="" />
      ))
    }
      
    </>
  )
}

export default App
