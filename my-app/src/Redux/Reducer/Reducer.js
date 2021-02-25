import { Add_To_Do, COMPLETE, Delit_To_Do, Edit_To_Do,FILTER} from "../constants/ActionTypes"

const initState={
    todos:[{id:0, text:"item 1", isDone:false},
           {id:1, text:"item 2", isDone:false}

]
,
filter:""
}
const Reducer=(state=initState, action) =>{
    switch(action.type){
        case Add_To_Do:return {
         ...state,todos:[...state.todos,action.payload]
        }
        case Edit_To_Do:return{
            ...state,todos:state.todos.map(el=>el.id===action.payload.index? {...el,text:action.payload.editedText} :el )
        }
        case Delit_To_Do:return{
            ...state,todos:state.todos.filter(el=>el.id!==action.payload)
        }
        case COMPLETE:return{
            ...state,todos:state.todos.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}: el) 
        }
        
        case FILTER:return {
            ...state,filter:action.payload
            }
        default:return state
    }
}
export default Reducer 