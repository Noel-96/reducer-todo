import React from "react";
import Todo from './Todo'
function TodoList(props) {

    console.log("holla",props.listItems)
    return (
        <div>
            <h1>Here is what you need to get done: </h1>
            {/* { props.listItems.map((todoItem)=>(
                <Todo key={todoItem.id} todoItem={todoItem} toggleItemCompleted={props.toggleItemCompleted}/>
                )  
            )} */}

            {props.state.map((todoItem) => {
          return <Todo  state={props.state} dispatch={props.dispatch} key={todoItem.id} todoItem={todoItem} toggleItemCompleted={props.toggleItemCompleted}/>;
      })}
        </div>
    )

    }   


 export default TodoList;