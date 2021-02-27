import React from 'react';
import "./Todo.css";
import todoActions from "../actions/todoActions";


function Todo (props) {
    return (
        <div 
        onClick={() => props.dispatch(todoActions.toggleComplete(props.todoItem.id))}
        //toggleItemCompleted(props.todoItem.id)} 
        className= {`${props.todoItem.completed ? 'completed' : ''}`}
        >
            <p>
                {props.todoItem.task}
            </p>
        </div>
    )
}

export default Todo;