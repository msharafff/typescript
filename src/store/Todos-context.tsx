import React , {useState} from "react"
import Todo from "../models/Todo"

type contextObj = {
    items : Todo[],
    addTodo : (text:string) => void,
    removeTodo : (id:string) => void
}

export const TodoContext = React.createContext<contextObj>({
    items:[],
    addTodo: ()=>{},
    removeTodo: (id:string)=>{},
})


const TodoContextProvider : React.FC<React.PropsWithChildren> = (props) => {

     const [todos, setTodos] = useState<Todo[]>([]);
     const addTodoHandler = (text:string) => {
     const newTodo = new Todo(text);
     setTodos((prevTodos)=>{
     return prevTodos.concat(newTodo)
    })
  }

  const deleteTodoHandler = ( todoId:string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== todoId )
    })
  }

  const contextValue:contextObj = {
    items:todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler
  }
  return  <TodoContext.Provider value={contextValue} >{props.children}</TodoContext.Provider>
}


export default TodoContextProvider;