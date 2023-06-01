import { createSlice } from "@reduxjs/toolkit";

// slice tra ve action + reducer
const todoSlice = createSlice({
  name: "todo",
  initialState: JSON.parse(localStorage.getItem("todo")) ?? [],
  reducers: {
    addTodo: (state, action) => {
      const newData = {
        ...action.payload,
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
      };
      state.push(newData);
      localStorage.setItem("todo", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const newState = state.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
        return item;
      });
      localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    },
  },
});
// console.log(44, payload);
const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo, editTodo } = actions;
export default reducer;
