
import React, { useState, useReducer } from "react";
import todoActions from "../actions/todoActions";

function TodoForm(props) {

    const [newTodoName, setnewTodoName] = useState("");

    const  handleChange = (e) => {
        setnewTodoName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
  //      props.dispatch( todoActions.addTodo(newTodoName))
     //    props.dispatch({type:"ADD_TODO", payload:newTodoName})
        console.log("holla1",newTodoName)
       props.handleItemAdd(newTodoName);
        setnewTodoName(e.target.value) // from props
        setnewTodoName("")
    }

    return (
        <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="type your next todo here"
                    name="item"
                    value={newTodoName}
                    onChange={handleChange}
                />
                <button>Add to your Todo List!</button>
            </form>
    )

}

export default TodoForm;