import React, { useReducer } from 'react';
import { TOGGLE_COMPLETE, ADD_TODO } from '../actions/todoActions';




    const todoReducer = (state, action) => {
        switch (action.type) {
          case ADD_TODO:
            return [
                ...state,
                {
                    task: action.payload, 
                    id: Math.floor(Math.random()*100), 
                    completed: false
                  }
            ];
      
      
          case TOGGLE_COMPLETE:
            return { 
              ...state,
              todo: state.todos.map((todo) => {
              if (todo.id === action.payload) {
                return {...todo, complete: !todo.complete}
              } else {
                return todo;
              }
            })};
  
          default:
            return state;
          };
        };

export default todoReducer;