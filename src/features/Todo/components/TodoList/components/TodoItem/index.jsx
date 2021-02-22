import { deleteTodo, updateTodo, setIsUpdate } from 'features/Todo/todoSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import './styles.scss';

TodoItem.propTypes = {
  todo: PropTypes.object,
};

function TodoItem(props) {
  const { todo } = props;
  const isUpdate = useSelector((state) => state.todos.isUpdate);
  const dispatch = useDispatch();

  const handleOnChange = (value) => {
    const isChecked = value.target.checked;
    const params = {
      ...todo,
      isCompleted: isChecked,
    };
    const action = updateTodo(params);
    dispatch(action);
  };
  const handleRemoveTask = (todo) => {
    const action = deleteTodo(todo.id);
    dispatch(action);
  };
  const handleUpdateTodo = (todo) => {
    const payload = {
      isUpdate: true,
      todo: todo,
    };
    const actions = setIsUpdate(payload);
    dispatch(actions);
  };
  return (
    <div>
      <section className="_main">
        <ul className="todo_list">
          <li>
            <div className="_view">
              <input
                type="checkbox"
                className="_toggle"
                onChange={(value) => handleOnChange(value)}
              />
              <label>{todo.taskName}</label>
              <div className="_edit" onClick={() => handleUpdateTodo(todo)}>
                <EditIcon />
              </div>
              <button className="_destroy" onClick={() => handleRemoveTask(todo)}></button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default TodoItem;
