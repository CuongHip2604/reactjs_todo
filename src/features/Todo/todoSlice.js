const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    getTodos: (state, actions) => {
      return state;
    },
    getTodo: (state, actions) => {
      return state;
    },
    addNewTodo: (state, actions) => {
      return state;
    },
    updateTodo: (state, actions) => {
      return state;
    },
    deleteTodo: (state, actions) => {
      return state;
    },
  },
});

const { actions, reducer } = todoSlice;
export const { getTodos, getTodo, addNewTodo, updateTodo, deleteTodo } = actions;
export default reducer;
