import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveTol = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const handleadd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    saveTol()
  }
  const handleedit = (e, id) => {
    let t = todos.filter(item => item.id == id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });

    setTodos(newTodos)
    saveTol()
  }
  const handledelete = (e, id) => {


    let newTodos = todos.filter(item => {
      return item.id !== id
    });

    setTodos(newTodos)
    saveTol()
  }

  const handlechange = (e) => {
    setTodo(e.target.value)
  }
  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveTol()
  }
  return (
    <>
      <Navbar />
      <div className="container sm:w-full  ">

        <div className="  sm:px-5 bg-green-200 lg:m-20 lg:p-10  rounded-md h-40  font-bold shadow-lg shadow-blue-300">
          <h2 className="sm:p-10px">Add a Todo</h2>
          <input onChange={handlechange} type="text" value={todo} className="border border-slate-950 lg:px-4 lg:w-80 shadow-md shadow-gray-600" />
          <button onClick={handleadd} disabled={todo.length < 3} className=" sm:mx-4 w-10 lg bg-blue-200 lg:mx-5 rounded-md">Add</button>
        </div>


        <div className=" sm:px-5 bg-green-200 lg:m-20  lg:p-5 rounded-md h-auto  font-bold shadow-lg shadow-blue-300 ">
          {todos.length === 0 && <div className="font-bold italic">No Work To-do.</div>}
          {todos.map(item => {
            return <div key={item.id} className="Todo flex my-3 ">
              <input className="mr-3" onClick={handlecheckbox} type="checkbox" id='' name={item.id} value={item.isCompleted}></input>
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

              <div className=" flex justify-end  font-bold  my-2 w-full">
                <button onClick={(e) => handleedit(e, item.id)} className="bg-blue-200 w-16 h-7  overflow-hidden rounded-md mx-5 ">Edit</button>
                <button onClick={(e) => { handledelete(e, item.id) }} className="bg-blue-200 w-16 h-7 overflow-hidden rounded-md mx-5">Delete</button>
              </div>
            </div>
          })} </div>
      </div>
    </>
  )

}
export default App
