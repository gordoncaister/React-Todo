import React from "react";
import "./Todo.css"
const Todo = props => {
    return (
        <div 
            className={props.toDo.completed ? "completed" : "todo"}
            onClick={()=>props.toggleToDo(props.toDo.id)}
        >
            <p>{props.toDo.task}</p>
        </div>
    )
}   
export default Todo;