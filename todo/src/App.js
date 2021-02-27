import React, { useState, useReducer } from "react";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoActions from "./actions/todoActions";
import todoReducer from './reducers/todoReducer'



function App() {
 
   const todos = [
    {
      task: 'Take the dog for a walk',
      id: 0,
      completed: false,
    },
    {
      task: 'secretly kill the cat',
      id: 1,
      completed: false,
    },
  ]
  const [listItems, setlistItems] = useState(todos);
  const [state, dispatch] = useReducer(todoReducer, todos);

  const toggleItemCompleted = (clickedItemId) =>{
    const newTodo = listItems.map((item)=>{
      
        if(item.id === clickedItemId){
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
      setlistItems(newTodo)
  }


  const clearCompleted = () => {
    // const updatedList = listItems.filter(todo => !todo.completed);
    // // filter returns items that pass the test, we want to return false completed
    // setlistItems(updatedList)
    dispatch(todoActions.clearComplete())
    
    
  }


  const handleItemAdd = (taskName) => {
    setlistItems([...listItems, {
      task: taskName, 
      id: Math.floor(Math.random()*100), 
      completed: false
    }] );
   // dispatch(todoActions.addTodo(taskName))
  }


  return (
    <div >{console.log("state in app",state)}
        <h2>Welcome to your Todo App!</h2>
        <TodoList  state={state} dispatch={dispatch} listItems={listItems} toggleItemCompleted={toggleItemCompleted}
       />
        <TodoForm state={state} dispatch={dispatch} handleItemAdd={handleItemAdd} />
        <br />
        <button onClick={clearCompleted}>Clear Completed Tasks</button>

      </div>
  );
}

export default App;
