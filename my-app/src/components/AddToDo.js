import React ,{useState} from 'react'
import {useDispatch} from "react-redux"
import { addtodo } from '../Redux/Actions/TodoActions'

const AddToDo = () => {
    const [text, setText]=useState("")
    
    const dispatch = useDispatch()
    const add=()=>{
        dispatch(addtodo({id:Math.random(),isDone:false,text}))
        setText("");
    }
    return (
        <div>
            <input type="text" id="addinput" placeholder="Enter New Task..."   value={text} onChange={(e)=>setText(e.target.value)}/>
        
          <button onClick={add} >Add Task</button>
        </div>
    )
}

export default AddToDo