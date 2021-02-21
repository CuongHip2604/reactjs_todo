import React from 'react';
import './styles.scss';
import TodoForm from '../TodoForm';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewTodo } from 'features/Todo/todoSlice';

Header.propTypes = {};

function Header(props) {
  const dispatch = useDispatch();

  const handleOnSubmit = (values) => {
    const params = {
      ...values,
      id: uuidv4(),
      isCompleted: false,
    };
    const action = addNewTodo(params);
    dispatch(action);
  };
  return (
    <div className="header">
      <h1>todos</h1>
      <TodoForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Header;
