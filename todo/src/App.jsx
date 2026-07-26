import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [todo,setTodo] = useState("");
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    const getTodoList = async() =>{
      const todosList = await axios("http://localhost:3000/todo");
      setTasks(todosList.data.todoList)
    };
    getTodoList()
  },[])

  const addTask = async() =>{
    if(todo.length!==0){
      const data = await axios.post("http://localhost:3000/todo",{
       todo
      }     
    )
       setTasks([...tasks, data.data.task]);
       setTodo("");
    }
  }

  const onDelete = async(id) =>{
    const res = await axios.delete(`http://localhost:3000/todo/${id}`)   
    setTasks(res.data.finalList);
  }


  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="flex">
        <input
          type="text"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          placeholder="Enter a task..."
          className="px-4 py-2 rounded-l-lg border-2 border-indigo-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          className="px-5 py-2 rounded-r-lg border-2 border-indigo-600 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300"
          onClick={addTask}
        >
          Add task
        </button>
      </div>
      <ul className="text-amber-300 space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            <span className="text-lg">{t.todo}</span>
            <button
              className="ml-4 text-red-400 hover:text-red-600 transition-colors duration-200 cursor-pointer"
              onClick={()=>onDelete(t._id)}
            >
              ❌
            </button>
          </li>
        ))}
    </ul>

    </div>
  )
}

export default App
