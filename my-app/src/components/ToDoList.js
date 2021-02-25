import React,{useState} from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux";



 const ToDoList = () => {
     const list=useSelector((state)=>state.todos);
    const filter = useSelector((state) => state.filter)
    let result=[]
    if (filter==="ShowAll"){
        result=list
            }
            else if(filter==="ShowDone"){

            result=list.filter(todos=>todos.isDone===true) }

            else if(filter==="ShowNoDone"){

                result=list.filter(todos=>todos.isDone===false) }
     
 


    return (
       
        <div>
           {
            result.map(el=><Todo key={el.id} el={el}/>)
           }
        </div>
   
    )
}
export default ToDoList;