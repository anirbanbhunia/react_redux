import { createStore,bindActionCreators,combineReducers } from "redux";

function todoReducer(state = [],action){ // we gave initial value to states
    if(action.type == 'add_todo'){
        let todoText = action.payload.todoText
        return[...state,{id:state.length+1,text:todoText,isFinished:false}]
    }else if(action.type == 'delete_todo'){
        const todoId = action.payload.todoId
        return state.filter(e => e.id != todoId)
    }else if(action.type == 'edit_todo'){
        const todo = action.payload.todo
        const newText = action.payload.todoText
        return state.map(e => {
            if(e.id == todo.id){
                e.text = newText
            }
            return e
        })
    }else{
        return state
    }
}

//another reducer for user

function userReducer(state = [],action){ // we gave initial value to states
    if(action.type == 'add_user'){
        const userName = action.payload.userName
        return[
            ...state,{name:userName,id:state.length+1}
        ]
    }
    return state
}
//const res = createStore(todoReducer,[]) //createStore just like useReducer state
//if we distracture res
const reducer = combineReducers({todo: todoReducer,user: userReducer})

const{dispatch,subscribe,replaceReducer,getState} = createStore(reducer)

//we make action object to action methods this methods are called action creator
const addTodo = (todoText) => ({type:'add_todo',payload:{todoText:todoText}})
const deleteTodo = (todoId) => ({type:'delete_todo',payload:{todoId:todoId}})

//for userReducer
const addUser = (name) => ({type:'add_user',payload:{userName:name}})

//console.log(res.getState()) //this function show current state
//.replaceReducer() used for replacing current reducer to the new reducer 

//if we want that when our state changed and that time we want some task performed we use subscribe
subscribe(() => console.log(getState()))

const action = bindActionCreators({addTodo,deleteTodo,addUser}, dispatch)
// we bind these method to dispatch 

// dispatch(addTodo('todo1'))

// dispatch(addTodo('todo2'))

// dispatch(deleteTodo(1))

//so instade of doing this.. we do this 
action.addTodo('todo1')
action.addTodo('todo2')
action.deleteTodo(1)
action.addUser('Anirban')


