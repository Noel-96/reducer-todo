import React, { useReducer } from 'react';
import { TOGGLE_COMPLETE, ADD_TODO, CLEAR_COMPLETE } from '../actions/todoActions';




    const todoReducer = (state, action) => {
        console.log("swtich statement",action)
        switch (action.type) {
          case ADD_TODO:
            console.log("swtich statement add todo",action)
            return [
                ...state,
                {
                    task: action.payload, 
                    id: Math.floor(Math.random()*100), 
                    completed: false
                  }
            ];
      
      
          case CLEAR_COMPLETE :
            return  state.filter(todo => !todo.completed)

            case TOGGLE_COMPLETE:
                return state.map((item)=>{
                    if(item.id === action.payload){
                      return {
                        ...item,
                        completed: !item.completed,
                      };
                    } else {
                      return item;
                    }
                  });
  
          default:
            console.log("swtich statement defaualt",action)
            return state;
          };
        };

export default todoReducer;