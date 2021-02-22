const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  listTodo: [],
  isUpdate: false,
  todo: null
};
const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    getTodos: (state, actions) => {
      return state;
    },
    addNewTodo: (state, actions) => {
      state['listTodo'].push(actions.payload);
    },
    updateTodo: (state, actions) => {
      const newTask = actions.payload
      const taskIndex = state.listTodo.findIndex(task => task.id === newTask.id)
      if (taskIndex >= 0) {
        state.listTodo[taskIndex] = newTask
      }
    },
    deleteTodo: (state, actions) => {
      const removeTaskId = actions.payload
      state['listTodo'] = state['listTodo'].filter(task => task.id !== removeTaskId)
      return state
    },
    setIsUpdate: (state, actions) => {
      state.isUpdate = actions.payload.isUpdate
      state.todo = actions.payload.todo
      return state
    }
  },
});

const { actions, reducer } = todoSlice;
export const { getTodos, getTodo, addNewTodo, updateTodo, deleteTodo, setIsUpdate } = actions;
export default reducer;
