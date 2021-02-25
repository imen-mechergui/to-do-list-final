import React  from 'react'
import Edite from './EditToDo'
import {useDispatch} from "react-redux"
import { complete, delitt } from '../Redux/Actions/TodoActions'


     const Todo = ({el}) => {

      const dispatch = useDispatch();
      const delit=()=>{
      dispatch(delitt(el.id))
      }
      
      const complet=()=>{
        dispatch(complete(el.id))
      }

        return (
            <div> 
              <div>
              {(el.isDone) ?
 <p style={{textDecoration:'line-through'}}> {el.text} </p> : <p> {el.text} </p>}</div>
<Edite el={el} />
<button onClick={delit}  > Delit </button>
<button onClick={complet}> Complete </button>
 
 <div style={{
  display:'flex',
  justifyContent:'space-between',
  width:'60px'
}} > 
    
 
</div>
</div>
    )
 
    
      }

export default Todo