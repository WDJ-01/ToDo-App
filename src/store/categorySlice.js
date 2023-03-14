import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const displayState = [];

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [
      {
      title: 'Today',
      id: uuidv4(),
      todos: [],
    }
  ],
    todoList:[ ],
    todoToDisplay: [],
  },
  reducers: {
    /*CATEGORIES */
    addCategory(state, action) {
      state.categoryList.push({
        title: action.payload.input,
        id: uuidv4(),
        todos: [],
      });
    },

    removeCategory(state, action) {
      const removed = action.payload.id;

      state.categoryList = state.categoryList.filter(
        (item) => item.id !== removed
      );
    },
    changeActiveToTrue(state, action) {
      const target = state.categoryList.find(
        (item) => item.id === action.payload.id
      );

      for (let i = 0; i < state.categoryList.length; i++) {
        if (i.id !== action.payload) {
          state.categoryList[i].active = false;
        }
      }

      target.active = true;
    },

    /*TOODS*/
    addTodo(state, action) {
      state.todoList.push({
        title: action.payload.input,
        category: action.payload.target.title,
        id: uuidv4(),
        description: action.payload.textarea,
        completed: false,
      });
    },
    removeTodo(state, action) {
      const removed = action.payload.id;

      state.todoToDisplay = state.todoToDisplay.filter(
        (item) => item.id !== removed
      );
      state.todoList = state.todoList.filter(
        (item) => item.id !== removed
      );

      
    },
 
    changeComplete(state, action) {
      const target = state.todoList.find(
        (item) => item.id === action.payload.id
      );
      target.completed = true;
      console.log(target.completed);
    },

    /*TODOTODISPLAY*/

    addTodoToDisplay(state, action) {
      state.todoToDisplay = state.todoList.filter(
        (item) => item.category === action.payload.title
      );
    },
    addTodoDisplay(state, action){
      state.todoToDisplay = state.todoList.filter(
        (item) => item.category === action.payload.target.title
      );
    },

    clearTodoToDisplay(state, action) {
      state.todoToDisplay = displayState;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
