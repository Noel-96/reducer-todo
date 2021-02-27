export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";


export default {
  addTodo: (taskName) => {
    console.log("hitting actions",taskName)
    return { type: ADD_TODO, payload: taskName};
  },
  toggleComplete: (clickedItemId) => { 
    return { type: TOGGLE_COMPLETE, payload: clickedItemId };
  },
  clearComplete: () => { 
    return { type: CLEAR_COMPLETE};
  }
}
