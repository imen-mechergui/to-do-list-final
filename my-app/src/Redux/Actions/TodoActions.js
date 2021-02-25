import { Add_To_Do,  Edit_To_Do, Delit_To_Do, COMPLETE,FILTER} from "../constants/ActionTypes"

export const addtodo=(newTask)=> {
    return{
        type:Add_To_Do,payload:newTask
    }
}

export const editodo=(id,text)=> {
    return{
        type:Edit_To_Do,payload:{index:id,editedText:text}
    }
}
export const delitt=(id)=>{
    return{
        type: Delit_To_Do,payload:id
    }
}
export const complete=(id)=>{
    return{
        type:COMPLETE, payload:id
    }

}
export const filterTodos=(str)=>{
    return{
        type:FILTER, payload:str 
    }
}