import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await API.post("/auth/login", {email, password});
            console.log(data)
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/books")
        } catch (error) {
            alert(error.response.data.message);
        }
        }
    
  return (
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter password' />
        <button>Login</button>
    </form>
  )
}


export default Login