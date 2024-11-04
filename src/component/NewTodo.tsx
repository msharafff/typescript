import React,{useContext} from "react";
import { TodoContext } from "../store/Todos-context";
import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo:React.FC = () => {
    const todoCtx = useContext(TodoContext)
    const todoRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoRef.current!.value;


        if(enteredText?.trim().length === 0){
            return;
        }

        todoCtx.addTodo(enteredText)
    }

return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo Text</label>
    <input type="text" id="text" ref={todoRef}/>
    <button>Add Todo</button>
</form>

}

export default NewTodo;