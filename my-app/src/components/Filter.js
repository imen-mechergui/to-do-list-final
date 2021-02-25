import React from 'react'
import {filterTodos} from '../Redux/Actions/TodoActions'
import {useDispatch} from 'react-redux'
const Filter = () => {
const dispatch = useDispatch()
    return (
        <div>
          <button onClick={()=>dispatch(filterTodos("ShowAll"))}>ShowAll</button>
          <button onClick={()=>dispatch(filterTodos("ShowDone"))}>ShowDone</button>
          <button onClick={()=>dispatch(filterTodos("ShowNoDone"))}>ShowNoDone</button>
        </div>
    )
}

export default Filter