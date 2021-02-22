import React, { useEffect, useState } from 'react';
import './styles.scss';
import TodoForm from '../TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewTodo, getTodo } from 'features/Todo/todoSlice';

Header.propTypes = {};

function Header(props) {
  const dispatch = useDispatch();
  const isUpdate = useSelector((state) => state.todos.isUpdate);
  const todo = useSelector((state) => state.todos.todo);

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
      <TodoForm onSubmit={handleOnSubmit} todo={todo} isUpdate={isUpdate} />
    </div>
  );
}

export default Header;
