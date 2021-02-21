const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, actions) => {
      return state;
    },
    getTodo: (state, actions) => {
      return state;
    },
    addNewTodo: (state, actions) => {
      state.push(actions.payload);
      return state;
    },
    updateTodo: (state, actions) => {
      const newTask = actions.payload
      const taskIndex = state.findIndex(task => task.id === newTask.id)
      if (taskIndex >= 0) {
        state[taskIndex] = newTask
      }
    },
    deleteTodo: (state, actions) => {
      const removeTaskId = actions.payload
      return state.filter(task => task.id !== removeTaskId)
    },
  },
});

const { actions, reducer } = todoSlice;
export const { getTodos, getTodo, addNewTodo, updateTodo, deleteTodo } = actions;
export default reducer;
