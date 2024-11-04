import React,{useContext} from "react";
import { TodoContext } from "../store/Todos-context";
import TodoItem from "./todoItem";
import classes from './Todos.module.css';

const Todos : React.FC = () => {
    const todoCtx = useContext(TodoContext)
    return <ul className={classes.todos}>
      {todoCtx.items.map(item => <TodoItem key={item.id} text={item.text} deleteTodo={todoCtx.removeTodo.bind(null, item.id)}/> )}
    </ul>

}

export default Todos ;