import React from "react";
import classes from './todoItem.module.css';
 
const TodoItem:React.FC<{text:string; deleteTodo:()=>void}> = (props) => {

    return <li className={classes.item} onClick={props.deleteTodo}>{props.text}</li>
}

export default TodoItem;