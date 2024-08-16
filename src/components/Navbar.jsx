import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container flex bg-green-900 text-white justify-between h-8 font-bold shadow-lg shadow-blue-300">
        <div className="logo ">
            <span className= "mx-0">
            <img src='https://cdn-icons-png.flaticon.com/512/1/1560.png ' className="h-6 m-0 p-0 "></img>
       </span> </div>
        <ul className="flex gap-9 cursor-pointer; mx-9">
            <li className=" cursor-pointer hover:">Home</li>
            <li className=" cursor-pointer ">Tasks</li>
            <li className=" cursor-pointer ">Todos</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
