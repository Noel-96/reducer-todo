export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const ADD_TODO = "ADD_TODO";


export default {
  addTodo: (taskName) => {
    return { type: ADD_TODO, payload: taskName};
  },
  toggleComplete: (clickedItemId) => { 
    return { type: TOGGLE_COMPLETE, payload: clickedItemId };
  }
}
