import React from "react"
import AddTodo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter"
import "./App.css"; 

const App=()=>{

 

  return (
    <div className="App">
     <h1> TO-DO-Redux</h1>
      <AddTodo />
     
    <ToDoList/>
    <Filter/>
      
    </div>
  )
  }
export default App; 

 
 
